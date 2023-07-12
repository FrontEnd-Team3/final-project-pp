import styled from "styled-components";
import { primaryFont } from "styles/common";
import gkgk from "./gkgk.png";

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
						<img src={gkgk} width="150px" height="150px" float="left"></img>
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
	width: 430px;
	height: 1275px;
	margin: 0 auto;
	${primaryFont}
`;

const Header = styled.div`
	width: 100%;
	height: 71px;
	text-align: center;
	display: flex;
	div {
		width: 50%;
		cursor: pointer;
		:hover {
			opacity: 0.7;
		}
	}
`;

const Hsale = styled.div`
	background-color: #8490c8;
	border: 1px solid black;
	width: 577px;
	font-size: 24px;
`;

const Hbuy = styled.div`
	border: 1px solid black;
	background-color: #d5d5d5;
	width: 576px;
	font-size: 24px;
`;

const Main = styled.div`
	height: 1100px;
	padding-left: 4px;
	align-items: center;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 15px;
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
	padding-left: 5px;
	padding-top: 5px;
	border: 3px solid black;
	border-radius: 16px;

	width: 400px;
	height: 249px;
	background-color: white;
	margin-top: 35px;
	display: flex;
	flex-direction: column;
`;

const Iimg = styled.div`
	width: 210px;
	height: 210px;
	border-radius: 16px;
`;

const Itext = styled.div`
	font-size: 24px;
	float: right;
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
