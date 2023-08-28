import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
	const navigate = useNavigate();
	const [scrollY, setScrollY] = useState(0);

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
	};
	const handleClick = async path => {
		await navigate(path);
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

	return (
		<div>
			{/* <S.NavIcon>
				<img src="/img/햄버거버튼.png" />
			</S.NavIcon> */}
			<S.MyPageNavWrapper>
				<S.NavMyPageTitle onClick={() => handleNavigateClick("/mypage")}>
					마이페이지
				</S.NavMyPageTitle>
				<div onClick={() => handleClick("/mypage/0")}>등록 물품</div>
				<div onClick={() => handleClick("/mypage/purchased-item")}>
					구매 물품
				</div>
				<div onClick={() => handleClick("/mypage/interest-product")}>
					관심 상품
				</div>
				<div onClick={() => handleClick("/mypage/house-keeping")}>가계부</div>
				<S.NavAccountTitle>계정관리</S.NavAccountTitle>
				<div onClick={() => handleNavigateClick("/account/management")}>
					개인정보 수정
				</div>
				<div onClick={() => handleNavigateClick("/account/pwchange")}>
					비밀번호 변경
				</div>
			</S.MyPageNavWrapper>
		</div>
	);
};

export default Nav;

const NavIcon = styled.div`
	display: none;
	cursor: pointer;
	@media ${({ theme }) => theme.DEVICE.pc} {
		display: block;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: block;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		display: block;
	}
	// img {
	// 	width: 20px;
	// }
`;

const MyPageNavWrapper = styled.div`
	div {
		margin: 16px 0px;
		cursor: pointer;
	}
	@media ${({ theme }) => theme.DEVICE.pc} {
		display: none;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: none;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		display: none;
	}
`;
const NavMyPageTitle = styled.div`
	font-size: 22px;
	font-weight: bold;
`;

const NavAccountTitle = styled.div`
	font-size: 22px;
	font-weight: bold;
	margin-top: 20px;
`;

const S = {
	MyPageNavWrapper,
	NavMyPageTitle,
	NavAccountTitle,
	NavIcon,
};
