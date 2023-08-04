import { axiosInstance } from "./core";

const PATH = "/api/chat";

const ChatApi = {
	createChatRoom: async params =>
		await axiosInstance.post(PATH, (params = { ...params })),
	readEveryMessageInRoom: async room_idx =>
		await axiosInstance.post(PATH + `read-all?room_idx=${room_idx}}`),
	saveMessages: async params =>
		await axiosInstance.post(PATH + "/send", (params = { ...params })),
	getChatLogs: async (room_idx, params) =>
		await axiosInstance.get(
			PATH + `/chat-log?room_idx=${room_idx}`,
			(params = { ...params }),
		),
	getChatList: async params =>
		await axiosInstance.get(PATH + "/chat-room-list", (params = { ...params })),
	getSpecificChatList: async (prod_idx, params) =>
		await axiosInstance.get(
			PATH + `/product-chat-list?prod_idx=${prod_idx}`,
			(params = { ...params }),
		),
};

export default ChatApi;
