import BasicButton from "components/Button";
import BasicInput from "components/Input";
import styled from "styled-components";
import MyChat from "./myChat";
import ChatQueryApi from "apis/chat.api.query";
import getUserData from "utils/getUserData";
import { useEffect, useState } from "react";
import OtherChat from "./otherChat";
import ChatApi from "apis/chat.api";
import { socket } from "Socket";

const ChatMain = ({ targetChat }) => {
	// 대화 내역 가져오기
	console.log("chatMain", targetChat);
	const { data, refetch } = ChatQueryApi.getChatLogs(parseInt(targetChat));

	console.log("target", targetChat);
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
	// console.log("date", fileteredDate);

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
	// console.log("filtered", filteredByUser);

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

	const [isConnected, setIsConnected] = useState(socket.connected);
	const [fooEvents, setFooEvents] = useState([]);

	useEffect(() => {
		function onConnect() {
			setIsConnected(true);
		}

		function onDisconnect() {
			setIsConnected(false);
		}

		function onFooEvent(value) {
			setFooEvents(previous => [...previous, value]);
		}

		socket.on("소켓연결", onConnect);
		socket.on("소케연결끊김", onDisconnect);
		socket.on("foo는 뭘까..?", onFooEvent);

		return () => {
			socket.off("소켓연결", onConnect);
			socket.off("소케연결끊김", onDisconnect);
			socket.off("foo는 뭘까..?", onFooEvent);
		};
	}, []);
	// 채팅을 치면 계속 밖에만 생성돼요.... 왜 그럴까요... 하.........

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

const S = {
	ChatMainWrapper,
	Chat,
	day,
	hr,
	SendWrapper,
};
