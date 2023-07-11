import styled from "styled-components";
import { primaryFont } from "styles/common";

const AlertMessage = () => {
	return (
		<S.Container>
			<S.Header>
				<S.Text>PPYONG PPYONG</S.Text>
				<S.Xbutton>X</S.Xbutton>
			</S.Header>
			<S.Main>
				<S.Mtext>A NEW MESSAGE HAS ARRIVED!</S.Mtext>
				<S.Mproduct>물품명: OOOOOOO</S.Mproduct>
				<S.Mtimer>11:32pm</S.Mtimer>
			</S.Main>
		</S.Container>
	);
};
export default AlertMessage;

const Container = styled.div`
	border: 3px solid black;
	width: 334px;
	margin: 0 auto;
	align-items: center;
	${primaryFont}
`;
const Header = styled.div`
	border: 3px solid black;
	background-color: #fcf9f3;
	padding-left: 87px;
`;

const Text = styled.span`
	margin: auto;
`;

const Xbutton = styled.button`
	width: 23px;
	border: 3px solid black;
	float: right;
	cursor: pointer;
`;

const Main = styled.div`
	background-color: ${({ theme }) => theme.PALETTE.secondary};
	font-size: 32px;
	border: 3px solid black;
`;

const Mtext = styled.div`
	align-items: center;
	padding: 35px 53px;
`;

const Mproduct = styled.div`
	font-size: 16px;
	padding-left: 53px;
`;

const Mtimer = styled.div`
	font-size: 16px;
	text-align: end;
`;

const S = {
	Container,
	Header,
	Text,
	Xbutton,
	Main,
	Mtext,
	Mproduct,
	Mtimer,
};
