import styled from "styled-components";
import ChatList from "./ChatList";
import Chatting from "./Chatting";
import { useState } from "react";

const Chat = () => {
	const [isTop, setIsTop] = useState(true);
	return (
		<S.ChatRoom>
			<ChatList isTop={isTop} setIsTop={setIsTop} />
			<Chatting isTop={isTop} setIsTop={setIsTop} />
		</S.ChatRoom>
	);
};
export default Chat;

const ChatRoom = styled.div`
	width: 900px;
	height: 800px;
	display: flex;
	margin: 0 auto;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 700px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 400px;
		flex-direction: column;
		position: relative;
		/* overflow: hidden; */
	}
`;

const S = { ChatRoom };
