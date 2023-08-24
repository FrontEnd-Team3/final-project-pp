import { useNavigate } from "react-router";
import styled from "styled-components";
import { LogoFont } from "styles/common";
import Onecategory from "./oneCategory";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "context/auth.ctx";
import SearchModal from "./SearchModal";
import TokenRepository from "repositories/TokenRepository";
import search from "assets/images/search.png";
import chat from "assets/images/chat.png";
import AlertModal from "pages/product-detail/components/ProductInfo/Modals/alert";

const Header = ({ socket }) => {
	const navigate = useNavigate();
	const [state, setState] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const { accessToken, logout } = useAuth();
	const searchInput = useRef();
	const [filter, setFilter] = useState("등록순");
	const PlaceHolder = "제목, 태그명을 입력해 주세요";

	const [isOpened, setIsOpened] = useState(false);
	const categoryArray = [
		{
			name: "중고거래",
			navigate: `/used-transaction`,
		},
		{
			name: "무료나눔",
			navigate: `/free-transaction`,
		},
		{
			name: "실시간 시세",
			navigate: `/MarketPrice`,
		},
	];

	const handleLogout = async () => {
		try {
			window.localStorage.removeItem("targetChat");
			window.localStorage.removeItem("isSell");
			await logout();
			navigate("/Signin");
		} catch (error) {
			console.log(error);
		}
	};

	// 입력 검색어 params 설정하여 페이지 이동하는
	const handleSearchResult = async e => {
		e.preventDefault();
		const searchValue = searchInput.current.value;
		const keyword = searchValue.replace(/\s/g, ""); // 띄어쓰기 막기
		if (keyword === "") return; // 빈값 막기
		if (keyword.includes("?") || keyword.includes("#")) {
			setIsOpened(true);
			setTimeout(() => {
				setIsOpened(false);
			}, 1000);
			return;
		}
		navigate(`/search/${keyword}`);
		searchInput.current.value = "";
		setIsOpen(false);
	};

	const [newChat, setNewChat] = useState(false);

	const closeModal = () => {
		setIsOpen(true);
	};

	useEffect(() => {
		socket.emit(`connect-user`, { token: TokenRepository.getToken() });
		socket.on("newMessage", data => {
			setNewChat(true);
		});
	}, [socket]);

	return (
		<>
			<S.Container>
				<S.LogoWrapper
					onClick={() => {
						setState(0);
					}}
				>
					<div>
						<S.Title
							onClick={() => {
								navigate(`/`);
							}}
						>
							TRIMM
						</S.Title>
						<S.SideTitle>
							Trade, Reuse, Innovate and Make your Moment
						</S.SideTitle>
					</div>
					<S.SearchWrapper>
						<form onSubmit={handleSearchResult}>
							<S.SearchBar
								placeholder="제목, 태그명을 입력해주세요"
								ref={searchInput}
							/>
							<S.Searchicon
								src={search}
								onClick={handleSearchResult}
							></S.Searchicon>
						</form>
					</S.SearchWrapper>

					<div>
						{newChat && <S.NewChat>새로운 채팅 도착!</S.NewChat>}
						<S.InfoWrapper>
							<S.MediaSearchIcon
								src={search}
								onClick={(handleSearchResult, closeModal)}
							></S.MediaSearchIcon>
							{accessToken ? (
								<div style={{ cursor: "pointer" }} onClick={handleLogout}>
									LOGOUT
								</div>
							) : (
								<div
									style={{ cursor: "pointer" }}
									onClick={() => {
										navigate("/Signin");
									}}
								>
									LOGIN
								</div>
							)}

							<div
								style={{ cursor: "pointer" }}
								onClick={() => {
									accessToken
										? navigate("/mypage/:category")
										: navigate("/Signin");
								}}
							>
								MYPAGE
							</div>
							<div
								style={{ cursor: "pointer" }}
								onClick={() => {
									navigate(`/Chat`);
									setNewChat(false);
								}}
							>
								CHAT
								<S.Chaticon src={chat}></S.Chaticon>
							</div>
						</S.InfoWrapper>
					</div>
				</S.LogoWrapper>
				<S.CategoryWrapper>
					<S.Category>
						{categoryArray.map((category, i) => (
							<Onecategory
								key={i}
								category={category}
								i={i}
								state={state}
								setState={setState}
							/>
						))}
					</S.Category>

					<S.Sellbutton
						onClick={() => {
							navigate(`/productRegister`);
							setState(0);
						}}
					>
						판매하기
					</S.Sellbutton>
					{isOpen && (
						<SearchModal
							PlaceHolder={PlaceHolder}
							setIsOpen={setIsOpen}
							handleSearchResult={handleSearchResult}
							searchInput={searchInput}
						/>
					)}
				</S.CategoryWrapper>
			</S.Container>
			{isOpened && (
				<AlertModal
					message={`"?"나 "#"을 포함한 특수문자는 검색이 불가합니다.`}
				/>
			)}
		</>
	);
};

export default Header;

const Form = styled.form`
	position: relative;
	margin-top: 200px;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
`;
const closeButton = styled.button`
	font-size: 25px;
	cursor: pointer;
	position: absolute;
	top: 2%;
	right: 0;
	transform: translate(-50%, -50%);
	border: none;
	color: white;
	background-color: transparent;
`;
const ModalSearchicon = styled.img`
	width: 18px;
	cursor: pointer;
	position: absolute;
	bottom: 23px;
	right: 0;
	transform: translate(-50%, -50%);
`;
const ModalSearchBar = styled.input`
	padding: 13px 0px 13px 5px;
	padding-left: 13px;
	width: 400px;
	position: relative;
	margin-top: 200px;
	left: 50%;
	transform: translate(-50%, -50%);
	border: none;
	border-radius: 10px;
	:focus {
		outline: none;
	}
	border-bottom: 1.5px solid ${({ theme }) => theme.PALETTE.black};
	::placeholder {
		color: black;
		font-size: 14px;
		font-weight: bold;
	}
`;
const BackGround = styled.div`
	background-color: rgba(80, 80, 80, 0.5);
	position: fixed;
	left: 0%;
	max-width: 100%;
	width: 100%;
	top: 0%;
	height: 100vh;
	z-index: 1;
`;

const NewChat = styled.div`
	border: 1.8px solid ${({ theme }) => theme.PALETTE.darkPrimary};
	position: absolute;
	margin-left: 130px;
	margin-top: 10px;
	text-align: center;
	font-size: 12px;
	font-weight: bold;
	padding: 6px 8px 6px 8px;
	height: 30px;
	width: 110px;
	color: ${({ theme }) => theme.PALETTE.darkPrimary};
	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin-left: 100px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-left: 90px;
	}
`;
const Sellbutton = styled.button`
	width: 110px;
	height: 45px;
	border-radius: 0;
	border: none;
	font-size: 16px;
	color: white;
	font-weight: bold;
	background-color: ${({ theme }) => theme.PALETTE.primary};
	cursor: pointer;
	transition: background 0.1s;
	:hover {
		background: rgba(60, 179, 113, 0.9);
	}
	@media ${({ theme }) => theme.DEVICE.pc} {
		width: 100px;
		font-size: 14px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 90px;
		height: 42px;
		font-size: 13px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 80px;
		height: 40px;
		font-size: 12px;
	}
`;
const Chaticon = styled.img`
	width: 22px;
	position: relative;
	top: 4px;
	left: 4px;
`;

const InfoWrapper = styled.div`
	display: flex;
	width: 230px;
	justify-content: space-between;
	font-weight: bold;
	font-size: 16px;
	margin-top: 50px;
	div:nth-child(4) {
		color: ${({ theme }) => theme.PALETTE.darkPrimary};
		position: relative;
		bottom: 7px;
	}
	@media ${({ theme }) => theme.DEVICE.pc} {
		width: 210px;
		font-size: 15px;
		div:nth-child(4) {
			position: relative;
			bottom: 8px;
		}
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 210px;
		font-size: 15px;
		div:nth-child(4) {
			position: relative;
			bottom: 8px;
		}
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 200px;
		font-size: 14px;
		div:nth-child(4) {
			position: relative;
			bottom: 8px;
		}
	}
`;

const NavPage = styled.div`
	cursor: pointer;
	:hover {
		color: ${({ theme }) => theme.PALETTE.darkPrimary};
	}
`;

const Category = styled.div`
	display: flex;
	font-size: 16px;
	font-weight: bold;
	width: 270px;
	justify-content: space-between;
	@media ${({ theme }) => theme.DEVICE.pc} {
		width: 230px;
		font-size: 14px;
	}

	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-left: 5px;
		width: 200px;
		font-size: 12px;
	}
`;

const Searchicon = styled.img`
	width: 18px;
	z-index: 1;
	cursor: pointer;
	margin-left: -20px;
	@media ${({ theme }) => theme.DEVICE.pc} {
		margin-left: -30px;
	}
`;

const MediaSearchIcon = styled.img`
	width: 27px;
	z-index: 1;
	cursor: pointer;
	margin-left: -30px;
	margin-bottom: 10px;
	margin-top: -9px;
	padding: 4px 4px;
	display: none;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: block;
	}
`;
const SearchWrapper = styled.div`
	display: flex;
	margin-top: 30px;
	margin-left: 10px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: none;
	}
`;

const SearchBar = styled.input`
	margin-top: 10px;
	padding-bottom: 6px;
	width: 450px;
	border: none;
	padding-left: 5px;
	:focus {
		outline: none;
	}
	border-bottom: 1.5px solid ${({ theme }) => theme.PALETTE.black};
	::placeholder {
		color: black;
		font-size: 14px;
	}
	@media ${({ theme }) => theme.DEVICE.pc} {
		margin-right: 10px;
		width: 320px;
	}
`;

const Title = styled.div`
	font-size: 48px;
	font-weight: 800;
	cursor: pointer;
	font-style: italic;
	${LogoFont}
	@media ${({ theme }) => theme.DEVICE.pc} {
		font-size: 45px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		font-size: 42px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-top: 31px;
		font-size: 38px;
	}
`;

const SideTitle = styled.div`
	${LogoFont}
	font-style: italic;
	font-weight: bold;
	font-size: 11px;
	@media ${({ theme }) => theme.DEVICE.pc} {
		font-size: 8px;
		margin-left: 3px;
	}
	/* @media ${({ theme }) => theme.DEVICE.tablet} {
		font-size: 6px;
	} */
	@media ${({ theme }) => theme.DEVICE.mobile} {
		display: none;
	}
`;

const LogoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	max-width: 1060px;
	margin-bottom: -20px;
`;

const CategoryWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	max-width: 1060px;
	height: 30px;
	position: relative;
	top: 80px;
	margin-bottom: 60px;
	padding-bottom: 40px;
`;

const Container = styled.div`
	max-width: 1060px;
	margin: 0 auto;
	border-bottom: 1px solid #dddddd;
	padding-bottom: 20px;
	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 0px 5px 20px 5px;
	}
`;

const S = {
	LogoWrapper,
	Title,
	SearchBar,
	Category,
	NavPage,
	CategoryWrapper,
	SideTitle,
	Container,
	InfoWrapper,
	Chaticon,
	SearchWrapper,
	Searchicon,
	Sellbutton,
	NewChat,
	MediaSearchIcon,
	BackGround,
	ModalSearchBar,
	ModalSearchicon,
	closeButton,
	Form,
};
