import { useEffect, useState } from "react";
import styled from "styled-components";
import ImageSlide from "./imageSlide";
import ScrollToTop from "./scrollToTop";
import ProductQueryApi from "apis/product.query.api";
import { useNavigate, useParams } from "react-router-dom";

const RecentlyClicked = () => {
	// 추후 API로 데이터 들어오면 수정
	const [likes, setLikes] = useState(0);
	const { id } = useParams();
	const navigate = useNavigate();

	const { data, error, refetch } = ProductQueryApi.getRecentlyViewedProducts();

	useEffect(() => {
		refetch();
	}, [id]);

	if (error) {
		window.location.reload();
		queryClient.refetchQueries(QueryKey.recentlyViewed);
	}

	if (data) {
		return (
			<S.Container>
				<S.Top onClick={() => navigate("/mypage/interest-product")}>
					관심 상품 보러가기
				</S.Top>
				<S.Middle>
					<div className="title">최근 본 상품</div>
					<ImageSlide productList={data?.productList} />
				</S.Middle>
				<ScrollToTop />
			</S.Container>
		);
	}
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
	@media screen and (max-width: 1340px) {
		display: none;
	}
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
	border-bottom: 3px solid;
	font-size: 14px;
	font-weight: bold;
	cursor: pointer;
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
