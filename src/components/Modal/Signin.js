import { useNavigate } from "react-router";
import styled from "styled-components";
import { flexColumn } from "styles/common";

const SinginModal = ({ setOpen }) => {
	const navigate = useNavigate();
	return (
		<S.BackGround>
			<S.Container>
				<S.Close
					onClick={() => {
						setOpen(false);
					}}
				>
					x
				</S.Close>
				<S.Enment>Please Join Us!</S.Enment>
				<S.Korment>로그인이 필요합니다.</S.Korment>
				<S.Button
					onClick={() => {
						navigate("/Signup");
					}}
				>
					로그인 하러 가기
				</S.Button>
			</S.Container>
		</S.BackGround>
	);
};
export default SinginModal;
const Close = styled.div`
	position: relative;
	left: 230px;
	cursor: pointer;
	font-size: 16px;
	font-weight: bold;
`;
const BackGround = styled.div`
	position: absolute;
	left: 0%;
	width: 100%;
	top: 0%;
	height: 3156px;
	z-index: 1;
	background-color: rgba(40, 40, 40, 0.4);
`;
const Button = styled.button`
	background-color: ${({ theme }) => theme.PALETTE.black};
	color: white;
	border: none;
	width: 250px;
	height: 30px;
	position: relative;
	top: 18px;
	cursor: pointer;
`;
const Korment = styled.div`
	font-size: 15px;
	color: ${({ theme }) => theme.PALETTE.darkPrimary};
	padding-top: 5px;
	font-weight: bold;
`;
const Enment = styled.div`
	font-size: 33px;
	font-weight: bold;
	font-style: italic;
`;
const Container = styled.div`
	border: 2px solid ${({ theme }) => theme.PALETTE.black};
	border-radius: 10px;
	width: 500px;
	height: 168px;
	position: fixed;
	top: 29%;
	left: 35.5%;
	padding-top: 5px;
	z-index: 1;
	${flexColumn}
	align-items: center;
	background-color: white;
`;
const S = {
	Container,
	Enment,
	Korment,
	Button,
	BackGround,
	Close,
};
