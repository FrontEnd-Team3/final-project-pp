import BasicButton from "components/Button";
import BasicInput from "components/Input";
import styled from "styled-components";
import MyChat from "./myChat";
import ChatQueryApi from "apis/chat.api.query";
import { useEffect, useRef } from "react";
import OtherChat from "./otherChat";
import getFilteredList from "./utils/getfilteredList";
import { useChatData } from "context/chatData.ctx";
import ChatApi from "apis/chat.api";
import { useChatList } from "context/chatList.ctx";
import getUserData from "utils/getUserData";

const ChatMain = () => {
	const { socket, chatInfo, targetChat, setChatInfo } = useChatData();
	const { data, refetch, isError } = ChatQueryApi.getChatLogs(
		parseInt(targetChat),
	);
	const [chatList, setChatList] = useChatList();
	// console.log("chatlist", chatList);
	let nick_name;
	const DATA = getUserData();
	if (DATA) nick_name = DATA.nick_name;

	const filteredByUser = getFilteredList(data, nick_name);
	// console.log("filtered", filteredByUser);

	// 실시간 메시지 날짜 찾기
	if (chatList) {
		chatList.map(chat => {
			const targetIdx = filteredByUser.findIndex(
				log => log.date === chat?.createdAt?.split("T")[0],
			);
			// console.log("idx", targetIdx);

			// 메시지 형태 변환해서 맨 뒤에 붙이기
			filteredByUser[targetIdx]?.logs.push({
				createdAt: chat.createdAt,
				message: chat.message,
				User: { nick_name: chat.nickName, profile_url: null },
				isMine: false,
			});
		});
	}

	const inputRef = useRef("");
	const chatMainWrapperRef = useRef();

	useEffect(() => {
		setChatList("");
	}, [data]);

	useEffect(() => {
		refetch();
	}, [targetChat]);

	useEffect(() => {
		// setChatList(data);
		chatMainWrapperRef.current.scrollTop =
			chatMainWrapperRef.current.scrollHeight;
	}, [targetChat, data]);

	const handleChatContent = async e => {
		e.preventDefault();
		inputRef.current = e.target.input.value;
		if (inputRef.current) {
			try {
				const newChatData = {
					...chatInfo,
					createdAt: new Date(),
					message: inputRef.current,
				};
				const myChat = {
					...newChatData,
				};
				myChat.createdAt = myChat.createdAt.toISOString();
				console.log("보내는 값", newChatData);
				socket.emit("sendMessage", newChatData);
				await ChatApi.saveMessages({
					room_idx: parseInt(targetChat),
					message: inputRef.current,
				});
				refetch();
				setChatInfo(newChatData);
				// setChatList(prev => [...prev, newChatData]);
				e.target.input.value = "";
				chatMainWrapperRef.current.scrollTop =
					chatMainWrapperRef.current.scrollHeight;
			} catch (err) {
				console.error(err);
			}
		}
	};

	if (isError) return console.error("error");

	return (
		<S.ChatMainWrapper ref={chatMainWrapperRef}>
			{filteredByUser &&
				filteredByUser.map((list, i) => (
					<S.Chat key={i}>
						<S.day>{list?.date}</S.day>
						<S.hr />
						{list?.logs?.map((content, i) =>
							content.isMine ? (
								<MyChat
									key={i}
									createdAt={content?.createdAt}
									message={content?.message}
									user={content?.User}
								/>
							) : (
								<OtherChat
									key={i}
									createdAt={content?.createdAt}
									message={content?.message}
									user={content?.User}
								/>
							),
						)}
					</S.Chat>
				))}
			<S.SendWrapper onSubmit={handleChatContent}>
				<BasicInput
					name="input"
					variant={"chat"}
					size={"xsmall"}
					placeholder="채팅치는곳"
				/>
				<BasicButton
					type="submit"
					color={"primary"}
					size={"xmedium"}
					children="전송"
					style={{ borderRadius: "4px" }}
				/>
			</S.SendWrapper>
		</S.ChatMainWrapper>
	);
};

export default ChatMain;

const ChatMainWrapper = styled.div`
	width: 100%;
	height: 450px;
	overflow-x: hidden;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 15px;
		display: none;
	}
`;

const Chat = styled.div`
	width: 100%;
	padding: 20px;
	float: left;
`;

const day = styled.div`
	font-size: 16px;
	text-align: center;
	margin-bottom: 10px;
`;

const hr = styled.hr`
	width: 100%;
	color: #d9d9d9;
`;

const SendWrapper = styled.form`
	background-color: #ffffff;
	width: 440px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 10px;
	position: absolute;
	top: 510px;
`;

const S = {
	ChatMainWrapper,
	Chat,
	day,
	hr,
	SendWrapper,
};
