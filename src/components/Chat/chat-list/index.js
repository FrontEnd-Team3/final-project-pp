import styled from "styled-components";
import { primaryFont } from "styles/common";

const ChatList = () => {
	return (
		<S.Container>
			<S.Header>
				<S.Hsale>판매 채팅 내역</S.Hsale>
				<S.Hbuy>구매 채팅 내역</S.Hbuy>
			</S.Header>
			<S.Main>
				<S.Item>
					<S.Iimg>
						<img src="1.jpg"></img>
					</S.Iimg>
					<S.Itext>상품명</S.Itext>
					<S.Itext>마지막 채팅</S.Itext>
					<S.Itext>가격</S.Itext>
				</S.Item>
				<S.Item></S.Item>
				<S.Item></S.Item>
				<S.Item></S.Item>
				<S.Item></S.Item>
				<S.Item></S.Item>
			</S.Main>
		</S.Container>
	);
};
export default ChatList;

const Container = styled.div`
	border: 3px solid black;
	width: 1158px;
	height: 1275px;
	background-color: darkgreen;
	margin: 0 auto;
	${primaryFont}
`;

const Header = styled.div`
	width: 1158px;
	height: 71px;
	text-align: center;
	display: flex;
`;

const Hsale = styled.div`
	background-color: #8490c8;
	border: 1px solid black;
	width: 577px;
	font-size: 32px;
`;

const Hbuy = styled.div`
	border: 1px solid black;
	background-color: #d5d5d5;
	width: 576px;
	font-size: 32px;
`;

const Main = styled.div`
	margin: 0 auto;
	width: 100%;
	height: 1183px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 30px;
		height: 100px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 16px;
		background: #8490c8;
	}
	&::-webkit-scrollbar-track {
		background-color: #e2e2fe;
		border-radius: 16px;
		width: 10px;
	}
`;

const Item = styled.div`
	border: 3px solid black;
	border-radius: 16px;
	width: 1045px;
	height: 249px;
	background-color: white;
	margin-top: 35px;
	display: flex;
	flex-direction: column;
`;

const Iimg = styled.div`
	width: 210px;
	height: 210px;
`;

const Itext = styled.div`
	font-size: 38px;
`;

const S = {
	Container,
	Header,
	Hsale,
	Hbuy,
	Main,
	Item,
	Iimg,
	Itext,
};
