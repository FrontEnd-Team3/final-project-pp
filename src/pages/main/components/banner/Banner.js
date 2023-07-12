import styled from "styled-components";
import FAKEIMG from "./images/banner.png";
import { BsFillCircleFill } from "react-icons/bs";

const Banner = () => {
	return (
		<S.BannerWrapper>
			<S.BannerContainer>
				<S.BannerImg src={FAKEIMG} />
			</S.BannerContainer>
			<S.BannerButtons>
				<BsFillCircleFill size="15" color="white" />
				<BsFillCircleFill size="15" color="white" />
				<BsFillCircleFill size="15" color="white" />
			</S.BannerButtons>
		</S.BannerWrapper>
	);
};

export default Banner;

const BannerWrapper = styled.div`
	width: 860px;
	margin: 50px auto;
	position: relative;
`;

const BannerContainer = styled.div`
	width: 100%;
`;

const BannerImg = styled.img`
	width: 100%;
	border: 3px solid black;
	border-radius: 20px;
`;

const BannerButtons = styled.div`
	width: 80px;
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 90%;
	left: 45%;
`;

const S = { BannerWrapper, BannerContainer, BannerImg, BannerButtons };
