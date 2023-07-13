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
	const IMAGE_SIZE = 860;
	const SLIDE_RANGE = currentIndex * IMAGE_SIZE;

	useEffect(() => {
		slideRef.current.style.transition = "all 0.5s ease-in-out";
		slideRef.current.style.transform = `translateX(-${SLIDE_RANGE}px)`;
	}, [currentIndex]);

	return (
		<S.BannerWrapper>
			<S.BannerContainer ref={slideRef}>
				{ImageArr.map(image => (
					<S.BannerImg src={image} />
				))}
			</S.BannerContainer>
			<S.BannerButtons>
				<BsFillCircleFill
					size="15"
					color="white"
					onClick={() => setCurrentIndex(0)}
				/>
				<BsFillCircleFill
					size="15"
					color="white"
					onClick={() => setCurrentIndex(1)}
				/>
				<BsFillCircleFill
					size="15"
					color="white"
					onClick={() => setCurrentIndex(2)}
				/>
			</S.BannerButtons>
		</S.BannerWrapper>
	);
};

export default Banner;

const BannerWrapper = styled.div`
	width: 860px;
	margin: 50px auto;
	position: relative;
	overflow: hidden;
`;

const BannerContainer = styled.div`
	width: 860px;
	display: flex;
`;

const BannerImg = styled.img`
	width: 860px;
	height: 350px;
	border: 3px solid black;
	border-radius: 20px;
	margin-right: 5px;
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
