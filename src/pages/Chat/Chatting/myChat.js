import styled from "styled-components";
import FakeProfile from "./planting.png";
import { getChatTime, getDayOrNight } from "../utils/getTime";

const MyChat = ({ createdAt, message, user }) => {
	const dayOrNight = getDayOrNight(createdAt);
	const chatTime = getChatTime(createdAt);

	return (
		<S.MyChats>
			<S.OneChat>
				<S.SendedTime>
					{dayOrNight} {chatTime}
				</S.SendedTime>
				<S.MyWrapper>
					<S.My>
						<S.SendedByMe>{message}</S.SendedByMe>
						<S.MyNickname>{user?.nick_name}</S.MyNickname>
					</S.My>
					<S.MyImg>
						<S.Mimg src={user?.profile_url || FakeProfile} />
					</S.MyImg>
				</S.MyWrapper>
			</S.OneChat>
		</S.MyChats>
	);
};

export default MyChat;

const MyChats = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	align-items: flex-end;
`;

const OneChat = styled.div`
	display: flex;
	align-items: flex-end;
`;

const SendedTime = styled.div`
	font-size: 8px;
	color: #242424;
	margin-top: 45px;
	margin-right: 8px;
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

const Mimg = styled.img`
	width: 100%;
	height: 100%;
`;

const MyImg = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	overflow: hidden;
	margin-left: 5px;
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

const S = {
	MyChats,
	SendedTime,
	SendedByMe,
	Mimg,
	MyNickname,
	My,
	MyWrapper,
	MyImg,
	OneChat,
};
