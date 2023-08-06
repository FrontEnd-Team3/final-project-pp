import BasicButton from "components/Button";
import BasicInput from "components/Input";
import { useState } from "react";
import styled from "styled-components";
import ChatQueryApi from "apis/chat.api.query";
import getUserData from "utils/getUserData";
import MyChat from "./myChat";
import OtherChat from "./otherChat";

const Chatting = ({ targetChat }) => {
	// 대화 내역 가져오기
	const { data } = ChatQueryApi.getChatLogs(parseInt(targetChat));
	let nick_name;
	const DATA = getUserData();
	if (DATA) nick_name = DATA.nick_name;

	// 날짜별로 채팅 목록 분류하기
	const dateSet = new Set();
	let fileteredDate = data
		?.map(chat => chat.createdAt.split("T")[0])
		.filter(date => {
			if (!dateSet.has(date)) {
				dateSet.add(date);
				return true;
			}
			return false;
		});
	console.log("date", fileteredDate);

	fileteredDate = [...dateSet];
	const filteredByDate = fileteredDate.map(date => {
		return {
			date: date,
			logs: data?.filter(chat => chat.createdAt.split("T")[0] === date),
		};
	});
	// console.log("filtered", filteredByDate);

	// 상대방이 보낸 메세지와 내가 보낸 메세지 구분하기
	const filteredByUser = filteredByDate.map(list => {
		return {
			date: list.date,
			logs: list.logs.map(log => {
				return {
					...log,
					isMine: log.User.nick_name === nick_name,
				};
			}),
		};
	});
	console.log("filtered", filteredByUser);

	// 전송 시 input 값 전송
	const [inputVal, setInputVal] = useState("");
	const handleInput = e => {
		setInputVal(e.target.value);
	};
	const handleChatContent = e => {
		e.preventDefault();
		console.log(inputVal);
		setSendedContents(prev => [...prev, inputVal]);
	};

	return (
		<S.Container>
			<S.Header>
				<S.HChat>CHATTING</S.HChat>
			</S.Header>
			{targetChat ? (
				<S.ChatMain>
					{filteredByUser &&
						filteredByUser.map(list => (
							<S.Chat>
								<S.day>{list?.date}</S.day>
								<S.hr />
								{list?.logs?.map(content =>
									content.isMine ? (
										<MyChat
											createdAt={content.createdAt}
											message={content.message}
											user={content.User}
										/>
									) : (
										<OtherChat
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
				</S.ChatMain>
			) : (
				<S.noChatLogs>대화를 시작해보세요!</S.noChatLogs>
			)}
		</S.Container>
	);
};

export default Chatting;

const Container = styled.div`
	border: 1px solid #ebebeb;
	margin: 100px auto;
	height: 581px;
	width: 448px;
	position: relative;
`;

const Header = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
`;

const HChat = styled.div`
	width: 100%;
	background-color: #fcf9f3;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
`;

const ChatMain = styled.div`
	width: 100%;
`;

const Chat = styled.div`
	width: 100%;
	padding: 20px;
	height: 450px;
	overflow-x: hidden;
	overflow-y: scroll;
	float: left;
	&::-webkit-scrollbar {
		width: 15px;
		display: none;
	}
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

const noChatLogs = styled.div`
	text-align: center;
	margin-top: 50px;
	color: ${({ theme }) => theme.PALETTE.gray};
`;

const S = {
	Container,
	Header,
	HChat,
	ChatMain,
	Chat,
	day,
	hr,
	SendWrapper,
	noChatLogs,
};
