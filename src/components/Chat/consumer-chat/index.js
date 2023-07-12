import styled from "styled-components";
import { primaryFont } from "styles/common";

const ConsumerChat = () => {
	return (
		<S.Container>
			<S.Header>
				<S.Htext>CHATTING</S.Htext>
				<S.Xbutton>X</S.Xbutton>
			</S.Header>
			<S.Main>
				<S.day>2023.07.11</S.day>
				<S.hr />
				<S.Chatbuy>:)</S.Chatbuy>
				<S.ChatSeller>안~팔~아~</S.ChatSeller>
			</S.Main>
		</S.Container>
	);
};

export default ConsumerChat;

const Container = styled.div`
	border: 3px solid black;
	margin: 0 auto;
	width: 430px;
	height: 1158px;
	${primaryFont}
`;

const Header = styled.div`
	border: 3px solid black;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	background-color: #fcf9f3;
`;

const Htext = styled.div`
	font-size: 38px;
	margin: 0 auto;
`;

const Xbutton = styled.button`
	width: 50px;
	border: 3px solid black;
	font-size: 38px;
	cursor: pointer;
	float: right;
`;

const Main = styled.div`
	width: 430px;
	height: 800px;
	overflow-x: hidden;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 15px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 16px;
		background: #8490c8;
	}
	&::-webkit-scrollbar-track {
		background-color: #e2e2fe;
		border-radius: 16px;
		width: 10px;
	}
`;

const day = styled.div`
	font-size: 30px;
	text-align: center;
`;

const hr = styled.hr`
	/* width: 420px; */
`;

const Chatbuy = styled.div`
	font-size: 16px;
	display: block;
	float: right;
	text-align: end;
	background-color: #e2e2fe;
	margin-top: 10px;
	border: 2px solid black;
`;

const ChatSeller = styled.div`
	display: block;
	font-size: 16px;
	position: relative;
	background-color: #efd6fb;
	border: 2px solid black;
	top: 40px;
`;

const S = {
	Container,
	Header,
	Main,
	Xbutton,
	Htext,
	day,
	hr,
	Chatbuy,
	ChatSeller,
};
