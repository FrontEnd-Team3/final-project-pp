import React, { useState } from "react";
import styled from "styled-components";
import ChatItem from "./Item";
import { chatList } from "mocks/data/chat/chatList";

const ChatList = () => {
	const [showSalesHistory, setShowSalesHistory] = useState(true);

	const onSalesHeaderClick = () => {
		setShowSalesHistory(true);
	};

	const onPurchaseHeaderClick = () => {
		setShowSalesHistory(false);
	};

	return (
		<S.Container>
			<S.Header>
				<S.Hsale onClick={onSalesHeaderClick}>판매 내역</S.Hsale>
				<S.Hbuy onClick={onPurchaseHeaderClick}>구매 내역</S.Hbuy>
			</S.Header>
			<S.AllMain>
				<S.Main>
					{chatList.length > 0 ? (
						chatList.map(chat => (
							<ChatItem
								key={chat.idx}
								chat={chat}
								product={chat.product}
								lastMessage={chat.lastMessage}
							/>
						))
					) : (
						<div>왜 채팅이 안나오지..</div>
					)}
				</S.Main>
			</S.AllMain>
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
`;

const Header = styled.div`
	width: 450px;
	height: 60px;
	display: flex;
	div {
		cursor: pointer;
		:hover {
			opacity: 0.6;
		}
	}
`;
const Hsale = styled.div`
	background-color: #3cb371;
	color: #ffffff;
	width: 225px;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
`;

const Hbuy = styled.div`
	background-color: #d5d5d5;
	color: #ffffff;
	width: 225px;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
`;

const AllMain = styled.div`
	width: 900px;
	display: flex;
`;

const Main = styled.div`
	width: 450px;
	height: 520px;
	/* border-right: 1px solid #ebebeb; */
	align-items: center;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const S = {
	Container,
	Header,
	Hsale,
	Hbuy,
	Main,
	AllMain,
};
