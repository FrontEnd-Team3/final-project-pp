import styled from "styled-components";
import MyProfile from "./components/MyProfile";
import Nav from "./components/Nav";
import { flexCenter } from "styles/common";

const Mypage = () => {
	return (
		<>
			<S.MypageContainer>
				<S.MyProfileWrapper>
					<S.NavWrapper>
						<Nav />
					</S.NavWrapper>
					<MyProfile />
				</S.MyProfileWrapper>
			</S.MypageContainer>
			<S.DivisionLine />
		</>
	);
};

export default Mypage;

const MypageContainer = styled.div`
	${flexCenter}
	padding: 20px 0;
	width: 100%;
`;
const NavWrapper = styled.div`
	position: absolute;
	padding-top: 124px;
	left: -220px;
`;

const MyProfileWrapper = styled.div`
	width: 962px;
	position: relative;
`;

const DivisionLine = styled.hr`
	width: 962px;
	height: 1px;
	background-color: #cccccc;
	margin: 0 auto;
`;

const S = {
	NavWrapper,
	MypageContainer,
	DivisionLine,
	MyProfileWrapper,
};
