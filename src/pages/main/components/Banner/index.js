import styled from "styled-components";
import FAKEIMG from "./images/banner.png";
import FAKEIMG2 from "./images/banner2.png";
import FAKEIMG3 from "./images/banner3.png";
import { BsFillCircleFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
	const ImageArr = [FAKEIMG, FAKEIMG2, FAKEIMG3];

	const slideRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const IMAGE_SIZE = 1065;
	const SLIDE_RANGE = currentIndex * IMAGE_SIZE;

	useEffect(() => {
		slideRef.current.style.transition = "all 0.5s ease-in-out";
		slideRef.current.style.transform = `translateX(-${SLIDE_RANGE}px)`;
	}, [currentIndex]);

	return (
		<S.BannerWrapper>
			<S.BannerContainer ref={slideRef}>
				{ImageArr.map((image, i) => (
					<S.BannerImg key={i} src={image} />
				))}
			</S.BannerContainer>
			<S.BannerButtons>
				<BsFillCircleFill
					size="15"
					color={currentIndex === 0 ? "white" : "gray"}
					onClick={() => setCurrentIndex(0)}
					className="bannerBtn"
				/>
				<BsFillCircleFill
					size="15"
					color={currentIndex === 1 ? "white" : "gray"}
					onClick={() => setCurrentIndex(1)}
					className="bannerBtn"
				/>
				<BsFillCircleFill
					size="15"
					color={currentIndex === 2 ? "white" : "gray"}
					onClick={() => setCurrentIndex(2)}
					className="bannerBtn"
				/>
			</S.BannerButtons>
			<div>
				<S.StaticImg src={FAKEIMG} />
			</div>
		</S.BannerWrapper>
	);
};

export default Banner;

const BannerWrapper = styled.div`
	width: 1060px;
	margin: 50px auto;
	position: relative;
	overflow: hidden;
`;

const BannerContainer = styled.div`
	width: 860px;
	display: flex;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: none;
	}
`;

const BannerImg = styled.img`
	width: 1060px;
	height: 428px;
	margin-right: 5px;
`;

const BannerButtons = styled.div`
	width: 80px;
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 90%;
	left: 45%;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: none;
	}
`;

const StaticImg = styled.img`
	display: none;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: block;
		width: 750px;
	}
`;

const S = {
	BannerWrapper,
	BannerContainer,
	BannerImg,
	BannerButtons,
	StaticImg,
};
