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
	const [windowWidth, setWindowWidth] = useState(window.innerWidth); // 화면 너비 상태 추가

	useEffect(() => {
		// 창 크기 변경 감지
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// IMAGE_SIZE 계산
	const IMAGE_SIZE = windowWidth; // 화면 너비에 맞게 IMAGE_SIZE 계산
	const SLIDE_RANGE = currentIndex * IMAGE_SIZE;

	useEffect(() => {
		slideRef.current.style.transition = "all 0.5s ease-in-out";
		slideRef.current.style.transform = `translateX(-${SLIDE_RANGE}px)`;
	}, [currentIndex, IMAGE_SIZE]);

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
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: block;
		max-width: 750px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		display: block;
		max-width: 560px;
	}
`;

const BannerContainer = styled.div`
	width: 860px;
	position: relative;
	display: flex;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: none;
	}
`;

const BannerImg = styled.img`
	/* width: 1060px;
	height: 428px;
	margin-right: 5px; */
	width: 100%;
	height: auto;
	max-height: 428px;
	margin-right: 5px;
`;

const BannerButtons = styled.div`
	/* width: 80px;
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 90%;
	left: 45%;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: none;
	} */
	width: 80px;
	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 90%; /* 화면 하단으로부터의 거리 비율로 조절 */
	/* left: 50%; 화면 가운데로부터의 거리 고정 */
	transform: translateX(-50%); // 가운데 정렬을 위한 transform
`;

const StaticImg = styled.img`
	display: none;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: block;
		max-width: 750px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		display: block;
		max-width: 560px;
	}
`;

const S = {
	BannerWrapper,
	BannerContainer,
	BannerImg,
	BannerButtons,
	StaticImg,
};
