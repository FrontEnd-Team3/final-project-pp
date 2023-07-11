import styled from "styled-components";

const OneProduct = ({ product }) => {
	console.log(product);
	const localPrice = product.price.toLocaleString("ko-KR");
	const ImageURL = product.image;
	return (
		<S.Container>
			<S.Image src={ImageURL}></S.Image>
			<S.ProductInfo>
				<div className="infoTop">
					<p className="name">{product.name}</p>
					<p className="date">{product.date}</p>
				</div>
				<div className="infoBottom">
					<p className="location">{product.location}</p>
					<p className="price">{localPrice} 원</p>
				</div>
			</S.ProductInfo>
		</S.Container>
	);
};

export default OneProduct;

const Container = styled.div`
	width: 250px;
	height: 306px;
	border-radius: 12px;
	border: 3px solid;
	border-color: ${({ theme }) => theme.PALETTE.black};
	background: #e2e2fe;
`;

const Image = styled.img`
	width: 224px;
	height: 210px;
	border-radius: 12px;
	border: 3px solid;
	border-color: ${({ theme }) => theme.PALETTE.black};
	background-color: ${({ theme }) => theme.PALETTE.white};
	margin: 10px;
`;

const ProductInfo = styled.div`
	margin: 0 11px;
	.infoTop {
		display: flex;
		justify-content: space-between;
		.name {
			font-size: 16px;
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
	.infoBottom {
		margin-top: 10px;
		display: flex;
		font-size: 10px;
		.location {
			margin-right: 61px;
		}
	}
`;

const S = { Container, Image, ProductInfo };
