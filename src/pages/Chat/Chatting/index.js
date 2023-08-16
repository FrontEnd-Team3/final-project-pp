import styled from "styled-components";
import ChatMain from "./chatMain";
import { useChatData } from "context/chatData.ctx";
import { useChatList } from "context/chatList.ctx";
import { useEffect } from "react";

const Chatting = () => {
	const { socket, targetChat } = useChatData();
	const [chatList, setChatList] = useChatList();
	console.log("chatlist", chatList);

	// 실시간 메시지 도착
	useEffect(() => {
		socket.on("receiveMessage", data => {
			// console.log("new!", data);
			if (chatList) setChatList(prev => new Set([...prev, data]));
		});
	}, [socket, targetChat]);

	return (
		<S.Container>
			<S.Header>
				<S.HChat>CHATTING</S.HChat>
			</S.Header>
			{targetChat ? (
				<ChatMain />
			) : (
				<S.noChatLogs>대화를 시작해보세요!</S.noChatLogs>
			)}
		</S.Container>
	);
};

export default Chatting;

const Container = styled.div`
	border: 1px solid #ebebeb;
	margin: 100px auto;
	height: 581px;
	width: 448px;
	position: relative;
`;

const Header = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
`;

const HChat = styled.div`
	width: 100%;
	background-color: #fcf9f3;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
`;

const noChatLogs = styled.div`
	text-align: center;
	margin-top: 50px;
	color: ${({ theme }) => theme.PALETTE.gray};
`;

const S = {
	Container,
	Header,
	HChat,
	noChatLogs,
};
