import styled from "styled-components";
import { GoBookmark } from "react-icons/go";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { flexColumn } from "styles/common";
import { useNavigate } from "react-router-dom";

const OneProduct = ({ product }) => {
	const url = product.img_url;
	const futureDate = new Date("2023-07-21");
	const today = product.createdAt;
	const navigate = useNavigate();
	const moveDetailPage = () => {
		navigate(`/product/${product.idx}`);
	};

	return (
		<>
			<S.Container onClick={moveDetailPage}>
				<S.SoldOut>
					<S.Sold>SOLD</S.Sold>
					<S.Out>OUT</S.Out>
				</S.SoldOut>
				<S.Img src={url}></S.Img>
				<S.Name>{product.title}</S.Name>

				<S.FirstLine>
					{/* <S.Location>{product.region}</S.Location> */}
					<S.Location>지역없음</S.Location>
					<S.Iconwrapper>
						<GoBookmark size="16" />
						<div>{product.liked}</div>
						<HiOutlineChatBubbleLeftRight
							size="16"
							style={{ marginLeft: "10px" }}
						/>
						{/* 데이터가 아직 추가되지 않음 */}
						{/* <div>{product.chat.length}</div> */}
					</S.Iconwrapper>
				</S.FirstLine>
				<S.SecondLine>
					<S.Price>{product.price.toLocaleString()} 원</S.Price>
					<S.AgoDate>{today - futureDate.getDate()}일 전</S.AgoDate>
				</S.SecondLine>
			</S.Container>
		</>
	);
};
export default OneProduct;
const Sold = styled.div`
	font-size: 52px;
	font-weight: 900;
	font-style: italic;
	margin-right: 50px;
	color: ${({ theme }) => theme.PALETTE.darkPrimary};
`;
const Out = styled.div`
	margin-left: 50px;
	margin-top: -15px;
	font-size: 52px;
	font-weight: 900;
	font-style: italic;
	color: ${({ theme }) => theme.PALETTE.white};
`;
const SoldOut = styled.div`
	position: relative;
	top: 190px;
	z-index: 1;
	${flexColumn}
	align-items: center;
`;
const AgoDate = styled.div`
	font-size: 12px;
	color: #788394;
	position: relative;
	top: 4px;
	left: 115px;
`;
const Price = styled.div`
	width: 100px;
	font-size: 16px;
	font-weight: 600;
	position: relative;
	left: 1px;
`;
const SecondLine = styled.div`
	display: flex;
	position: relative;
	top: 28px;
`;
const Iconwrapper = styled.div`
	display: flex;
	position: relative;
	left: 50px;
	font-size: 13px;
`;
const FirstLine = styled.div`
	display: flex;
	position: relative;
	top: 26px;
`;
const Location = styled.div`
	font-size: 13px;
	color: #788394;
	width: 140px;
`;
const Name = styled.div`
	font-size: 16px;
	font-weight: bold;
	position: relative;
	top: 10px;
	height: 30px;
`;

const Img = styled.img`
	width: 250px;
	height: 250px;
	filter: brightness(40%);
	border-radius: 4px;
`;
const Container = styled.div`
	width: 252px;
	height: 360px;
	background-color: ${({ theme }) => theme.PALETTE.white};
`;
const S = {
	Container,
	Img,
	FirstLine,
	Iconwrapper,
	SecondLine,
	Price,
	AgoDate,
	SoldOut,
	Sold,
	Out,
	Location,
	Img,
	Name,
	FirstLine,
};
