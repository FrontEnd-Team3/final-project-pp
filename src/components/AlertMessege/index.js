import styled from "styled-components";

const AlertMessage = () => {
	return (
		<Container>
			<Header>
				<Text>PPYONG PPYONG</Text>
				<Xbutton>X</Xbutton>
			</Header>
			<Main>
				<Mtext>A NEW MESSAGE HAS ARRIVED!</Mtext>
				<Mproduct>물품명: OOOOOOO</Mproduct>
				<Mtimer>11:32pm</Mtimer>
			</Main>
		</Container>
	);
};
export default AlertMessage;

const Container = styled.div`
	width: 334px;
	height: 198px;
	margin: 0 auto;
	align-items: center;
`;
const Header = styled.div`
	background-color: #fcf9f3;
	text-align: center;
	padding-left: 87px;
`;

const Text = styled.span`
	margin: auto;
`;

const Xbutton = styled.button`
	margin-left: 87px;
	width: 23px;
`;

const Main = styled.div`
	background-color: ${({ theme }) => theme.PALETTE.secondary};
	font-size: 32px;
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
