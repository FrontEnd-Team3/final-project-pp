import styled from "styled-components";

const ChatItem = ({ chat }) => {
	const { userimg, List, productID, price, move } = chat || {};

	const lastContent =
		List && Array.isArray(List) && List.length > 0
			? List[List.length - 1].content
			: "";

	return (
		<>
			<S.Item>
				<S.IimgContainer>
					<S.Iimg src={userimg} />
				</S.IimgContainer>
				<S.TextContainer>
					<S.Span>
						New
						<S.Delete>X</S.Delete>
					</S.Span>
					<S.Iproduct>{productID}</S.Iproduct>
					<S.Ichat>{lastContent || "No content for List"}</S.Ichat>
					<S.Iprice>{price}</S.Iprice>
					{move && <S.Imove>상품이동 ▶</S.Imove>}
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
	color: black;
	margin-left: 10px;
	font-weight: bold;
	cursor: pointer;
	display: inline-block;
`;

const Span = styled.span`
	color: #3cb371;
	font-size: 10px;
	margin-left: 260px;
	display: inline-block;
`;

const Iproduct = styled.div`
	width: 220px;
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
