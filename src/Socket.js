import { io } from "socket.io-client";

const URL =
	process.env.NODE_ENV === "production"
		? undefined
		: "https://topdragon.co.kr/api/chat";

export const socket = io(URL);
