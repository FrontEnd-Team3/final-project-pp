import { chatList } from "../data/chat/chatList";
import { rest } from "msw";

export const getChatList = rest.get("/chat", async (req, res, ctx) => {
	return res(ctx.status(200), ctx.json(chatList));
});

export const clearChat = rest.delete("/chat:id", async (req, res, ctx) => {
	const { id } = req.params;
	return res(ctx.status(200), ctx.json({ roomID: parseInt(id) }));
});

// 특정 물품 채팅방 목록 조회
