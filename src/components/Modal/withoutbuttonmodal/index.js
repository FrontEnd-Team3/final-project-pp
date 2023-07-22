import styled from "styled-components";
import { flexColumn } from "styles/common";

const SingupModal = () => {
	return (
		<S.BackGround>
			<S.Container>
				<S.Enment>Welcome to TRIMM!</S.Enment>
				<S.Korment>회원가입이 완료되었습니다.</S.Korment>
			</S.Container>
		</S.BackGround>
	);
};
export default SingupModal;
const BackGround = styled.div`
	position: absolute;
	width: 97%;
	top: 0%;
	height: 3156px;
	z-index: 1;
	background-color: rgba(255, 255, 255, 0.6);
`;

const Korment = styled.div`
	font-size: 17px;
	color: ${({ theme }) => theme.PALETTE.darkPrimary};
	padding-top: 14px;
	font-weight: bold;
`;
const Enment = styled.div`
	font-size: 38px;
	font-weight: bold;
	font-style: italic;
`;
const Container = styled.div`
	border: 2px solid ${({ theme }) => theme.PALETTE.black};
	border-radius: 10px;
	width: 500px;
	height: 168px;
	position: relative;
	left: 33%;
	top: 10%;
	padding-top: 30px;
	z-index: 1;
	${flexColumn}
	align-items: center;
	background-color: white;
`;
const S = {
	Container,
	Enment,
	Korment,
	BackGround,
};
