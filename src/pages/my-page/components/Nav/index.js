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
		<S.MyPageNavWrapper>
			<S.NavMyPageTitle onClick={() => handleNavigateClick("/mypage")}>
				마이페이지
			</S.NavMyPageTitle>
			<div onClick={() => handleClick("/mypage")}>등록 물품</div>
			<div onClick={() => handleClick("/mypage/purchased-item")}>구매 물품</div>
			<div onClick={() => handleClick("/mypage/interest-product")}>
				관심 상품
			</div>
			<div onClick={() => handleClick("/mypage/house-keeping")}>가계부</div>
			<div onClick={() => handleClick("/mypage/review")}>후기</div>
			<S.NavAccountTitle onClick={() => handleNavigateClick("/account")}>
				계정관리
			</S.NavAccountTitle>
			<div onClick={() => handleScrollClick1("/account")}>프로필 관리</div>
			<div onClick={() => handleScrollClick2("/account")}>개인정보 수정</div>
		</S.MyPageNavWrapper>
	);
};

export default Nav;

const MyPageNavWrapper = styled.div`
	div {
		margin: 16px 0px;
		cursor: pointer;
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

const S = { MyPageNavWrapper, NavMyPageTitle, NavAccountTitle };
