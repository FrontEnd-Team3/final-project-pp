import { axiosInstance } from "./core";

const PATH = "/api/chat";

const ChatApi = {
	createChatRoom: async prod_idx =>
		await axiosInstance.post(PATH, { prod_idx: prod_idx }),
	readEveryMessageInRoom: async room_idx =>
		await axiosInstance.post(PATH + `read-all?room_idx=${room_idx}}`),
	saveMessages: async params =>
		await axiosInstance.post(PATH + "/send", (params = { ...params })),
	getChatLogs: async room_idx =>
		await axiosInstance.get(PATH + `/chat-log?room_idx=${room_idx}`),
	getChatList: async () => await axiosInstance.get(PATH + `/chat-room-list`),
	getSpecificChatList: async prod_idx =>
		await axiosInstance.get(
			PATH + `/product-chat-list?prod_idx=${parseInt(prod_idx)}`,
		),
};

export default ChatApi;
