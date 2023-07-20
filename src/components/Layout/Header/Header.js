import { useNavigate } from "react-router";
import styled from "styled-components";
import { primaryFont } from "styles/common";
import Onecategory from "./onecategory";
import { useState } from "react";

const Header = () => {
	const navigate = useNavigate();
	const [state, setState] = useState(1);
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
	return (
		<>
			<S.Container>
				<S.LogoWrapper>
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
						<S.SearchBar></S.SearchBar>
						<S.Searchicon src="img/search.png"></S.Searchicon>
					</S.SearchWrapper>
					<div>
						<S.NewChat>새로운 채팅 도착!</S.NewChat>
						<S.InfoWrapper>
							<div
								style={{ cursor: "pointer" }}
								onClick={() => {
									navigate("/Signup");
								}}
							>
								LOGIN
							</div>
							<div style={{ cursor: "pointer" }}>MYPAGE</div>
							<div
								style={{ cursor: "pointer" }}
								onClick={() => navigate(`/Chat`)}
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
								category={category}
								i={i}
								state={state}
								setState={setState}
							/>
						))}
					</S.Category>
					<S.Sellbutton onClick={() => navigate(`/productRegister`)}>
						판매하기
					</S.Sellbutton>
				</S.CategoryWrapper>
			</S.Container>
		</>
	);
};

export default Header;
const NewChat = styled.div`
	border: 1.8px solid #2e8b57;
	width: 105px;
	font-size: 12px;
	font-weight: bold;
	padding-left: 4px;
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
	${primaryFont}
	font-size: 16px;
	color: white;
	font-weight: 900;
	background-color: #3cb371;
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
	position: relative;
	top: 10px;
	right: 3px;
	div:nth-child(3) {
		color: ${({ theme }) => theme.PALETTE.darkPrimary};
		position: relative;
		bottom: 7px;
	}
`;
const Container = styled.div`
	width: 100%;
	border-bottom: 1px solid #dddddd;
	padding-bottom: 20px;
`;
const SideTitle = styled.div`
	${primaryFont}
	font-style: italic;
	font-weight: bold;
	font-size: 11px;
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
	${primaryFont}
`;
const Searchicon = styled.img`
	width: 18px;
	z-index: 1;
	position: relative;
	right: 14px;
	cursor: pointer;
`;
const SearchWrapper = styled.div`
	position: relative;
	top: 15px;
`;

const SearchBar = styled.input`
	position: relative;
	padding-bottom: 6px;
	width: 450px;
	left: 12px;
	border: none;
	:focus {
		outline: none;
	}
	border-bottom: 1.5px solid #404040;
	::placeholder {
		color: black;
		font-size: 13px;
	}
`;

const Title = styled.div`
	font-size: 48px;
	font-weight: bold;
	cursor: pointer;
	font-style: italic;
`;

const LogoWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	${primaryFont}
	width: 1060px;
	position: relative;
	top: 20px;
`;

const CategoryWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	${primaryFont}
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
