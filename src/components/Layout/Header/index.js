import { useNavigate } from "react-router";
import styled from "styled-components";
import { LogoFont } from "styles/common";
import Onecategory from "./oneCategory";
import { useRef, useState } from "react";
import { useAuth } from "context/auth.ctx";
import { useChatData } from "context/chatData.ctx";
import { useChatList } from "context/chatList.ctx";

const Header = () => {
	const navigate = useNavigate();
	const [state, setState] = useState(null);
	const { accessToken, logout } = useAuth();
	const searchInput = useRef();
	const [filter, setFilter] = useState("등록순");
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
		navigate(`/search/${keyword}?filter=${filter}`);
		searchInput.current.value = "";
	};
	const { socket, targetChat } = useChatData();

	const [chatList] = useChatList();

	// 전역 메시지 알림
	// useEffect(() => {
	// 	socket.on("newMessage", data => {
	// 		setIsNewChat(data);
	// 	});
	// }, [socket, targetChat]);

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
								src="img/search.png"
								onClick={handleSearchResult}
							></S.Searchicon>
						</form>
					</S.SearchWrapper>
					<div>
						{chatList.length > 0 && <S.NewChat>새로운 채팅 도착!</S.NewChat>}
						<S.InfoWrapper>
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
									accessToken ? navigate("/mypage") : navigate("/Signin");
								}}
							>
								MYPAGE
							</div>
							<div
								style={{ cursor: "pointer" }}
								onClick={() => {
									navigate(`/Chat`);
								}}
							>
								CHAT
								<S.Chaticon src="img/chat.png"></S.Chaticon>
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
				</S.CategoryWrapper>
			</S.Container>
		</>
	);
};

export default Header;
const NewChat = styled.div`
	border: 1.8px solid ${({ theme }) => theme.PALETTE.darkPrimary};
	text-align: center;
	width: 104px;
	font-size: 12px;
	font-weight: bold;
	padding-top: 6px;
	height: 30px;
	position: relative;
	left: 140px;
	color: ${({ theme }) => theme.PALETTE.darkPrimary};
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
	position: relative;
	bottom: 5px;
	cursor: pointer;
	transition: background 0.1s;

	:hover {
		background: rgba(60, 179, 113, 0.9);
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
	margin-top: 20px;
	div:nth-child(3) {
		color: ${({ theme }) => theme.PALETTE.darkPrimary};
		position: relative;
		bottom: 7px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 150px;
		margin-right: 40px;
	}
`;
const Container = styled.div`
	width: 1060px;
	margin: 0 auto;
	border-bottom: 1px solid #dddddd;
	padding-bottom: 20px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 780px;
	}
`;

const SideTitle = styled.div`
	${LogoFont}
	font-style: italic;
	font-weight: bold;
	font-size: 11px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		padding-left: 10px;
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
`;
const Searchicon = styled.img`
	width: 18px;
	z-index: 1;
	cursor: pointer;
	margin-left: -20px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 15px;
	}
`;
const SearchWrapper = styled.div`
	display: flex;
	margin-top: 30px;
	margin-left: 10px;
`;

const SearchBar = styled.input`
	margin-top: 10px;
	padding-bottom: 6px;
	width: 450px;
	border: none;
	:focus {
		outline: none;
	}
	border-bottom: 1.5px solid ${({ theme }) => theme.PALETTE.black};
	::placeholder {
		color: black;
		font-size: 13px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 320px;
		margin-right: 30px;
		margin-bottom: 10px;
	}
`;

const Title = styled.div`
	font-size: 48px;
	font-weight: 800;
	cursor: pointer;
	font-style: italic;
	${LogoFont}
`;

const LogoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 30px;
	width: 1060px;
	margin-bottom: -20px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 780px;
	}
`;

const CategoryWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	width: 1060px;
	height: 30px;
	position: relative;
	top: 80px;
	margin-bottom: 60px;
	padding-bottom: 40px;
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
};
