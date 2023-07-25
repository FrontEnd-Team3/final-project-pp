import BasicButton from "components/Button";
import BasicInput from "components/Input";
import { useState } from "react";
import styled from "styled-components";
import fakeProfile from "./fakeProfile.png";

const Chatting = () => {
	// 전송 시 input 값 전송
	const [inputVal, setInputVal] = useState("");
	const [sendedContents, setSendedContents] = useState([]);
	const handleInput = e => {
		// console.log(e.target.value);
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
			<S.ChatMain>
				<S.Chat>
					<S.day>2023.07.06</S.day>
					<S.hr />
					<S.OtherChat>
						<S.OtherWrapper>
							<S.OtherImg>
								<S.Oimg src={fakeProfile} />
							</S.OtherImg>
							<S.Other>
								<S.OtherNickname>룰루랄라</S.OtherNickname>
								<S.SendedByOther>
									일이삼사오육칠팔구십일이삼사오육칠팔구십
									일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
								</S.SendedByOther>
							</S.Other>
						</S.OtherWrapper>
						<S.ReceivedTime>10:55</S.ReceivedTime>
					</S.OtherChat>
					<S.MyChats>
						{sendedContents.map(content => (
							<S.OneChat>
								<S.SendedTime>15:49</S.SendedTime>
								<S.MyWrapper>
									<S.My>
										<S.SendedByMe>{content}</S.SendedByMe>
										<S.MyNickname>룰루랄라</S.MyNickname>
									</S.My>
									<S.MyImg>
										<S.Mimg src={fakeProfile} />
									</S.MyImg>
								</S.MyWrapper>
							</S.OneChat>
						))}
					</S.MyChats>
				</S.Chat>
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
		</S.Container>
	);
};

export default Chatting;

const Container = styled.div`
	border: 1px solid #ebebeb;
	margin: 100px auto;
`;

const Header = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	div {
		cursor: pointer;
		:hover {
			opacity: 0.7;
		}
	}
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

const MyChats = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	align-items: flex-end;
`;

const OtherChat = styled.div`
	display: flex;
	margin-top: 10px;
	margin-bottom: 10px;
	float: left;
	align-items: flex-end;
`;

const SendedTime = styled.div`
	font-size: 8px;
	color: #242424;
	margin-top: 45px;
	margin-right: 8px;
`;

const ReceivedTime = styled.div`
	font-size: 8px;
	color: #242424;
	margin-left: 8px;
`;

const SendedByMe = styled.div`
	max-width: 200px;
	font-size: 16px;
	padding: 10px;
	background-color: #e6e6e6;
	word-wrap: break-word;
	border-radius: 6px;
	text-align: right;
`;

const SendedByOther = styled.div`
	width: auto;
	max-width: 200px;
	font-size: 16px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 10px;
	background-color: #ffffff;
	border: 1px solid #dddddd;
	word-wrap: break-word;
	border-radius: 6px;
	margin-left: 5px;
`;

const SendWrapper = styled.form`
	background-color: #ffffff;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 10px;
	position: sticky;
	bottom: 0;
	margin-bottom: 7px;
`;

const OneChat = styled.div`
	display: flex;
	align-items: flex-end;
`;

const OtherImg = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	overflow: hidden;
`;

const Oimg = styled.img`
	width: 100%;
	height: 100%;
`;

const OtherNickname = styled.div`
	font-size: 11px;
	width: 45px;
	margin-left: 10px;
	margin-bottom: 3px;
`;

const Other = styled.div`
	display: block;
`;

const MyImg = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	overflow: hidden;
	margin-left: 5px;
`;

const Mimg = styled.img`
	width: 100%;
	height: 100%;
`;
const MyNickname = styled.div`
	font-size: 11px;
	width: 45px;
	display: flex;
	margin-bottom: 3px;
`;

const My = styled.div`
	display: flex;
	flex-direction: column-reverse;
	align-items: flex-end;
`;

const MyWrapper = styled.div`
	display: flex;
	margin: 10px 0;
`;

const OtherWrapper = styled.div`
	display: flex;
`;

const S = {
	Container,
	Header,
	HChat,
	ChatMain,
	Chat,
	day,
	hr,
	MyChats,
	OtherChat,
	ReceivedTime,
	SendedTime,
	SendedByMe,
	SendedByOther,
	SendWrapper,
	OneChat,
	OtherImg,
	Oimg,
	OtherNickname,
	Other,
	MyImg,
	Mimg,
	MyNickname,
	My,
	MyWrapper,
	OtherWrapper,
};
