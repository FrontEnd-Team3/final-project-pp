import styled from "styled-components";
import { flexCenter, flexColumn, flexRow } from "styles/common";
import EmptyData from "../EmptyData";
import PurchasedButtons from "./PurchasedButtons";
import UserQueryApi from "apis/user.query.api";
import { useEffect, useState } from "react";
import Review from "../Review";
import BasicButton from "components/Button";
import ReviewDetail from "./ReviewDetail";
import Pagination from "components/Pagination";

/**
 *
 * 호버시 쉐도우 주는거 적용해야함
 *
 */

const PurchasedItem = () => {
	const [page, setPage] = useState(1);
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
	if (PayProductData) {
		return (
			<S.Container>
				{openReview ? (
					<Review productIndex={productIndex} reviewData={PayProductList} />
				) : null}
				{openOnReview ? (
					<ReviewDetail
						productIndex={productIndex}
						reviewData={PayProductList}
					/>
				) : null}
				<S.Title>구매 물품</S.Title>
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
				<Pagination
					totalData={PayProductData?.pagination?.count}
					dataLimit={PayProductData?.pagination?.page_size}
					page={parseInt(page)}
					setPage={setPage}
				/>
			</S.Container>
		);
	}
};
export default PurchasedItem;

const DivisionLine = styled.hr`
	width: 962px;
	height: 1px;
	background-color: #cccccc;
	margin-top: 30px;
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: auto;
	}
`;

const DivisionLine2 = styled.hr`
	width: 390px;
	height: 1px;
	background-color: black;
	margin-top: 10px;
	margin-bottom: 32px;
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: auto;
	}
`;

const Container = styled.div`
	max-width: 962px;
	padding: 20px 0;
	margin: 0 auto;
	${flexColumn}
	transition: padding width 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		/* width: 1000px; */
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		/* width: 700px; */
		/* display: inline-block; */
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		/* padding: 0 80px;
		width: 450px; */
	}
`;
const Wrapper = styled.div`
	${flexRow}
	width:100%;
	${flexCenter}
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		${flexCenter}
	}
`;

const ProductContainer = styled.div`
	padding: 50px 30px 30px 30px;
	margin-top: 30px;
	margin: 0 auto;
	max-width: 430px;
	height: auto;
	margin-bottom: 40px;
	border: 1px solid #b6b6b6;
	border-radius: 12px;
	${flexColumn}
	justify-content:center;
	@media ${({ theme }) => theme.DEVICE.pc} {
		width: 100%;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 100%;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 100%;
		margin: 20px;
	}
	img {
		width: 95px;
		height: 95px;
		border-radius: 50%;
		overflow: hidden;
		border: 0.5px solid #b6b6b6;
	}
`;

const Title = styled.div`
	width: 100%;
	margin-top: 50px;
	font-size: 24px;
	font-weight: bold;
	color: black;
	padding: 20px 0px 20px 25.5px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		${flexCenter}
		padding:0 0 30px 0;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		${flexCenter}
		padding:0 0 30px 0;
	}
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
