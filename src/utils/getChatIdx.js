import ChatQueryApi from "apis/chat.api.query";

const getChatIdx = () => {
	const { data } = ChatQueryApi.getChatList();

	if (data) {
		const { chats } = data;
		return chats;
	}
};

export default getChatIdx;
