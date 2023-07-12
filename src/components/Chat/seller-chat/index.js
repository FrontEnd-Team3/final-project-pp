import { useState } from "react";
import styled from "styled-components";
import { primaryFont } from "styles/common";

const SellerChat = () => {
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
					<S.Chat>
						<S.day>2023.07.11</S.day>
						<S.hr />
						<S.Chatbuy>:)</S.Chatbuy>
						<S.Chatbuy>하...</S.Chatbuy>
						<S.Chatbuy>한글만 가능한 채팅입니다</S.Chatbuy>
						<S.Chatbuy>lululalapleasesdfgnjargjkan</S.Chatbuy>
						<S.ChatSeller>한글만 가능한 채팅입니다</S.ChatSeller>
						<S.ChatSeller>안~팔~아~</S.ChatSeller>
						<S.ChatSeller>안~팔~아~</S.ChatSeller>
						<S.ChatSeller>안~팔~아~</S.ChatSeller>
						<S.ChatSeller>안~팔~아~</S.ChatSeller>
						<S.ChatSeller>안~팔~아~</S.ChatSeller>
						<S.ChatSeller>안~팔~아~</S.ChatSeller>
						<S.ChatSeller>안~팔~아~</S.ChatSeller>
						<S.ChatSeller>안~팔~아~</S.ChatSeller>
						<S.ChatSeller>안~팔~아~</S.ChatSeller>
						<S.ChatSeller>안~팔~아~</S.ChatSeller>
						<S.ChatSeller>안~팔~아~</S.ChatSeller>
						<S.ChatSeller>안~팔~아~</S.ChatSeller>
						<S.ChatSeller>안~팔~아~</S.ChatSeller>
						<S.ChatSeller>제~발~ 나와라~ 나와라요~~</S.ChatSeller>
					</S.Chat>
					<S.List>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item></Item>
						<Item>하</Item>
						<Item>하</Item>
					</S.List>
				</S.Main>
			</S.Container>
		);
};

export default SellerChat;

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

const Line = styled.div`
	width: 100px;
	padding: 0px 2px;
	p {
		border-bottom: 1px solid black;
		height: 6px;
	}
	margin-bottom: 5px;
`;

const Main = styled.div`
	width: 430px;
	height: 800px;
`;

const Chat = styled.div`
	width: 360px;
	padding: 5px;
	height: 500px;
	overflow-x: hidden;
	overflow-y: scroll;
	float: left;
	&::-webkit-scrollbar {
		width: 15px;
		display: none;
	}
`;

const List = styled.div`
	width: 65px;
	height: 500px;
	margin-left: 5px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const Item = styled.div`
	background-color: #8490c8;
	height: 65px;
	display: flex;
	border: 3px solid black;
	align-items: center;
	text-align: center;
`;

const day = styled.div`
	font-size: 30px;
	text-align: center;
`;

const hr = styled.hr`
	width: 600px;
`;

const Chatbuy = styled.div`
	width: 150px;
	font-size: 16px;
	align-items: start;
	/* border: 2px solid black; */
	padding: 5px;
	margin-left: 200px;
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
	/* border: 2px solid black; */
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
	Chat,
	List,
	Line,
};
