import { useState } from "react";
import styled from "styled-components";
import { GoBookmark } from "react-icons/go";
import ImageSlide from "./imageSlide";
import ScrollToTop from "./scrollToTop";

const RecentlyClicked = () => {
	// 추후 API로 데이터 들어오면 수정
	const [likes, setLikes] = useState(0);

	return (
		<S.Container>
			<S.Top>
				찜한 상품 <GoBookmark color="white" size="22" /> {likes}
			</S.Top>
			<S.Middle>
				<div className="title">최근 본 상품</div>
				<ImageSlide />
			</S.Middle>
			<ScrollToTop />
		</S.Container>
	);
};

export default RecentlyClicked;

const Container = styled.div`
	z-index: 100;
	width: 136px;
	height: 345px;
	border: 1px solid;
	border-color: ${({ theme }) => theme.PALETTE.primary};
	position: fixed;
	top: 250px;
	left: 90%;
	text-align: center;
	font-size: 16px;
	background-color: ${({ theme }) => theme.PALETTE.white};
`;

const Top = styled.div`
	width: 100%;
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
		font-weight: 500;
	}
	button {
		border: none;
		background-color: transparent;
		font-size: 25px;
		display: block;
	}
`;

const S = {
	Container,
	Top,
	Middle,
};
