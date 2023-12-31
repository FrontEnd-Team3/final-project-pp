import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatItem from "./Item";
import ChatQueryApi from "apis/chat.api.query";
import getUserData from "utils/getUserData";

const ChatList = ({ isTop, setIsTop }) => {
	const { data } = ChatQueryApi.getChatList();

	let nick_name;
	const DATA = getUserData();
	if (DATA) nick_name = DATA.nick_name;

	const sellChat = data?.chats.filter(
		chat => chat.User.nick_name === nick_name,
	);
	const buyChat = data?.chats.filter(chat => chat.User.nick_name !== nick_name);

	const [isSell, SetIsSell] = useState(
		window.localStorage.getItem("isSell") === "true",
	);

	useEffect(() => {
		window.localStorage.setItem("isSell", isSell);
	}, [isSell]);

	return (
		<S.Container isTop={isTop}>
			<S.Header>
				<S.Sell isSell={isSell} onClick={() => SetIsSell(true)}>
					판매 내역
				</S.Sell>
				<S.Buy isSell={isSell} onClick={() => SetIsSell(false)}>
					구매 내역
				</S.Buy>
			</S.Header>
			<S.Main>
				{isSell ? (
					<S.Chatlist className="sell">
						{sellChat?.length > 0 ? (
							sellChat.map(chat => (
								<ChatItem key={chat.idx} chat={chat} setIsTop={setIsTop} />
							))
						) : (
							<S.NoChat>
								채팅 내역이 없습니다. 새로운 거래를 시작해보세요!
							</S.NoChat>
						)}
					</S.Chatlist>
				) : (
					<S.Chatlist className="buy">
						{buyChat?.length > 0 ? (
							buyChat.map(chat => (
								<ChatItem key={chat.idx} chat={chat} setIsTop={setIsTop} />
							))
						) : (
							<S.NoChat>
								채팅 내역이 없습니다. 새로운 거래를 시작해보세요!
							</S.NoChat>
						)}
					</S.Chatlist>
				)}
			</S.Main>
		</S.Container>
	);
};

export default ChatList;

const Container = styled.div`
	width: 450px;
	height: 580px;
	border-left: 1px solid #ebebeb;
	border-bottom: 1px solid #ebebeb;
	border-top: 1px solid #ebebeb;
	margin: 100px auto;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 350px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 399px;
		border-right: 1px solid #ebebeb;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: ${({ isTop }) => (isTop ? 2 : 1)};
		display: ${({ isTop }) => (isTop ? "block" : "hidden")};
	}
`;

const Header = styled.div`
	width: 450px;
	height: 60px;
	display: flex;
	div {
		cursor: pointer;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 350px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 400px;
	}
`;
const Sell = styled.div`
	background-color: ${({ theme, isSell }) =>
		isSell ? theme.PALETTE.primary : theme.PALETTE.gray};
	color: #ffffff;
	width: 225px;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 175px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 400px;
	}
`;

const Buy = styled.div`
	background-color: ${({ theme, isSell }) =>
		!isSell ? theme.PALETTE.primary : theme.PALETTE.gray};
	color: #ffffff;
	width: 225px;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 175px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 400px;
	}
`;

const Main = styled.div`
	width: 900px;
	display: flex;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 350px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 400px;
	}
`;

const Chatlist = styled.div`
	width: 450px;
	height: 520px;
	align-items: center;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const NoChat = styled.div`
	text-align: center;
	color: ${({ theme }) => theme.PALETTE.gray};
	margin-top: 50px;
`;

const S = {
	Container,
	Header,
	Sell,
	Buy,
	Main,
	Chatlist,
	NoChat,
};
