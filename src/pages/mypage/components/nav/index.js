import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
	const navigate = useNavigate();

	const handleNavAccountCorrection = () => {
		navigate("/privacy");
	};
	const handleNavProfile = () => {
		navigate("/profile");
	};
	const handleNavMyPage = () => {
		navigate("/mypage");
	};
	const handleNavTransaction = () => {
		navigate("/transaction-history");
	};

	return (
		<S.MyPageNavWrapper>
			<S.NavMyPageTitle onClick={handleNavMyPage}>마이페이지</S.NavMyPageTitle>
			<div onClick={handleNavTransaction}>등록 물품</div>
			<div>관심 상품</div>
			<div>가계부</div>
			<div>후기</div>
			<S.NavAccountTitle>계정관리</S.NavAccountTitle>
			<div onClick={handleNavAccountCorrection}>개인정보 수정</div>
			<div onClick={handleNavProfile}>프로필 관리</div>
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
