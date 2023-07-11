import styled from "styled-components";
import { primaryFont } from "styles/common";

const OneProduct = ({ product }) => {
	console.log(product);
	const localPrice = product.price.toLocaleString("ko-KR");
	const ImageURL = product.image;

	// 하트 넣기
	return (
		<S.Container>
			<S.Image src={ImageURL}></S.Image>
			<S.ProductInfo>
				<div className="infoTop">
					<p className="name">{product.name}</p>
				</div>
				<div className="infoMedium">
					<p className="location">{product.location}</p>
				</div>
				<div className="infoBottom">
					<p className="price">{localPrice} 원</p>
					<p className="date">{product.date}</p>
				</div>
			</S.ProductInfo>
		</S.Container>
	);
};

export default OneProduct;

const Container = styled.div`
	width: 194px;
	height: 270px;
	border-radius: 12px;
	border: 3px solid;
	border-color: ${({ theme }) => theme.PALETTE.black};
	background: #e2e2fe;
	${primaryFont}
`;

const Image = styled.img`
	width: 170px;
	height: 180px;
	border-radius: 12px;
	border: 3px solid;
	border-color: ${({ theme }) => theme.PALETTE.black};
	background-color: ${({ theme }) => theme.PALETTE.white};
	margin: 10px 10px 7px 10px;
`;

const ProductInfo = styled.div`
	margin: 0 11px;
	.infoTop {
		display: flex;
		justify-content: space-between;
		.name {
			font-size: 14px;
			font-weight: 700;
			width: 140px;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
		.date {
			font-size: 10px;
		}
	}
	.infoMedium {
		margin-top: 10px;
		display: flex;
		font-size: 10px;
	}
	.infoBottom {
		margin-top: 10px;
		display: flex;
		font-size: 10px;
		justify-content: space-between;
		.location {
			margin-right: 5px;
		}
	}
`;

const S = { Container, Image, ProductInfo };
