import styled from "styled-components";
import SUB1 from "../../images/1.jpg";
import SUB2 from "../../images/2.jpg";
import SUB3 from "../../images/3.jpg";
import SUB4 from "../../images/4.jpg";

const ProductImages = ({ image }) => {
	return (
		<S.ImageContainer>
			<div className="main">
				<img src={image} alt="main" />
			</div>
			<div className="sub1">
				<img src={SUB1} alt="sub1" />
			</div>
			<div className="sub2">
				<img src={SUB2} alt="sub2" />
			</div>
			<div className="sub3">
				<img src={SUB3} alt="sub3" />
			</div>
			<div className="sub4">
				<img src={SUB4} alt="sub4" />
			</div>
		</S.ImageContainer>
	);
};

export default ProductImages;

const ImageContainer = styled.div`
	width: 450px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(6, 1fr);
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	.main {
		grid-area: 1 / 1 / 5 / 5;
		margin: 0 auto;
		img {
			width: 450px;
			height: 400px;
			border-radius: 16px;
			border: 3px solid #404040;
			background: #fff;
			/* box-shadow: 4px 4px 0px 0px #404040; */
		}
	}
	.sub1 {
		grid-area: 5 / 1 / 7 / 2;
		margin: 0 auto;
		img {
			width: 100%;
			border-radius: 16px;
			border: 3px solid #404040;
			background: #fff;
			/* box-shadow: 4px 4px 0px 0px #404040; */
		}
	}
	.sub2 {
		grid-area: 5 / 2 / 7 / 3;
		margin: 0 auto;
		img {
			width: 100%;
			border-radius: 16px;
			border: 3px solid #404040;
			background: #fff;
			/* box-shadow: 4px 4px 0px 0px #404040; */
		}
	}
	.sub3 {
		grid-area: 5 / 3 / 7 / 4;
		margin: 0 auto;
		img {
			width: 100%;
			border-radius: 16px;
			border: 3px solid #404040;
			background: #fff;
			/* box-shadow: 4px 4px 0px 0px #404040; */
		}
	}
	.sub4 {
		grid-area: 5 / 4 / 7 / 5;
		margin: 0 auto;
		img {
			width: 100%;
			border-radius: 16px;
			border: 3px solid #404040;
			background: #fff;
			/* box-shadow: 4px 4px 0px 0px #404040; */
		}
	}
`;

const S = { ImageContainer };
