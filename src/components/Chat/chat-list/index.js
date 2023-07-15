import styled from "styled-components";
import gkgk from "./gkgk.png";

const ChatList = () => {
	return (
		<S.Container>
			<S.Header>
				<S.Hsale>판매 내역</S.Hsale>
				<S.Hbuy>구매 내역</S.Hbuy>
				<S.HChat>CHATTING</S.HChat>
			</S.Header>
			<S.AllMain>
				<S.Main>
					<S.Item>
						<S.IimgContainer>
							<S.Iimg src={gkgk} />
						</S.IimgContainer>
						<S.TextContainer>
							<S.Inew>New</S.Inew>
							<S.Iproduct>파란 오리 판매합니다</S.Iproduct>
							<S.Ichat>안녕하세요. 이거 혹시 네고 가능한가요? </S.Ichat>
							<S.Iprice>20,000 원</S.Iprice>
							<S.Imove>상품이동 ▶</S.Imove>
						</S.TextContainer>
					</S.Item>
					<S.Item></S.Item>
					<S.Item></S.Item>
					<S.Item></S.Item>
					<S.Item></S.Item>
					<S.Item></S.Item>
				</S.Main>
				<S.ChatMain>
					<S.Chat>
						<S.day>2023.07.06</S.day>
						<S.hr />
						<S.BuyWrapper>
							<S.Buytime>10:53</S.Buytime>
							<S.Chatbuy>일이삼사오육칠팔구십일이삼사오육칠팔구십</S.Chatbuy>
						</S.BuyWrapper>
						<S.SellerWrapper>
							<S.ChatSeller>
								일이삼사오육칠팔구십일이삼사오육칠팔구십
							</S.ChatSeller>
							<S.Sellertime>10:55</S.Sellertime>
						</S.SellerWrapper>
						<S.BuyWrapper>
							<S.Buytime>10:53</S.Buytime>
							<S.Chatbuy>일이삼사오육칠팔구십일이삼사오육칠팔구십</S.Chatbuy>
						</S.BuyWrapper>
						<S.SellerWrapper>
							<S.ChatSeller>
								일이삼사오육칠팔구십일이삼사오육칠팔구십
							</S.ChatSeller>
							<S.Sellertime>10:55</S.Sellertime>
						</S.SellerWrapper>
						<S.BuyWrapper>
							<S.Buytime>10:53</S.Buytime>
							<S.Chatbuy>일이삼사오육칠팔구십일이삼사오육칠팔구십</S.Chatbuy>
						</S.BuyWrapper>
						<S.SellerWrapper>
							<S.ChatSeller>
								일이삼사오육칠팔구십일이삼사오육칠팔구십
							</S.ChatSeller>
							<S.Sellertime>10:55</S.Sellertime>
						</S.SellerWrapper>
						<S.BuyWrapper>
							<S.Buytime>10:53</S.Buytime>
							<S.Chatbuy>일이삼사오육칠팔구십일이삼사오육칠팔구십</S.Chatbuy>
						</S.BuyWrapper>
						<S.SellerWrapper>
							<S.ChatSeller>
								일이삼사오육칠팔구십일이삼사오육칠팔구십
							</S.ChatSeller>
							<S.Sellertime>10:55</S.Sellertime>
						</S.SellerWrapper>
						<S.BuyWrapper>
							<S.Buytime>10:53</S.Buytime>
							<S.Chatbuy>일이삼사오육칠팔구십일이삼사오육칠팔구십</S.Chatbuy>
						</S.BuyWrapper>
						<S.SellerWrapper>
							<S.ChatSeller>
								일이삼사오육칠팔구십일이삼사오육칠팔구십
							</S.ChatSeller>
							<S.Sellertime>10:55</S.Sellertime>
						</S.SellerWrapper>
					</S.Chat>
				</S.ChatMain>
			</S.AllMain>
		</S.Container>
	);
};
export default ChatList;

const Container = styled.div`
	width: 900px;
	border: 1px solid #ebebeb;
	margin: 100px auto;
`;

const Header = styled.div`
	width: 900px;
	height: 60px;
	display: flex;
	div {
		cursor: pointer;
		:hover {
			opacity: 0.7;
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

const HChat = styled.div`
	width: 449px;
	background-color: #fcf9f3;
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

const Item = styled.div`
	display: flex;
	border-bottom: 1px solid #ebebeb;
	width: 450px;
	height: 150px;
	background-color: white;
	padding: 15px 20px;
`;

const TextContainer = styled.div`
	display: flex;
	margin-left: 8px;
	flex-direction: column;
`;

const IimgContainer = styled.div`
	width: 90px;
	margin-top: 10px;
	height: 90px;
	border-radius: 50%;
	overflow: hidden;
`;

const Iimg = styled.img`
	width: 100%;
	height: 100%;
`;

const Inew = styled.div`
	color: #3cb371;
	font-size: 10px;
	margin-left: 290px;
`;

const Iproduct = styled.div`
	width: 200px;
	font-size: 16px;
	font-weight: bold;
`;

const Ichat = styled.div`
	width: 200px;
	padding-top: 5px;
	font-size: 16px;
	color: #575757;
`;

const Iprice = styled.div`
	font-size: 14px;
	padding-top: 5px;
	font-weight: bold;
`;

const Imove = styled.div`
	font-size: 12px;
	color: #222222;
	margin-left: 245px;
	margin-bottom: 5px;
	font-weight: bold;
	cursor: pointer;
`;

const ChatMain = styled.div`
	width: 450px;
`;

const Chat = styled.div`
	width: 450px;
	padding: 20px;
	height: 500px;
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
	width: 400px;
	color: #d9d9d9;
`;

const BuyWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	width: 280px;
	float: right;
	margin-top: 20px;
	margin-bottom: 20px;
	word-wrap: break-word;
	text-align: right;
`;

const SellerWrapper = styled.div`
	display: flex;
	float: left;
	width: 280px;
	align-items: flex-end;
`;

const Buytime = styled.div`
	font-size: 8px;
	color: #242424;
	margin-right: 8px;
`;

const Sellertime = styled.div`
	font-size: 8px;
	color: #242424;
	margin-left: 8px;
`;

const Chatbuy = styled.div`
	font-size: 16px;
	padding: 10px;
	align-items: start;
	float: right;
	background-color: #e6e6e6;
	word-wrap: break-word;
	border-radius: 6px;
	text-align: right;
`;

const ChatSeller = styled.div`
	font-size: 16px;
	float: left;
	align-items: start;
	padding: 10px;
	background-color: #ffffff;
	border: 1px solid #dddddd;
	word-wrap: break-word;
	border-radius: 6px;
`;

const S = {
	Container,
	Header,
	Hsale,
	Hbuy,
	HChat,
	Main,
	Item,
	Iimg,
	Iproduct,
	Ichat,
	TextContainer,
	IimgContainer,
	Iprice,
	Inew,
	AllMain,
	Imove,
	BuyWrapper,
	SellerWrapper,
	ChatMain,
	Chat,
	day,
	hr,
	Chatbuy,
	ChatSeller,
	Buytime,
	Sellertime,
};
