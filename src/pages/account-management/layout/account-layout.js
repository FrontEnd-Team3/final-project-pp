import Nav from "pages/my-page/components/Nav";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "styles/common";

const AccoutLayout = () => {
	return (
		<>
			<S.MypageContainer>
				<S.MyProfileWrapper>
					<S.NavWrapper>
						<Nav />
					</S.NavWrapper>
					<Outlet />
				</S.MyProfileWrapper>
			</S.MypageContainer>
			{/* <S.DivisionLine /> */}
		</>
	);
};

export default AccoutLayout;

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
