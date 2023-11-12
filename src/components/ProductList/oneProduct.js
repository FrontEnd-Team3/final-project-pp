import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import getDate from "utils/getDate";
import LazyImage from "components/LazyImage/LazyImage";

const OneProduct = ({ product, grid }) => {
	const localPrice = product.price?.toLocaleString("ko-KR");
	const ImageURL = product?.img_url;

	// 날짜 구하는 로직
	const productDate = getDate(product.createdAt);

	// 상품 상세 페이지로 이동
	const navigate = useNavigate();
	const HandlePageMove = () => {
		navigate(`/product/${product.idx}`);
	};

	return (
		<S.Container onClick={HandlePageMove} className={grid}>
			<S.ImgBox>
				<S.StyledLazyImg src={ImageURL}></S.StyledLazyImg>
			</S.ImgBox>
			<S.ProductInfo status={product.status}>
				<div className="infoTop">
					<p className="name">
						{product.title}&nbsp;&nbsp;
						<span className="status">{product.status}</span>
					</p>
				</div>
				<div className="infoBottom">
					<p className="price">{localPrice} 원</p>
					<p className="date">{productDate}</p>
				</div>
			</S.ProductInfo>
		</S.Container>
	);
};

export default OneProduct;

const StyledLazyImg = styled(LazyImage)`
	width: 100%;
	aspect-ratio: 1;
	border-radius: 4px;
	transition: all 0.2s linear;
	:hover {
		transform: scale(1.05);
	}
`;
const Container = styled.div`
	cursor: pointer;
	margin-bottom: 20px;
	position: relative;
	.box1 {
		grid-area: 1 / 1 / 2 / 2;
	}
	.box2 {
		grid-area: 1 / 2 / 2 / 3;
	}
	.box3 {
		grid-area: 1 / 3 / 2 / 4;
	}
	.box4 {
		grid-area: 1 / 4 / 2 / 5;
	}
	.box5 {
		grid-area: 2 / 1 / 3 / 2;
	}
	.box6 {
		grid-area: 2 / 2 / 3 / 3;
	}
	.box7 {
		grid-area: 2 / 3 / 3 / 4;
	}
	.box8 {
		grid-area: 2 / 4 / 3 / 5;
	}
`;

const ImgBox = styled.div`
	position: relative;
	overflow: hidden;
`;

const Image = styled.img`
	width: 100%;
	aspect-ratio: 1;
	border-radius: 4px;
	transition: all 0.2s linear;
	:hover {
		transform: scale(1.05);
	}
`;

const ProductInfo = styled.div`
	width: 100%;
	.infoTop {
		.name {
			font-size: 16px;
			font-weight: 700;
			width: 100%;
			height: 40px;
			margin-top: 4px;
			@media ${({ theme }) => theme.DEVICE.mobile} {
				font-size: 15px;
			}
			span {
				display: inline-block;
				border-radius: 2px;
				background-color: ${({ theme, status }) => {
					if (status === "판매완료") return theme.PALETTE.gray;
					return theme.PALETTE.primary;
				}};
				font-size: 12px;
				font-weight: 500;
				color: ${({ theme }) => theme.PALETTE.white};
				padding: 5px 10px;

				@media ${({ theme }) => theme.DEVICE.mobile} {
					font-size: 11px;
					padding: 4px 6px;
				}
			}
		}
	}
	.infoBottom {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		.price {
			font-size: 16px;
			font-weight: 600;
			@media ${({ theme }) => theme.DEVICE.mobile} {
				font-size: 15px;
			}
		}
		.date {
			font-size: 12px;
		}
	}
`;

const Tag = styled.span`
	display: inline-block;
	padding: 8px;
	border-radius: 20px;
	border: 1px solid;
	background: ${({ theme }) => theme.PALETTE.white};
	border-color: ${({ theme }) => theme.PALETTE.primary};
	color: ${({ theme }) => theme.PALETTE.primary};
	text-align: center;
	line-height: 16.5px;
`;
const S = { Container, ImgBox, Image, ProductInfo, Tag, StyledLazyImg };
