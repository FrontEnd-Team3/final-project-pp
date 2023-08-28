import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LogoFont } from "styles/common";

const MiniNav = () => {
	const navigate = useNavigate();
	const [scrollY, setScrollY] = useState(0);
	const [openNav, setOpenNav] = useState(false);
	const [openIcon, setOpenIcon] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleNavigateClick = path => {
		navigate(path);
		isCloseNav();
	};
	const handleClick = async path => {
		await navigate(path);
		isCloseNav();
		setTimeout(() => {
			window.scrollTo(0, 665);
		}, 0);
	};

	const handleScrollClick1 = async path => {
		await navigate(path);
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 0);
	};

	const handleScrollClick2 = async path => {
		await navigate(path);
		setTimeout(() => {
			window.scrollTo(0, 865);
		}, 0);
	};

	const isOpenNav = () => {
		setOpenNav(true);
		setOpenIcon(false);
	};

	const isCloseNav = () => {
		setOpenNav(false);
		setOpenIcon(true);
	};

	return (
		<>
			<S.NavIcon open={openIcon} onClick={isOpenNav}>
				<img src="/img/햄버거버튼.png" />
			</S.NavIcon>
			<S.Wrapper open={openNav}>
				<S.Container>
					<S.MyPageNavWrapper open={openNav}>
						<S.TitleWrapper>
							<S.NavMyPageTitle
								onClick={() => handleNavigateClick("/mypage/0")}
							>
								마이페이지
							</S.NavMyPageTitle>
							<div onClick={isCloseNav}>
								<img src="/img/뒤로가기버튼.png" />
							</div>
						</S.TitleWrapper>
						<div onClick={() => handleClick("/mypage/0")}>등록 물품</div>
						<div onClick={() => handleClick("/mypage/purchased-item")}>
							구매 물품
						</div>
						<div onClick={() => handleClick("/mypage/interest-product")}>
							관심 상품
						</div>
						<div onClick={() => handleClick("/mypage/house-keeping")}>
							가계부
						</div>
						<S.NavAccountTitle
							onClick={() => handleNavigateClick("/account/management")}
						>
							계정관리
						</S.NavAccountTitle>
						<div onClick={() => handleNavigateClick("/account/management")}>
							개인정보 수정
						</div>
						<div onClick={() => handleNavigateClick("/account/pwchange")}>
							비밀번호 변경
						</div>
					</S.MyPageNavWrapper>
					<S.LogoWrapper>
						<S.LogoTitle
							onClick={() => {
								navigate(`/`);
							}}
						>
							TRIMM
						</S.LogoTitle>
						<S.SideTitle>
							Trade, Reuse, Innovate and Make your Moment
						</S.SideTitle>
					</S.LogoWrapper>
				</S.Container>
			</S.Wrapper>
		</>
	);
};

export default MiniNav;

const NavIcon = styled.div`
	display: none;
	cursor: pointer;
	@media ${({ theme }) => theme.DEVICE.pc} {
		display: ${props => (props.open ? "block" : "none")};
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: ${props => (props.open ? "block" : "none")};
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		display: ${props => (props.open ? "block" : "none")};
	}
	img {
		width: 20px;
	}
`;

const TitleWrapper = styled.div`
	margin: 0px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	img {
		width: 22px;
		height: 22px;
	}
`;

const LogoWrapper = styled.div`
	margin-top: 200px;
	text-align: center;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin-top: 200px;
		text-align: center;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-top: 200px;
	}
`;
const SideTitle = styled.div`
	font-style: italic;
	font-weight: bold;
	font-size: 16px;
	${LogoFont}

	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	}
`;

const LogoTitle = styled.div`
	font-size: 55px;
	font-weight: bold;
	cursor: pointer;
	font-style: italic;
	${LogoFont}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: 42px;
	}
`;
const MyPageNavWrapper = styled.div`
	display: none;
	div {
		margin: 16px 0px;
		cursor: pointer;
	}
	@media ${({ theme }) => theme.DEVICE.pc} {
		display: ${props => (props.open ? "block" : "none")};
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: ${props => (props.open ? "block" : "none")};
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		display: ${props => (props.open ? "block" : "none")};
	}
`;
const NavMyPageTitle = styled.div`
	font-size: 22px;
	font-weight: bold;
`;

const NavAccountTitle = styled.div`
	font-size: 22px;
	font-weight: bold;
`;

const Wrapper = styled.div`
	display: none;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 9999;
	@media ${({ theme }) => theme.DEVICE.pc} {
		display: ${props => (props.open ? "block" : "none")};
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: ${props => (props.open ? "block" : "none")};
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		display: ${props => (props.open ? "block" : "none")};
	}
`;

const Container = styled.div`
	display: none;
	width: 60%;
	height: 100%;
	z-index: 10000;
	position: relative;
	background-color: ${({ theme }) => theme.PALETTE.white};
	padding: 16px;
	display: flex;
	flex-direction: column;
	font-size: 20px;
	font-weight: bold;
	@media ${({ theme }) => theme.DEVICE.pc} {
		display: block;
		// display: ${props => (props.open ? "block" : "none")};
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: block;
		// display: ${props => (props.open ? "block" : "none")};
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		display: block;
		// display: ${props => (props.open ? "block" : "none")};
	}
`;

const S = {
	Wrapper,
	Container,
	TitleWrapper,
	MyPageNavWrapper,
	NavMyPageTitle,
	NavAccountTitle,
	NavIcon,
	LogoTitle,
	SideTitle,
	LogoWrapper,
};
