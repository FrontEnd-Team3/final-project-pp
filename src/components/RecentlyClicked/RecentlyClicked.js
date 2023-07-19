import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { primaryFont } from "styles/common";
import { GoBookmark } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useRecentlyClicked from "hooks/useRecentlyClicked";
import { productList } from "mock/productsList";
import { useNavigate } from "react-router-dom";

const RecentlyClicked = () => {
	// 추후 API로 데이터 들어오면 수정
	const [likes, setLikes] = useState(0);

	// 이미지 배열
	// localStorage에서 최근 본 상품 가져오기
	const recentlyClicked = useRecentlyClicked();

	// 최근 본 상품 배열에 들어있는 id 값과 일치하는 상품의 이미지 가져오기
	// localstorage에는 id가 문자열로 들어가므로 빈 문자열 더해서 검사
	const ImageArr = productList
		.filter(product => recentlyClicked.includes(product.id + ""))
		.map(product => product.image[0]);
	// console.log("최근 본 상품", ImageArr);

	// 각 이미지 클릭 시 해당 상품 상세 페이지로 이동
	const navigate = useNavigate();

	// 슬라이드 구현
	const slideRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const IMAGE_SIZE = 115;
	const SLIDE_RANGE = currentIndex * IMAGE_SIZE;

	const handleDownSlideIndex = () => {
		if (currentIndex === InfiniteArr.length - 1) {
			slideRef.current.style.transition = "";
			setCurrentIndex(1);
			setTimeout(() => {
				if (slideRef.current) {
					slideRef.current.style.transition = "all 0.5s ease-in-out";
				}
			}, 0);
		} else {
			slideRef.current.style.transition = "all 0.5s ease-in-out";
			setCurrentIndex(prev => prev + 1);
		}
	};

	const handleUpSlideIndex = () => {
		if (currentIndex === 0) {
			slideRef.current.style.transition = "";
			setCurrentIndex(InfiniteArr.length - 2);
			setTimeout(() => {
				if (slideRef.current) {
					slideRef.current.style.transition = "all 0.5s ease-in-out";
				}
			}, 0);
		} else {
			slideRef.current.style.transition = "all 0.5s ease-in-out";
			setCurrentIndex(prev => prev - 1);
		}
	};

	// 무한 슬라이드
	const firstElement = ImageArr[ImageArr.length - 1];
	const lastElement = ImageArr[0];
	const InfiniteArr = [firstElement, ...ImageArr, lastElement];

	useEffect(() => {
		slideRef.current.style.transform = `translateY(-${SLIDE_RANGE}px)`;
	}, [currentIndex]);

	// Scroll to Top
	const [scrollY, setScrollY] = useState(0);
	// console.log("Y", scrollY);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		setScrollY(0);
	};

	return (
		<S.Container>
			<S.Top>
				찜한 상품 <GoBookmark color="white" size="22" /> {likes}
			</S.Top>
			<S.Middle>
				<div className="title">최근 본 상품</div>
				<IoIosArrowUp size="30" onClick={handleUpSlideIndex} />
				<S.SlideWrapper>
					<S.SlideContainer ref={slideRef} length={InfiniteArr.length}>
						{InfiniteArr.length ? (
							<>
								<li>
									{InfiniteArr.map((image, i) => (
										<SlideImage
											src={image}
											key={i}
											onClick={() =>
												navigate(
													`/product/${
														productList.find(
															product => product.image[0] === image,
														).id
													}`,
												)
											}
										/>
									))}
								</li>
							</>
						) : (
							<S.Empty>...없어욤</S.Empty>
						)}
					</S.SlideContainer>
				</S.SlideWrapper>
				<IoIosArrowDown size="30" onClick={handleDownSlideIndex} />
			</S.Middle>
			<S.Bottom onClick={handleScrollToTop}>TOP</S.Bottom>
		</S.Container>
	);
};

export default RecentlyClicked;

const Container = styled.div`
	z-index: 100;
	width: 152.5px;
	height: 345px;
	border: 1px solid;
	border-color: ${({ theme }) => theme.PALETTE.primary};
	position: fixed;
	top: 250px;
	left: 90%;
	${primaryFont}
	text-align: center;
	font-size: 18px;
	background-color: ${({ theme }) => theme.PALETTE.white};
`;

const Top = styled.div`
	display: inline-block;
	vertical-align: middle;
	padding: 0 15px;
	height: 52px;
	background-color: ${({ theme }) => theme.PALETTE.primary};
	color: ${({ theme }) => theme.PALETTE.white};
	font-weight: 400;
	line-height: 52px;
	.heart {
		font-size: 17px;
		font-weight: 700;
	}
	border-bottom: 3px solid;

	svg {
		vertical-align: middle;
	}
`;

const Middle = styled.div`
	height: 242px;
	padding: 20px 0;
	.title {
		margin-bottom: 10px;
	}
	button {
		border: none;
		background-color: transparent;
		font-size: 25px;
		display: block;
	}
`;

const SlideWrapper = styled.div`
	overflow: hidden;
	height: 110px;
`;

const SlideContainer = styled.ul`
	width: 100%;
	height: 100%;
`;

const SlideImage = styled.img`
	width: 110px;
	height: 110px;
`;

const Empty = styled.li`
	width: 110px;
	height: 110px;
	line-height: 110px;
	color: ${({ theme }) => theme.PALETTE.gray};
`;

const Bottom = styled.div`
	height: 45px;
	border-top: 1px solid;
	border-color: ${({ theme }) => theme.PALETTE.primary};
	line-height: 45px;
	cursor: pointer;
`;

const S = {
	Container,
	Top,
	Middle,
	SlideWrapper,
	SlideContainer,
	SlideImage,
	Empty,
	Bottom,
};
