import ChatApi from "apis/chat.api";
import BasicButton from "components/Button";
import { useNavigate, useParams } from "react-router-dom";
import getUserData from "utils/getUserData";

const StartChatBtn = ({ chat }) => {
	const { id } = useParams();
	const DATA = getUserData();
	let nick_name;
	if (DATA) nick_name = DATA.nick_name;

	const navigate = useNavigate();

	const startChat = () => {
		const bool = chat.some(el => {
			// console.log("닉네임", el.User.nick_name, nick_name);
			return el.User.nick_name !== nick_name;
		});
		// console.log("chatlength", chat.length);
		// console.log("bool", bool);
		if (!chat.length && !bool) {
			console.log("hi");
			try {
				ChatApi.createChatRoom(parseInt(id)).then(res => {
					// console.log("start", res);
					ChatApi.saveMessages({
						room_idx: res.data?.idx,
						message: "너 나한테 물건을 팔아라!",
					}).then(() => {
						navigate("/Chat");
					});
				});
			} catch (err) {
				console.error("error", err);
			}
		} else {
			navigate("/Chat");
		}
	};

	return (
		<BasicButton
			color={"black"}
			size={"mediumThird"}
			children={"채팅하기"}
			style={{
				fontSize: "22px",
				letterSpacing: "5px",
				height: "50px",
				fontWeight: "bold",
			}}
			onClick={startChat}
		/>
	);
};

export default StartChatBtn;
