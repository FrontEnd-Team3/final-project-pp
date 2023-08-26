import styled from "styled-components";
import { flexCenter, flexColumn, flexRow } from "styles/common";
import UserQueryApi from "apis/user.query.api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StatusEndProductList from "./StatusEndProductList";
import EmptyData from "../EmptyData";
import MyPageSelect from "../MyPageSelect";
import { useParams } from "react-router-dom";
import Pagination from "components/Pagination";

const RegisterProduct = () => {
	const navigate = useNavigate();
	const { category } = useParams();
	// const [searchParams, setSearchParams] = useSearchParams();
	// const category = searchParams.get("category");
	const [categoryState, setCategory] = useState(category);
	const [page, setPage] = useState(1);

	const [selectedStatus, setSelectedStatus] = useState("전체");
	const [selectedProductStatus, setSelectedProductStatus] =
		useState("중고물품");

	const { data: productData } = UserQueryApi.PurchasedProductList({
		page,
		category: categoryState,
	});

	const productList = productData?.products;
	const productPagination = productData?.pagination;
	const count = productPagination?.count;
	const size = productPagination?.page_size;

	const sellingProducts =
		productList?.filter(product => product.status === "판매중") || []; // <-- 기본값을 빈 배열로 설정
	const soldProducts =
		productList?.filter(product => product.status === "판매완료") || []; // <-- 기본값을 빈 배열로 설정

	useEffect(() => {
		setCategory(category);
	}, [category]);

	const displayedProducts =
		selectedStatus === "전체"
			? [...sellingProducts, ...soldProducts]
			: productList?.filter(product => product.status === selectedStatus);

	const stateOptions = [
		{ value: "전체", label: "전체" },
		{ value: "판매중", label: "판매중" },
		{ value: "판매완료", label: "판매완료" },
	];

	const productOptions = [
		{ value: "중고물품", label: "중고물품" },
		{ value: "무료나눔", label: "무료나눔" },
	];

	// const [dataLimit, setDataLimit] = useState(8);
	// const [pageState, setPageState] = useState(1);
	// const offset = (pageState - 1) * dataLimit;

	const formatNumber = num => {
		return Number(num).toLocaleString("ko-KR");
	};

	if (productList)
		return (
			<>
				<S.Container>
					<S.RowBox>
						<S.Title>등록 상품</S.Title>
						<S.ToggleBox>
							<div>
								<MyPageSelect
									variant={"primary"}
									options={stateOptions}
									selectedStatus={selectedStatus}
									setSelectedStatus={setSelectedStatus}
									style={{ border: "1px solid #dddddd" }}
								/>
							</div>
							<div>
								<MyPageSelect
									variant={"primary"}
									options={productOptions}
									selectedStatus={selectedProductStatus}
									setSelectedStatus={value => {
										setSelectedProductStatus(value);
										if (value === "무료나눔") {
											navigate("/mypage/1");
										} else {
											navigate("/mypage/0");
										}
									}}
									style={{ border: "1px solid #dddddd" }}
								/>
							</div>
						</S.ToggleBox>
					</S.RowBox>
					{!displayedProducts || displayedProducts.length === 0 ? (
						<EmptyData text={"등록된 상품이 없습니다."} />
					) : (
						displayedProducts.map(product =>
							product.status === "판매완료" ? (
								<StatusEndProductList
									product={product}
									formatNumber={formatNumber}
								/>
							) : (
								<S.ProductContainer key={product.idx}>
									<img src={product.img_url} />
									<S.MasterWrapper>
										<S.Wrapper>
											<p>{product.title}</p>
										</S.Wrapper>
										<S.Wrapper2>
											<S.Wrapper3>
												<div>{product.status}</div>
											</S.Wrapper3>
											<S.Price>{formatNumber(product.price)}</S.Price>
											<S.PriceText>won</S.PriceText>
										</S.Wrapper2>
									</S.MasterWrapper>
									<TextBox2>
										<p onClick={() => navigate(`/product/${product.idx}`)}>
											상품 보러가기 〉
										</p>
									</TextBox2>
								</S.ProductContainer>
							),
						)
					)}
					<Pagination
						totalData={productData?.pagination?.count}
						dataLimit={productData?.pagination?.page_size}
						page={parseInt(page)}
						setPage={setPage}
					/>
				</S.Container>
			</>
		);
};
export default RegisterProduct;

// Styles
const DivisionLine = styled.hr`
	width: 962px;
	height: 1px;
	background-color: #cccccc;
	margin-top: 30px;
`;

const Container = styled.div`
	width: 962px;
	margin: 0 auto;
	padding: 20px 0;
	display: flex;
	${flexColumn}
	${flexCenter}
	transition: padding width 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 0 40px;
		width: 1000px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		padding: 0 60px;
		width: 700px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		padding: 0 80px;
		width: 450px;
	}
`;

const ProductContainer = styled.div`
	padding: 35px;
	margin-top: 30px;
	width: 962px;
	height: 270px;
	border: 1px solid #b6b6b6;
	border-radius: 6px;
	position: relative;
	${flexRow}
	img {
		width: 200px;
		height: 200px;
		border-radius: 6px;
		overflow: hidden;
		transition: overflow 0.3s;
		@media ${({ theme }) => theme.DEVICE.pc} {
		}
		@media ${({ theme }) => theme.DEVICE.tablet} {
			overflow: inherit;
		}
		@media ${({ theme }) => theme.DEVICE.mobile} {
			overflow: inherit;
			width: 150px;
			height: 150px;
		}
	}

	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		width: 1000px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 600px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 450px;
	}
`;

const Title = styled.div`
	margin-top: 50px;
	font-size: 24px;
	font-weight: bold;
	color: black;
`;

const MasterWrapper = styled.div`
	${flexColumn};
	margin-left: 30px;
`;

const Wrapper = styled.div`
	${flexRow}
	display: flex;
	justify-content: space-between;
	width: 660px;
	p {
		font-size: 18px;
	}
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: auto;
	}
`;

const Wrapper2 = styled.div`
	${flexRow}
	width: 660px;
	margin-top: 16px;
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: auto;
		flex-wrap: wrap;
	}
`;

const Wrapper3 = styled.div`
	${flexRow}
	align-items:center;
	width: 105px;
	height: 40px;
	justify-content: center;
	border: 1px solid rgb(221, 221, 221);
	border-radius: 4px;
	margin-right: 30px;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-right: 100px;
		width: 90px;
		height: 35px;
		font-size: 14px;
	}
`;

const Price = styled.p`
	font-size: 26px;
	font-weight: 600;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-top: 20px;
	}
`;

const PriceText = styled.p`
	font-size: 20px;
	margin-left: 10px;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-top: 20px;
	}
`;

const RowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${flexRow}
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 600px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 400px;
	}
`;

const TextBox2 = styled.div`
	position: absolute;
	left: 825px;
	top: 214px;
	cursor: pointer;
	transition: left top 0.3s;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		left: 470px;
		top: 214px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		left: 340px;
		top: 214px;
		font-size: 14px;
	}
`;

const ToggleBox = styled.div`
	${flexRow}
	margin-top: 50px;
	margin-right: 150px;
	width: 105px;
	height: 32px;
	div {
		margin-right: 4px;
	}
	transition: margin-right margin-bottom 0.2s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		margin-right: 150px;
		margin-bottom: 30px;
	}
`;

const S = {
	Price,
	PriceText,
	DivisionLine,
	Title,
	MasterWrapper,
	Container,
	ProductContainer,
	Wrapper,
	Wrapper2,
	Wrapper3,
	RowBox,
	ToggleBox,
};
