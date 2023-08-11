import { io } from "socket.io-client";

const ConnectSocket = () => {
	const socket = io("https://topdragon.co.kr", {
		cors: {
			origin: "*",
			methods: ["GET", "POST"],
			credentials: true,
		},
		withCredentials: true,
	});
	return socket;
};

export default ConnectSocket;
