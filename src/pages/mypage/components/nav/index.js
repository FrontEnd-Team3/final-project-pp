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
	const handleNavPurchasedItem = () => {
		navigate("/mypage/purchased-item");
	};

	const handleNavInterestProduct = () => {
		navigate("/mypage/interest-product");
	};

	const handleNavHouseKeeping = () => {
		navigate("/mypage/house-keeping");
	};

	const handleNavReview = () => {
		navigate("/mypage/review");
	};

	return (
		<S.MyPageNavWrapper>
			<S.NavMyPageTitle onClick={handleNavMyPage}>마이페이지</S.NavMyPageTitle>
			<div onClick={handleNavMyPage}>등록 물품</div>
			<div onClick={handleNavPurchasedItem}>구매 물품</div>
			<div onClick={handleNavInterestProduct}>관심 상품</div>
			<div onClick={handleNavHouseKeeping}>가계부</div>
			<div onClick={handleNavReview}>후기</div>
			<S.NavAccountTitle>계정관리</S.NavAccountTitle>
			<div onClick={handleNavAccountCorrection}>개인정보 수정</div>
			<div onClick={handleNavProfile}>프로필 관리</div>
		</S.MyPageNavWrapper>
	);
};

export default Nav;
const MasterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

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

const S = { MasterWrapper, MyPageNavWrapper, NavMyPageTitle, NavAccountTitle };
