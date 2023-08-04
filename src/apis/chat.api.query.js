import useQueryData from "hooks/useQueryData";
import QueryConfig from "./queryConfig";
import useMutateData from "hooks/useMutateData";
import QueryKey from "consts/queryKey";
import ChatApi from "./chat.api";

const ChatQueryApi = {
	createChatRoom: (id, params, successFn) =>
		useMutateData(
			() => ChatApi.createChatRoom(params),
			[QueryKey.chatRoom, id],
			successFn,
		),
	readEveryMessageInRoom: (room_idx, successFn) =>
		useMutateData(
			() => ChatApi.readEveryMessageInRoom(room_idx),
			[QueryKey.chatRoom, room_idx],
			successFn,
		),
	saveMessages: (id, params, successFn) =>
		useMutateData(
			() => ChatApi.saveMessages(params),
			[QueryKey.chatRoom, id],
			successFn,
		),
	getChatLogs: (room_idx, params) =>
		useQueryData(
			[QueryKey.chatLogs],
			() => ChatApi.getChatLogs(room_idx, params),
			QueryConfig,
		),
	getChatList: params =>
		useQueryData(
			[QueryKey.chatList],
			() => ChatApi.getChatList(params),
			QueryConfig,
		),
	getSpecificChatList: (prod_idx, params) =>
		useQueryData([QueryKey.productChat], () =>
			ChatApi.getSpecificChatList(prod_idx, params),
		),
};

export default ChatQueryApi;
