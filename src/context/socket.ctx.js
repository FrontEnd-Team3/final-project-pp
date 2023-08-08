import { createContext, useContext, useState } from "react";
import { io } from "socket.io-client";

export const socket = io.connect("/socket.io", {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
		credentials: true,
	},
	withCredentials: true, // 추가
});

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

const SocketContextProvider = ({ children }) => {
	const [globalSocket, setGlobalSocket] = useState(socket);
	return (
		<SocketContext.Provider value={[globalSocket, setGlobalSocket]}>
			{children}
		</SocketContext.Provider>
	);
};

export default SocketContextProvider;
