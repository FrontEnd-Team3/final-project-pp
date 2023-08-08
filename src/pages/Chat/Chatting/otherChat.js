import styled from "styled-components";
import FakeProfile from "./planting.png";

const OtherChat = ({ createdAt, message, user }) => {
	return (
		<>
			<S.OtherChatWrapper>
				<S.OtherWrapper>
					<S.OtherImg>
						<S.Oimg src={user.profile_url || FakeProfile} />
					</S.OtherImg>
					<S.Other>
						<S.OtherNickname>{user.nick_name}</S.OtherNickname>
						<S.SendedByOther>{message}</S.SendedByOther>
					</S.Other>
				</S.OtherWrapper>
				<S.ReceivedTime>
					{createdAt.split("T")[1].split(":")[0]} :
					{createdAt.split("T")[1].split(":")[1]}
				</S.ReceivedTime>
			</S.OtherChatWrapper>
		</>
	);
};
export default OtherChat;

const OtherChatWrapper = styled.div`
	display: flex;
	margin-top: 10px;
	margin-bottom: 10px;
	align-items: flex-end;
`;

const ReceivedTime = styled.div`
	font-size: 8px;
	color: #242424;
	margin-left: 8px;
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

const OtherWrapper = styled.div`
	display: flex;
`;

const S = {
	OtherChatWrapper,
	OtherWrapper,
	OtherImg,
	Oimg,
	Other,
	OtherNickname,
	SendedByOther,
	ReceivedTime,
};
