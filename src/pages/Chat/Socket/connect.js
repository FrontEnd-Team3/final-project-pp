import { io } from "socket.io-client";

const ConnectSocket = () => {
	const socket = io.connect("https://topdragon.co.kr", {
		cors: {
			origin: "http://localhost:3000",
			methods: ["GET", "POST"],
			credentials: true,
		},
		withCredentials: true,
	});
	return socket;
};

export default ConnectSocket;
