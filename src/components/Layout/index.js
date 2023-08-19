import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";
import ChatQueryApi from "apis/chat.api.query";
import { useChatData } from "context/chatData.ctx";

const Layout = () => {
	// 전역 메시지
	const { data } = ChatQueryApi.getChatList();
	const { socket } = useChatData();
	// console.log("data", data);

	useEffect(() => {
		console.log("rendered");
		// socket.on("receiveMessage", data => {
		// 	console.log("header!", data);
		// });
		if (data) {
			data?.chats?.map(el => {
				console.log("joined");
				return socket.emit("join", { room_idx: el });
			});
		}
		// socket.emit(`connect-user`, { socket: socketID });
		// if (chats)
		//
		// socket.on("newMessage", data => {
		// 	console.log("전역메시지", data);
		// });
	}, [socket]);

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
