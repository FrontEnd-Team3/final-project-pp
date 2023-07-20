import styled from "styled-components";
import gkgk from "./gkgk.png";

const ChatItem = () => {
	return (
		<>
			<S.Item>
				<S.IimgContainer>
					<S.Iimg src={gkgk} />
				</S.IimgContainer>
				<S.TextContainer>
					<S.Delete>X</S.Delete>
					<S.Iproduct>
						파란 오리 판매합니다
						<S.Span>New</S.Span>
					</S.Iproduct>
					<S.Ichat>안녕하세요. 이거 혹시 네고 가능한가요? </S.Ichat>
					<S.Iprice>20,000 원</S.Iprice>
					<S.Imove>상품이동 ▶</S.Imove>
				</S.TextContainer>
			</S.Item>
		</>
	);
};

export default ChatItem;

const Item = styled.div`
	display: flex;
	border-bottom: 1px solid #ebebeb;
	height: 150px;
	background-color: white;
	padding: 10px 20px;
`;

const TextContainer = styled.div`
	display: flex;
	margin-left: 10px;
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

const Delete = styled.div`
	font-size: 16px;
	margin-left: 290px;
	font-weight: bold;
	cursor: pointer;
`;

const Span = styled.span`
	color: #3cb371;
	font-size: 10px;
	margin-left: 10px;
	box-shadow: inset 0 -1px #3cb371;
`;

const Iproduct = styled.div`
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
	margin-left: 240px;
	margin-bottom: 10px;
	font-weight: bold;
	cursor: pointer;
`;

const S = {
	Item,
	TextContainer,
	IimgContainer,
	Iimg,
	Delete,
	Span,
	Iproduct,
	Ichat,
	Iprice,
	Imove,
};
