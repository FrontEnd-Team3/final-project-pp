const useChatActions = () => {
	const cacheID = (socket, socketID) => {
		socket.emit("connect-user", { socket: socketID });
	};

	const enterRoom = (socket, room_idx) => {
		socket.emit("join", { room_idx });
	};

	const leaveRoom = (socket, room_idx) => {
		socket.emit("leave", { room_idx });
	};

	const sendMessage = (
		socket,
		{ title, createdAt, prod_idx, room_idx, nickName, message },
	) => {
		if (
			!title ||
			!createdAt ||
			!prod_idx ||
			!room_idx ||
			!nickName ||
			!message
		) {
			return;
		}

		socket.emit("sendMessage", {
			title,
			createdAt,
			prod_idx,
			room_idx,
			nickName,
			message,
			isSeller,
		});
	};

	const receiveMessage = (socket, data) => {
		socket.on("receiveMessage", data);
	};

	const alertNewMessage = (
		socket,
		{ title, createdAt, prod_idx, room_idx, nickName, message },
	) => {
		socket.on("newMessage", {
			title,
			createdAt,
			prod_idx,
			room_idx,
			nickName,
			message,
		});
	};

	return {
		cacheID,
		enterRoom,
		leaveRoom,
		sendMessage,
		receiveMessage,
		alertNewMessage,
	};
};

export default useChatActions;
