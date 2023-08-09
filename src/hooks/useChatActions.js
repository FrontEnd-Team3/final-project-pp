import { useChatData } from "context/__chatData.ctx";

const useChatActions = () => {
	const { socket } = useChatData();

	const cacheID = socketID => {
		socket.emit("connect-user", { socket: socketID });
	};

	const enterRoom = room_idx => {
		socket.emit("join", { room_idx });
	};

	const leaveRoom = room_idx => {
		socket.emit("leave", { room_idx });
	};

	const sendMessage = ({
		title,
		createdAt,
		prod_idx,
		room_idx,
		nickName,
		message,
	}) => {
		if (!text) {
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

	const receiveMessage = () => {
		socket.on("receiveMessage", data);
	};

	const alertNewMessage = ({
		title,
		createdAt,
		prod_idx,
		room_idx,
		nickName,
		message,
	}) => {
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
