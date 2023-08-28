import React, { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://topdragon.co.kr", {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
		credentials: true,
	},
	withCredentials: true, // 추가
});

const ChatDataContext = createContext();

export const useChatData = () => useContext(ChatDataContext);

const ChatDataProvider = ({ children }) => {
	const [chatInfo, setChatInfo] = useState({});
	const [targetChat, setTargetChat] = useState(
		localStorage.getItem("targetChat") || "",
	);
	const [socketID, setSocketID] = useState("");

	useEffect(() => {
		window.localStorage.setItem("targetChat", targetChat);
	}, [targetChat]);

	useEffect(() => {
		socket.connect();
	});

	const value = {
		socket,
		chatInfo,
		setChatInfo,
		targetChat,
		setTargetChat,
		socketID,
		setSocketID,
	};

	return (
		<ChatDataContext.Provider value={value}>
			{children}
		</ChatDataContext.Provider>
	);
};

export default ChatDataProvider;
