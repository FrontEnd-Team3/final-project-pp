import styled from "styled-components";
import ChatMain from "./chatMain";
import { useChatData } from "context/chatData.ctx";
import { useChatList } from "context/chatList.ctx";
import { useEffect } from "react";
import { BsBoxArrowInLeft } from "react-icons/bs";

const Chatting = ({ isTop, setIsTop }) => {
	const { socket, targetChat } = useChatData();
	const [chatList, setChatList] = useChatList();
	useEffect(() => {
		socket.on("receiveMessage", data => {
			if (chatList) setChatList(prev => new Set([...prev, data]));
		});
	}, [socket, targetChat]);

	return (
		<S.Container isTop={isTop}>
			<S.Header>
				<S.HChat>
					<S.Arrow onClick={() => setIsTop(true)}>
						<BsBoxArrowInLeft size={20} />
					</S.Arrow>
					<span>CHATTING</span>
				</S.HChat>
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
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 350px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 401px;
		position: absolute;
		background-color: white;
		top: 0;
		left: 0;
		height: 600px;
		z-index: ${({ isTop }) => (isTop ? 1 : 2)};
		display: ${({ isTop }) => (isTop ? "none" : "block")};
	}
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
	position: relative;
`;

const noChatLogs = styled.div`
	text-align: center;
	margin-top: 50px;
	color: ${({ theme }) => theme.PALETTE.gray};
`;

const Arrow = styled.div`
	display: none;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		position: absolute;
		left: 20px;
		display: inline;
	}
`;

const S = {
	Container,
	Header,
	HChat,
	noChatLogs,
	Arrow,
};
