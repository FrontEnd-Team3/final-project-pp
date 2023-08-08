import BasicButton from "components/Button";
import BasicInput from "components/Input";
import styled from "styled-components";
import MyChat from "./myChat";
import ChatQueryApi from "apis/chat.api.query";
import { useEffect, useState } from "react";
import OtherChat from "./otherChat";
import ChatApi from "apis/chat.api";
import getFilteredList from "./utils/getfilteredList";

const ChatMain = ({ targetChat }) => {
	// 대화 내역 가져오기
	console.log("chatMain", targetChat);
	const { data, refetch } = ChatQueryApi.getChatLogs(parseInt(targetChat));

	const filteredByUser = getFilteredList(data);

	// 전송 시 input 값 전송
	const [inputVal, setInputVal] = useState("");
	const handleInput = e => {
		setInputVal(e.target.value);
	};

	useEffect(() => {
		refetch();
	}, [targetChat]);

	const handleChatContent = e => {
		e.preventDefault();
		if (inputVal) {
			try {
				ChatApi.saveMessages({
					room_idx: parseInt(targetChat),
					message: inputVal,
				}).then(() => {
					refetch();
				});
			} catch (err) {
				console.error(err);
			}
			setInputVal("");
		}
	};

	return (
		<S.ChatMainWrapper>
			{filteredByUser &&
				filteredByUser.map((list, i) => (
					<S.Chat key={i}>
						<S.day>{list?.date}</S.day>
						<S.hr />
						{list?.logs?.map((content, i) =>
							content.isMine ? (
								<MyChat
									key={i}
									createdAt={content.createdAt}
									message={content.message}
									user={content.User}
								/>
							) : (
								<OtherChat
									key={i}
									createdAt={content.createdAt}
									message={content.message}
									user={content.User}
								/>
							),
						)}
					</S.Chat>
				))}
			<S.SendWrapper onSubmit={handleChatContent}>
				<BasicInput
					variant={"chat"}
					size={"xsmall"}
					placeholder="채팅치는곳"
					onChange={handleInput}
					value={inputVal}
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
