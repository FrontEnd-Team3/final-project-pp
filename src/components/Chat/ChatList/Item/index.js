import { productList } from "mocks/data/productsList";
import { useState } from "react";
import styled from "styled-components";
import { flexColumn } from "styles/common";

const ChatItem = ({ chat }) => {
	const { userimg, List, productID, price, move } = chat || {};

	const lastContent =
		List && Array.isArray(List) && List.length > 0
			? List[List.length - 1].content
			: "";

	// 상품 이름, 이미지 보여주기
	const productName = productList?.find(
		product => product.id === productID,
	)?.name;
	const profileImg = productList?.find(product => product.id === productID)
		?.image[0];

	// 상품 상세 페이지로 이동
	// 현재 mock data 구조 문제로 에러 발생, 추후 데이터 받아와서 다시 구현 예정
	// const navigate = useNavigate();
	// onClick={() => navigate(`/product/${productID}`)}

	// 읽음, 나가기
	const [isOpen, setIsOpen] = useState(false);
	// 데이터 연결되면 다른 방식으로 수정할 예정
	const [isRead, setIsRead] = useState(false);

	return (
		<>
			<S.Item>
				<S.IimgContainer>
					{!isRead && <S.New>New</S.New>}
					<S.Iimg src={profileImg ? profileImg : userimg} />
				</S.IimgContainer>
				<S.TextContainer>
					<S.ChatContent>
						<S.Iproduct>{productName ? productName : productID}</S.Iproduct>
						<S.Ichat>{lastContent || "No content for List"}</S.Ichat>
						<S.Iprice>{price}</S.Iprice>
					</S.ChatContent>
					<S.SettingContent>
						<S.Span>
							<S.Setting onClick={() => setIsOpen(prev => !prev)}>
								...
							</S.Setting>
						</S.Span>
						{isOpen && (
							<S.SettingBox>
								<div className="read" onClick={() => setIsRead(true)}>
									읽음
								</div>
								<div className="out">나가기</div>
							</S.SettingBox>
						)}
						{move && <S.Imove>상품이동 ▶</S.Imove>}
					</S.SettingContent>
				</S.TextContainer>
			</S.Item>
		</>
	);
};

export default ChatItem;

const Item = styled.div`
	width: 449px;
	display: flex;
	border-bottom: 1px solid #ebebeb;
	height: 150px;
	background-color: white;
	padding: 20px;
	padding-top: 20px;
	position: relative;
`;

const New = styled.div`
	position: absolute;
	top: 20px;
	left: 15px;
	background-color: ${({ theme }) => theme.PALETTE.primary};
	color: ${({ theme }) => theme.PALETTE.white};
	width: 50px;
	height: 25px;
	line-height: 25px;
	border-radius: 16px;
	text-align: center;
	font-size: 14px;
`;

const TextContainer = styled.div`
	display: flex;
	margin-left: 10px;
`;

const ChatContent = styled.div`
	${flexColumn}
	width: 200px;
	margin-top: 15px;
	margin-right: 35px;
`;

const SettingContent = styled.div`
	${flexColumn}
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

const Setting = styled.div`
	font-size: 16px;
	color: black;
	margin-left: 45px;
	margin-bottom: 5px;
	font-weight: bold;
	cursor: pointer;
`;

const SettingBox = styled.div`
	border: 1px solid ${({ theme }) => theme.PALETTE.gray};
	text-align: center;
	width: 70px;
	cursor: pointer;
	.read {
		border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray};
		padding: 5px;
		:hover {
			background-color: ${({ theme }) => theme.PALETTE.primary};
			color: ${({ theme }) => theme.PALETTE.white};
		}
	}
	.out {
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
	font-weight: bold;
`;

const Ichat = styled.div`
	padding-top: 5px;
	font-size: 12px;
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
	font-weight: bold;
	cursor: pointer;
	position: absolute;
	left: 83%;
	top: 80%;
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
