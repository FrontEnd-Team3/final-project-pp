import styled from "styled-components";

const ProductImages = ({ product }) => {
	console.log("상품 이미지", product);
	const subImages = product.ProductImages;
	return (
		<S.ImageContainer>
			<S.MainImage className="main">
				<img src={product.img_url} alt="main" />
			</S.MainImage>
			<S.SubImages className="sub">
				{subImages.map(img => (
					<img src={img} />
				))}
			</S.SubImages>
		</S.ImageContainer>
	);
};

export default ProductImages;

const ImageContainer = styled.div`
	width: 615px;
`;

const MainImage = styled.div`
	margin: 0 auto;
	img {
		width: 600px;
		height: 600px;
		border-radius: 16px;
		border: 3px solid #f9f9f9;
		background: #fff;
	}
`;
const SubImages = styled.div`
	display: flex;
	margin: 0 auto;
	img {
		width: 142px;
		height: 137px;
		border-radius: 16px;
		border: 3px solid #f9f9f9;
		background: #fff;
		margin-top: 10px;
		/* box-shadow: 4px 4px 0px 0px #404040; */
		margin-right: 10px;
	}
`;

const S = { ImageContainer, MainImage, SubImages };
