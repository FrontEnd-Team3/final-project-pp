import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://topdragon.co.kr");

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

	useEffect(() => {
		socket.connect();

		// return () => socket.disconnect();
	});

	const value = {
		socket,
		chatInfo,
		setChatInfo,
		targetChat,
		setTargetChat,
	};

	return (
		<ChatDataContext.Provider value={value}>
			{children}
		</ChatDataContext.Provider>
	);
};

export default ChatDataProvider;
