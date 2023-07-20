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
					<S.IimgContainer>
						<S.Iimg src={gkgk} />
					</S.IimgContainer>
					<S.TextContainer>
						<S.Itext>상품명</S.Itext>
						<S.Itext>마지막 채팅</S.Itext>
						<S.Itext>가격</S.Itext>
					</S.TextContainer>
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
	border-bottom: 3px solid black;
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
	width: 577px;
	font-size: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Hbuy = styled.div`
	background-color: #d5d5d5;
	border-left: 3px solid black;
	width: 576px;
	font-size: 24px;
	display: flex;
	align-items: center;
	justify-content: center;
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
	display: flex;
	padding-left: 5px;
	padding-top: 5px;
	border: 3px solid black;
	border-radius: 16px;
	width: 400px;
	height: 249px;
	background-color: white;
	margin-top: 35px;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 10px;
`;

const IimgContainer = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 16px;
	overflow: hidden;
`;

const Iimg = styled.img`
	width: 100%;
	height: 100%;
`;

const Itext = styled.div`
	font-size: 24px;
	padding-top: 5px;
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
	TextContainer,
	IimgContainer,
};
