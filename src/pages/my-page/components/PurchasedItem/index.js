import styled from "styled-components";
import { flexColumn, flexRow } from "styles/common";
import EmptyData from "../EmptyData";
import PurchasedButtons from "./PurchasedButtons";
import UserQueryApi from "apis/user.query.api";
import { useEffect, useState } from "react";
import Review from "../Review";
import BasicButton from "components/Button";
import ReviewDetail from "./ReviewDetail";

/**
 *
 * 호버시 쉐도우 주는거 적용해야함
 *
 */

const PurchasedItem = () => {
	const page = 1;
	const [openReview, setOpenReview] = useState(false);
	const [productIndex, setProductIndex] = useState("");
	const [openOnReview, setOpenOnReview] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const { data: PayProductData } = UserQueryApi?.PayProductList({
		page,
	});

	const PayProductList = PayProductData?.reviewList;

	const handleReviewOn = () => {
		setOpenOnReview(true);
		setOpenReview(false);
		setTimeout(() => {
			window.scrollTo(0, 560);
		}, 0);
	};

	const formatNumber = num => {
		return Number(num).toLocaleString("ko-KR");
	};

	return (
		<S.Container>
			{openReview ? (
				<Review productIndex={productIndex} reviewData={PayProductList} />
			) : null}
			{openOnReview ? (
				<ReviewDetail productIndex={productIndex} reviewData={PayProductList} />
			) : null}
			<S.RowBox>
				<S.Title>구매 물품</S.Title>
			</S.RowBox>
			<Wrapper>
				{!PayProductList || PayProductList?.length === 0 ? (
					<EmptyData
						text={"등록된 상품이 없습니다."}
						productIndex={productIndex}
					/>
				) : (
					PayProductList?.map(product => (
						<S.ProductContainer
							key={product?.Product.idx}
							onClick={() => {
								setProductIndex(product?.Product.idx);
							}}
						>
							<p>{product?.Product.title}</p>

							<S.RowBox>
								<p>{product?.Product.region}</p>
								<p>{formatNumber(product?.Product.price)}원</p>
							</S.RowBox>
							<DivisionLine2 />
							<S.RowBox>
								<img src={product?.Product.img_url} />
								{product?.Review?.idx ? (
									<BasicButton
										color={"white"}
										size={"xmedium"}
										children={"리뷰 보러가기"}
										style={{
											width: "124px",
											border: "1px solid #dddddd",
											fontSize: "16px",
											borderRadius: "6px",
											fontWeight: "500",
										}}
										onClick={handleReviewOn}
									/>
								) : (
									<PurchasedButtons
										openReview={openReview}
										setOpenReview={setOpenReview}
										reviewExists={!!product.Review}
										poductIdx={product.Product.idx}
										setOpenOnReview={setOpenOnReview}
									/>
								)}
							</S.RowBox>
						</S.ProductContainer>
					))
				)}
			</Wrapper>
		</S.Container>
	);
};
export default PurchasedItem;

const DivisionLine = styled.hr`
	width: 962px;
	height: 1px;
	background-color: #cccccc;
	margin-top: 30px;
`;

const DivisionLine2 = styled.hr`
	width: 390px;
	height: 1px;
	background-color: black;
	margin-top: 10px;
	margin-bottom: 32px;
`;

const Container = styled.div`
	width: 962px;
	margin: 0 auto;
	padding: 20px 0;
	display: flex;
	${flexColumn}
	margin-bottom: 150px
`;
const Wrapper = styled.div`
	${flexRow}
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const ProductContainer = styled.div`
	padding: 50px 30px 30px 30px;
	margin-top: 30px;
	width: 460px;
	height: 270px;
	border: 1px solid #b6b6b6;
	border-radius: 12px;
	${flexColumn}
	img {
		width: 95px;
		height: 95px;
		border-radius: 50%;
		overflow: hidden;
		border: 0.5px solid #b6b6b6;
	}
`;

const Title = styled.div`
	margin-top: 50px;
	font-size: 24px;
	font-weight: bold;
	color: black;
`;

const RowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${flexRow}
`;

const S = {
	DivisionLine,
	Title,
	Container,
	ProductContainer,
	RowBox,
};
