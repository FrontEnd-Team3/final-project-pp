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
					<S.SubImageWrapper key={index}>
						<img src={img.img_url} alt={`sub${index}`} />
					</S.SubImageWrapper>
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
	width: 615px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 768px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 480px;
	}
`;

const MainImage = styled.div`
	margin: 0 auto;
	width: 600px;
	img {
		width: 100%;
		height: auto;
		border-radius: 16px;
		border: 3px solid #f9f9f9;
		background: #fff;
		@media ${({ theme }) => theme.DEVICE.tablet} {
			width: 600px;
		}
		@media ${({ theme }) => theme.DEVICE.mobile} {
			width: 480px;
		}
	}
`;

const SubImages = styled.div`
	display: flex;
	width: 100%;
	height: 137px;
	margin-top: 10px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
`;
const SubImageWrapper = styled.div`
	width: 142px;
	height: 137px;
	margin-right: 10px;
	border-radius: 16px;
	img {
		width: 100%;
		height: 100%;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 100px;
		height: 100px;
	}
`;

const S = { ImageContainer, MainImage, SubImages, SubImageWrapper };
