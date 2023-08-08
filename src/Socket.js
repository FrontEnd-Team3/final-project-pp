import { io } from "socket.io-client";

const URL = process.env.REACT_APP_BACKEND_URL;

export const socket = io(URL);
