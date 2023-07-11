import styled from "styled-components";

const ChatList = () => {
	return (
		<Container>
			<Header>
				<Hsale>판매 채팅 내역</Hsale>
				<Hbuy>구매 채팅 내역</Hbuy>
			</Header>
			<Main>
				<Item>
					<Iimg>이미지</Iimg>
					<Itext>상품명</Itext>
					<Itext>마지막 채팅</Itext>
					<Itext>가격</Itext>
				</Item>
				<Item></Item>
				<Item></Item>
				<Item></Item>
				<Item></Item>
				<Item></Item>
			</Main>
		</Container>
	);
};
export default ChatList;

const Container = styled.div`
	width: 1153px;
	height: 1183px;
	background-color: darkgreen;
`;

const Header = styled.div`
	width: 1153px;
	height: 71px;
	text-align: center;
	display: flex;
`;

const Hsale = styled.div`
	background-color: #8490c8;
	width: 50%;
`;

const Hbuy = styled.div`
	background-color: #d5d5d5;
	width: 50%;
`;

const Main = styled.div`
	margin: 0 auto;
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
	background-color: coral;
`;

const Itext = styled.div`
	font-size: 38px;
`;
