import styled from "styled-components";

const ProductImages = ({ product }) => {
	// console.log("상품 이미지", product);
	const subImages = product.ProductImages;
	return (
		<S.ImageContainer>
			<S.MainImage className="main">
				<img src={product.img_url} alt="main" />
			</S.MainImage>
			<S.SubImages className="sub">
				{subImages.map((img, index) => (
					<S.SubImageWrapper key={index} img={img.img_url}></S.SubImageWrapper>
				))}
			</S.SubImages>
		</S.ImageContainer>
	);
};

export default ProductImages;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 600px;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 100%;
	}
`;

const MainImage = styled.div`
	display: flex;
	align-items: center;
	padding: 0 20px;
	margin: 0 auto;
	width: 100%;
	height: 600px;
	border-radius: 16px;
	border: 3px solid #f9f9f9;
	img {
		width: 100%;
		height: auto;
		background: #fff;
	}

	@media ${({ theme }) => theme.DEVICE.tablet} {
		max-width: 600px;
	}
`;

const SubImages = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	width: 100%;
	grid-gap: 16px;
	margin: 20px 0;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
`;
const SubImageWrapper = styled.div`
	width: 100%;
	aspect-ratio: 1;
	background: url(${props => props.img}) no-repeat center center / contain;
	border-radius: 16px;
	img {
		width: 100%;
		height: 100%;
	}
`;

const S = { ImageContainer, MainImage, SubImages, SubImageWrapper };
