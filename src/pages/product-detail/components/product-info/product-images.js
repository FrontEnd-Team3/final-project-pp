import styled from "styled-components";

const ProductImages = ({ image }) => {
	const subImages = image.slice(1);
	return (
		<S.ImageContainer>
			<S.MainImage className="main">
				<img src={image[0]} alt="main" />
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
	width: 450px;
`;

const MainImage = styled.div`
	margin: 0 auto;
	img {
		width: 390px;
		height: 350px;
		border-radius: 16px;
		border: 3px solid #404040;
		background: #fff;
	}
`;
const SubImages = styled.div`
	display: flex;
	margin: 0 auto;
	img {
		width: 90px;
		height: 90px;
		border-radius: 16px;
		border: 3px solid #404040;
		background: #fff;
		margin-top: 10px;
		margin-right: 10px;
		/* box-shadow: 4px 4px 0px 0px #404040; */
	}
`;

const S = { ImageContainer, MainImage, SubImages };
