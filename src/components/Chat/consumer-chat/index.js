import { useState } from "react";
import styled from "styled-components";
import { primaryFont } from "styles/common";

const ConsumerChat = () => {
	const [isOpen, setIsOpen] = useState(true);
	if (isOpen)
		return (
			<S.Container>
				<S.Header>
					<S.Line>
						<p></p>
						<p></p>
					</S.Line>
					<S.Htext>CHATTING</S.Htext>
					<S.Line>
						<p></p>
						<p></p>
					</S.Line>
					<S.Xbutton onClick={() => setIsOpen(false)}>X</S.Xbutton>
				</S.Header>
				<S.Main>
					<S.day>2023.07.11</S.day>
					<S.hr />
					<S.Chatbuy>:)</S.Chatbuy>
					<S.Chatbuy>:)</S.Chatbuy>
					<S.Chatbuy>한글도 가능하지롱~~~</S.Chatbuy>
					<S.Chatbuy>AS;KDUGHLAUWNERGJLANSJRUG</S.Chatbuy>
					<S.ChatSeller>안~팔~아~</S.ChatSeller>
					<S.ChatSeller>안~팔~아~</S.ChatSeller>
					<S.ChatSeller>안~팔~아~</S.ChatSeller>
					<S.ChatSeller>안~팔~아~</S.ChatSeller>
					<S.ChatSeller>안~팔~아~</S.ChatSeller>
					<S.ChatSeller>안~팔~아~</S.ChatSeller>
					<S.ChatSeller>안~팔~아~</S.ChatSeller>
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

const Line = styled.div`
	width: 100px;
	padding: 0px 2px;
	p {
		border-bottom: 1px solid black;
		height: 6px;
	}
	margin-bottom: 5px;
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
	height: 500px;
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
	width: 150px;
	font-size: 16px;
	align-items: start;
	border: 2px solid black;
	padding: 5px;
	margin-left: 260px;
	margin-top: 10px;
	margin-bottom: 10px;
	background-color: #e2e2fe;
	word-wrap: break-word;
	border-radius: 6px;
`;

const ChatSeller = styled.div`
	/* display: inline-block; */
	width: 150px;
	font-size: 16px;
	align-items: start;
	padding: 5px;
	border: 2px solid black;
	margin-bottom: 10px;
	top: 40px;
	background-color: #efd6fb;
	word-wrap: break-word;
	border-radius: 6px;
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
	Line,
};
