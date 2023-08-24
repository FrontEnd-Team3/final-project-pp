import styled from "styled-components";
import { flexColumn } from "styles/common";
import { useNavigate } from "react-router-dom";
import getDate from "utils/getDate";

const OneProduct = ({ product }) => {
	const url = product?.img_url;
	const navigate = useNavigate();
	const moveDetailPage = () => {
		navigate(`/product/${product.idx}`);
	};

	const soldData = getDate(product.createdAt);

	return (
		<>
			<S.Container onClick={moveDetailPage}>
				<S.SoldOut>
					<S.Sold>SOLD</S.Sold>
					<S.Out>OUT</S.Out>
				</S.SoldOut>
				<S.ImageBox>
					<S.Image src={url}></S.Image>
				</S.ImageBox>
				<S.Name>{product.title}</S.Name>
				<S.FirstLine></S.FirstLine>
				<S.SecondLine>
					<S.Price>{product.price.toLocaleString()} 원</S.Price>
					<S.AgoDate>{soldData}</S.AgoDate>
				</S.SecondLine>
			</S.Container>
		</>
	);
};
export default OneProduct;
const Sold = styled.div`
	font-size: 55px;
	font-weight: 900;
	font-style: italic;
	margin-right: 50px;
	color: ${({ theme }) => theme.PALETTE.darkPrimary};
	@media ${({ theme }) => theme.DEVICE.pc} {
		font-size: 47px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		font-size: 80px;
	}
`;
const Out = styled.div`
	margin-left: 50px;
	margin-top: -15px;
	font-size: 55px;
	font-weight: 900;
	font-style: italic;
	color: ${({ theme }) => theme.PALETTE.white};
	@media ${({ theme }) => theme.DEVICE.pc} {
		font-size: 47px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		font-size: 80px;
	}
`;

const SoldOut = styled.div`
	position: relative;
	top: 180px;
	z-index: 1;
	${flexColumn}
	align-items: center;
	cursor: pointer;
	@media ${({ theme }) => theme.DEVICE.pc} {
		margin-bottom: 30px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		position: relative;
		top: 280px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		position: relative;
		top: 250px;
	}
`;

const AgoDate = styled.div`
	font-size: 12px;
	color: #788394;
`;
const Price = styled.div`
	width: 100px;
	font-size: 16px;
	font-weight: 600;
	left: 1px;
`;
const SecondLine = styled.div`
	display: flex;
	position: relative;
	top: 28px;
	justify-content: space-between;
	align-items: center;
`;

const FirstLine = styled.div`
	display: flex;
	justify-content: space-between;
	top: 26px;
`;

const Name = styled.div`
	font-size: 16px;
	font-weight: bold;
	top: 10px;
	height: 30px;
`;

const ImageBox = styled.div`
	position: relative;
	filter: brightness(40%);
`;

const Image = styled.img`
	width: 100%;
	aspect-ratio: 1;
	border-radius: 4px;
`;

const Container = styled.div`
	background-color: ${({ theme }) => theme.PALETTE.white};
	cursor: pointer;
	margin-bottom: 20px;
	position: relative;
`;
const S = {
	Container,
	FirstLine,
	SecondLine,
	Price,
	AgoDate,
	SoldOut,
	Sold,
	Out,
	Name,
	FirstLine,
	ImageBox,
	Image,
};
