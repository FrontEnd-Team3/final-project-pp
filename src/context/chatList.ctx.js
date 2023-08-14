import React, { createContext, useContext, useState } from "react";

const ChatListContext = createContext();

export const useChatList = () => useContext(ChatListContext);

const ChatListProvider = ({ children }) => {
	const [chatList, setChatList] = useState([]);

	return (
		<ChatListContext.Provider value={[chatList, setChatList]}>
			{children}
		</ChatListContext.Provider>
	);
};

export default ChatListProvider;
