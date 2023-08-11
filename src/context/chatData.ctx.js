import ConnectSocket from "pages/Chat/Socket/connect";
import React, { createContext, useContext, useEffect, useState } from "react";

const socket = ConnectSocket();

const ChatDataContext = createContext();

export const useChatData = () => useContext(ChatDataContext);

const ChatDataProvider = ({ children }) => {
	const [chatInfo, setChatInfo] = useState({});
	const [targetChat, setTargetChat] = useState(
		localStorage.getItem("targetChat") || "",
	);

	useEffect(() => {
		window.localStorage.setItem("targetChat", targetChat);
	}, [targetChat]);

	const value = {
		socket,
		chatInfo,
		setChatInfo,
		targetChat,
		setTargetChat,
	};

	useEffect(() => {
		socket.connect();

		return () => socket.disconnect();
	});

	return (
		<ChatDataContext.Provider value={value}>
			{children}
		</ChatDataContext.Provider>
	);
};

export default ChatDataProvider;
