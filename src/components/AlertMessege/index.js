import { useState } from "react";
import styled from "styled-components";
import { flexCenter, primaryFont } from "styles/common";

const AlertMessage = () => {
	const [isOpen, setIsOpen] = useState(true);
	if (isOpen)
		return (
			<S.Container>
				<S.Header>
					<div className="left">
						<S.Line>
							<p></p>
							<p></p>
						</S.Line>
						<S.Text>PPYONG PPYONG</S.Text>
						<S.Line>
							<p></p>
							<p></p>
						</S.Line>
					</div>
					<S.Xbutton onClick={() => setIsOpen(false)}>X</S.Xbutton>
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
	margin: 50px auto;
	align-items: center;
	${primaryFont}
`;
const Header = styled.div`
	background-color: #fcf9f3;
	border-bottom: 3px solid black;
	font-size: 15px;
	${flexCenter}
	.left {
		padding: 5px 0;
		${flexCenter}
		width: 310px;
		border-right: 3px solid black;
	}
`;

const Line = styled.div`
	width: 63px;
	padding: 0px 2px;
	p {
		border-bottom: 1px solid black;
		height: 6px;
	}
	margin-bottom: 5px;
`;

const Text = styled.div`
	padding-top: 2px;
	margin: 0px 10px;
`;

const Xbutton = styled.button`
	width: 23px;
	cursor: pointer;
	border: none;
	background-color: transparent;
`;

const Main = styled.div`
	background-color: ${({ theme }) => theme.PALETTE.ivory};
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
	padding-left: 265px;
	padding-bottom: 5px;
`;

const S = {
	Container,
	Header,
	Line,
	Text,
	Xbutton,
	Main,
	Mtext,
	Mproduct,
	Mtimer,
};
