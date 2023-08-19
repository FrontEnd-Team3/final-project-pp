import ChatQueryApi from "apis/chat.api.query";

const getChatIdx = () => {
	const { data } = ChatQueryApi.getChatList();
	console.log("user", data);

	if (data) {
		const { chats } = data;
		return chats;
	}
};

export default getChatIdx;
