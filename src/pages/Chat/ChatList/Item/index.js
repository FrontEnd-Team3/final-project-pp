import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexColumn } from "styles/common";
import getUserData from "utils/getUserData";
import { useChatData } from "context/chatData.ctx";

const ChatItem = ({ chat }) => {
	const { idx, isRead, lastMessage, product } = chat;
	const { socket, targetChat, setTargetChat, setChatInfo } = useChatData();

	let nick_name;
	const DATA = getUserData();
	if (DATA) nick_name = DATA.nick_name;
	// 읽음
	// const [isOpen, setIsOpen] = useState(false);

	// 페이지 이동
	const navigate = useNavigate();

	// 채팅방 입장하기 + 이전 방 나가기
	const handleEnterRoom = () => {
		// const enterRoomSocket = ConnectSocket();
		// socket.emit("leave", { targetChat });
		setTargetChat(idx);
		socket.emit("join", { room_idx: idx });
		// enterRoomSocket.disconnect();
		setChatInfo({
			title: product.title,
			prod_idx: product.idx,
			room_idx: idx,
			nickName: nick_name,
			isSeller: nick_name === product.User.nick_name,
		});
	};

	return (
		<>
			<S.Item isSelected={chat.idx === parseInt(targetChat)}>
				<S.IimgContainer>
					{!isRead && <S.New>New</S.New>}
					<S.Iimg src={product.img_url} />
				</S.IimgContainer>
				<S.TextContainer onClick={() => handleEnterRoom()}>
					<S.ChatContent>
						<S.Iproduct>{product.title}</S.Iproduct>
						<S.Ichat>{lastMessage || "대화 내역이 존재하지 않습니다."}</S.Ichat>
						<S.Iprice>{product.price}</S.Iprice>
					</S.ChatContent>
					<S.SettingContent>
						<S.Imove onClick={() => navigate(`/product/${product.idx}`)}>
							상품이동 ▶
						</S.Imove>
					</S.SettingContent>
				</S.TextContainer>
			</S.Item>
		</>
	);
};

export default ChatItem;

const Item = styled.div`
	width: 450px;
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
	border-bottom: 1px solid #ebebeb;
	height: 150px;
	background-color: white;
	padding: 20px;
	padding-top: 20px;
	position: relative;
	cursor: pointer;
	background-color: ${({ isSelected }) => (isSelected ? "#AAC8A7" : "white")};
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 350px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 400px;
	}
`;

const New = styled.div`
	position: absolute;
	top: 24px;
	left: 15px;
	background-color: ${({ theme }) => theme.PALETTE.primary};
	color: ${({ theme }) => theme.PALETTE.white};
	width: 42px;
	height: 22px;
	line-height: 22px;
	border-radius: 12px;
	text-align: center;
	font-size: 12px;
	font-weight: 500;
`;

const TextContainer = styled.div`
	display: flex;
`;

const ChatContent = styled.div`
	${flexColumn}
	width: 200px;
	margin-left: 10px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 150px;
	}
`;

const SettingContent = styled.div`
	margin-top: 40px;
`;

const IimgContainer = styled.div`
	width: 90px;
	margin-top: 10px;
	height: 90px;
	border-radius: 50%;
	overflow: hidden;
`;

const Iimg = styled.img`
	width: 90px;
	height: 90px;
`;

const Setting = styled.div`
	font-size: 16px;
	color: black;
	margin-left: 45px;
	font-weight: bold;
	cursor: pointer;
`;

const SettingBox = styled.div`
	font-size: 12px;
	position: absolute;
	top: 22px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray};
	text-align: center;
	width: 60px;
	cursor: pointer;
	background-color: white;
	.read {
		border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray};
		padding: 5px;
		:hover {
			background-color: ${({ theme }) => theme.PALETTE.primary};
			color: ${({ theme }) => theme.PALETTE.white};
		}
	}
`;

const Span = styled.span`
	color: #3cb371;
	font-size: 10px;
	display: flex;
`;

const Iproduct = styled.div`
	font-size: 16px;
	font-weight: 600;
`;

const Ichat = styled.div`
	overflow: hidden;
	max-width: 200px;
	white-space: nowrap;
	text-overflow: ellipsis;
	padding-top: 5px;
	font-size: 12px;
	color: #575757;
`;

const Iprice = styled.div`
	font-size: 14px;
	padding-top: 5px;
	font-weight: 500;
`;

const Imove = styled.div`
	font-size: 12px;
	color: ${({ theme }) => theme.PALETTE.darkBlack};
	font-weight: 500;
	cursor: pointer;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-left: 50px;
	}
`;

const S = {
	Item,
	New,
	TextContainer,
	IimgContainer,
	Iimg,
	Setting,
	Span,
	Iproduct,
	Ichat,
	Iprice,
	Imove,
	ChatContent,
	SettingContent,
	SettingBox,
};
