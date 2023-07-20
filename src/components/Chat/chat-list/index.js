import styled from "styled-components";
import ChatItem from "./Item";

const ChatList = () => {
	return (
		<S.Container>
			<S.Header>
				<S.Hsale>판매 내역</S.Hsale>
				<S.Hbuy>구매 내역</S.Hbuy>
			</S.Header>
			<S.AllMain>
				<S.Main>
					<ChatItem />
				</S.Main>
			</S.AllMain>
		</S.Container>
	);
};

export default ChatList;

const Container = styled.div`
	width: 450px;
	border: 1px solid #ebebeb;
	margin: 100px auto;
`;
const Header = styled.div`
	width: 450px;
	height: 60px;
	display: flex;
	div {
		cursor: pointer;
		:hover {
			opacity: 0.6;
		}
	}
`;
const Hsale = styled.div`
	background-color: #3cb371;
	color: #ffffff;
	width: 225px;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
`;

const Hbuy = styled.div`
	background-color: #d5d5d5;
	color: #ffffff;
	width: 225px;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
`;

const AllMain = styled.div`
	width: 900px;
	display: flex;
`;

const Main = styled.div`
	width: 450px;
	height: 500px;
	border-right: 1px solid #ebebeb;
	align-items: center;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const S = {
	Container,
	Header,
	Hsale,
	Hbuy,
	Main,
	AllMain,
};
