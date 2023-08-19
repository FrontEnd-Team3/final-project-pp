import styled from "styled-components";
import ChatList from "./ChatList";
import Chatting from "./Chatting";

const Chat = () => {
	return (
		<S.ChatRoom>
			<ChatList />
			<Chatting />
		</S.ChatRoom>
	);
};
export default Chat;

const ChatRoom = styled.div`
	width: 900px;
	display: flex;
	margin: 0 auto;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 700px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 400px;
		overflow: hidden;
	}
`;

const S = { ChatRoom };
