import styled from "styled-components";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { flexColumn } from "styles/common";
import { useNavigate } from "react-router-dom";
import { RxBookmarkFilled, RxBookmark } from "react-icons/rx";

const OneProduct = ({ product }) => {
	const url = product?.img_url;
	const todayDate = new Date();

	// 이전 날짜
	const soldDate = product.createdAt;
	const soldDataObject = new Date(soldDate);
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
				<S.ImageBox>
					<S.Image src={url}></S.Image>
					<S.Icon>
						{product.liked ? (
							<RxBookmarkFilled size={24} style={{ color: "#333" }} />
						) : (
							<RxBookmark size={24} style={{ color: "#333" }} />
						)}
					</S.Icon>
				</S.ImageBox>
				<S.Name>{product.title}</S.Name>
				<S.FirstLine>
					{/* <S.Location>{product.region}</S.Location> */}
					<S.Location>지역 데이터 안와요..</S.Location>
					<S.Iconwrapper>
						<HiOutlineChatBubbleLeftRight
							size="16"
							style={{ marginLeft: "-70px" }}
						/>
						{/* 데이터가 아직 추가되지 않음 */}
						{/* <div>{product.chat.length}</div> */}
					</S.Iconwrapper>
				</S.FirstLine>
				<S.SecondLine>
					<S.Price>{product.price.toLocaleString()} 원</S.Price>
					<S.AgoDate>
						{todayDate.getDate() - soldDataObject.getDate()}일 전
					</S.AgoDate>
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
const Iconwrapper = styled.div`
	display: flex;
	position: relative;
	left: 50px;
	font-size: 13px;
`;
const FirstLine = styled.div`
	display: flex;
	justify-content: space-between;
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

const Icon = styled.span`
	position: absolute;
	right: 10px;
	top: 10px;
`;

const Container = styled.div`
	background-color: ${({ theme }) => theme.PALETTE.white};
	cursor: pointer;
	margin-bottom: 20px;
	/* padding-top: -10px; */
	position: relative;
`;
const S = {
	Container,
	FirstLine,
	Iconwrapper,
	SecondLine,
	Price,
	AgoDate,
	SoldOut,
	Sold,
	Out,
	Location,
	Name,
	FirstLine,
	ImageBox,
	Image,
	Icon,
};
