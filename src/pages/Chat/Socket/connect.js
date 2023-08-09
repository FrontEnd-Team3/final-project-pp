import { io } from "socket.io-client";

const ConnectSocket = () =>
	io.connect("https://topdragon.co.kr", {
		cors: {
			origin: "http://localhost:3000",
			methods: ["GET", "POST"],
			credentials: true,
		},
		withCredentials: true,
	});

export default ConnectSocket;
