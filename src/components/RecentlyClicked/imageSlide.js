import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useRecentlyClicked from "hooks/useRecentlyClicked";
import { productList } from "mocks/data/products/productsList";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ImageSlide = () => {
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
		if (!recentlyClicked.length || recentlyClicked.length === 1) return;
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
		if (!recentlyClicked.length || recentlyClicked.length === 1) return;
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

	return (
		<>
			<IoIosArrowUp size="30" onClick={handleUpSlideIndex} />
			<S.SlideWrapper>
				<S.SlideContainer ref={slideRef} length={InfiniteArr.length}>
					{recentlyClicked.length ? (
						<>
							<li>
								{InfiniteArr.map((image, i) => (
									<S.SlideImage
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
		</>
	);
};

export default ImageSlide;

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
	cursor: pointer;
`;

const Empty = styled.div`
	width: 100%;
	height: 110px;
	line-height: 110px;
	color: ${({ theme }) => theme.PALETTE.gray};
	margin-right: 0;
`;

const S = { SlideWrapper, SlideContainer, SlideImage, Empty };
