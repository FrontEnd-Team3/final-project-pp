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
	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 0 20px;
	}
`;
const NavWrapper = styled.div`
	position: absolute;
	padding-top: 124px;
	left: -220px;
	@media ${({ theme }) => theme.DEVICE.pc} {
		display: none;
	}
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
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		width: 90%;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 80%;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		display: none;
	}
`;

const S = {
	NavWrapper,
	MypageContainer,
	DivisionLine,
	MyProfileWrapper,
};
