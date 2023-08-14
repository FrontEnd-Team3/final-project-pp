import BasicButton from "components/Button";
import styled from "styled-components";
import { flexCenter, flexColumn, flexRow } from "styles/common";
import UserQueryApi from "apis/user.query.api";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StatusEndProductList from "./StatusEndProductList";
import EmptyData from "../EmptyData";
import MyPageSelect from "../MyPageSelect";

const RegisterProduct = () => {
	const [selectedStatus, setSelectedStatus] = useState("전체");
	const [selectedProductStatus, setSelectedProductStatus] =
		useState("중고물품");
	const [searchParams] = useSearchParams();
	const category = searchParams.get("category") || 0; // 기본값을 0으로 설정
	const page = searchParams.get("page") || 1;

	const { data: productData } = UserQueryApi.PurchasedProductList({
		page,
		category,
	});
	const productList = productData?.products;
	console.log("ProductList", productList);

	const { data: freeProductData } = UserQueryApi.PurchasedProductList({
		page,
		category: 1,
	});
	const freeproductList = freeProductData?.products;
	console.log("freeproductList", freeproductList);

	const productPagination = productData?.pagination;

	// const sellingProducts =
	// 	productList?.filter(product => product.status === "판매중") || []; // <-- 기본값을 빈 배열로 설정
	// const soldProducts =
	// 	productList?.filter(product => product.status === "판매완료") || []; // <-- 기본값을 빈 배열로 설정

	// const sellingFreeProducts =
	// 	freeproductList?.filter(product => product.status === "판매중") || []; // <-- 기본값을 빈 배열로 설정
	// const soldFreeProducts =
	// 	freeproductList?.filter(product => product.status === "판매완료") || []; // <-- 기본값을 빈 배열로 설정

	const filterProductsByStatus = (productList, status) => {
		return productList?.filter(product => product.status === status) || [];
	};

	const sellingProducts = filterProductsByStatus(productList, "판매중");
	const soldProducts = filterProductsByStatus(productList, "판매완료");
	const sellingFreeProducts = filterProductsByStatus(freeproductList, "판매중");
	const soldFreeProducts = filterProductsByStatus(freeproductList, "판매완료");

	console.log("sellingFreeProducts", sellingFreeProducts);
	console.log("soldFreeProducts", soldFreeProducts);

	useEffect(() => {
		// Whenever selectedStatus changes, you might want to fetch data again.
		// You can make API call here if needed.
	}, [selectedStatus]);

	const displayedProducts =
		selectedStatus === "전체"
			? [...sellingProducts, ...soldProducts]
			: productList?.filter(product => product.status === selectedStatus);

	const displayedFreeProducts =
		selectedStatus === "전체"
			? [...sellingFreeProducts, ...soldFreeProducts]
			: productList?.filter(product => product.status === selectedStatus);

	console.log("displayedProducts", displayedProducts);

	// const { curPage, startPage, endPage, totalPage, count } = productPagination;

	const stateOptions = [
		{ value: "전체", label: "전체" },
		{ value: "판매중", label: "판매중" },
		{ value: "판매완료", label: "판매완료" },
	];

	const productOptions = [
		{ value: "중고물품", label: "중고물품" },
		{ value: "무료나눔", label: "무료나눔" },
	];

	const [dataLimit, setDataLimit] = useState(8);
	const [pageState, setPageState] = useState(1);
	const offset = (pageState - 1) * dataLimit;

	if (!productList || productList.length === 0) {
		return <EmptyData text={"등록된 상품이 없습니다."} />;
	} else {
		return (
			<>
				<S.Container>
					<S.RowBox>
						<S.Title>등록 상품</S.Title>
						<S.ToggleBox>
							<MyPageSelect
								variant={"primary"}
								options={stateOptions}
								selectedStatus={selectedStatus}
								setSelectedStatus={setSelectedStatus}
								style={{ border: "1px solid #dddddd" }}
							/>
							<MyPageSelect
								variant={"primary"}
								options={productOptions}
								selectedStatus={selectedProductStatus}
								setSelectedStatus={setSelectedProductStatus}
								style={{ border: "1px solid #dddddd" }}
							/>
						</S.ToggleBox>
					</S.RowBox>
					{displayedProducts.map(product =>
						product.status === "판매완료" ? (
							<StatusEndProductList product={product} />
						) : (
							<S.ProductContainer key={product.idx}>
								<img src={product.img_url} />
								<S.MasterWrapper>
									<S.Wrapper>
										<p>{product.title}</p>
										<div>
											<BasicButton
												color={"white"}
												size={"xsmall"}
												children={"수정"}
												// onClick={() => {
												//     navigate("/productRegister");
												// }}
												style={{
													fontSize: "14px",
													height: "28px",
													borderRadius: "6px",
													fontWeight: "600",
													border: "1px solid #dddddd",
												}}
											/>
											<BasicButton
												color={"primary"}
												size={"xsmall"}
												children={"삭제"}
												style={{
													fontSize: "14px",
													height: "28px",
													borderRadius: "6px",
													fontWeight: "600",
													marginLeft: "10px",
												}}
											/>
										</div>
									</S.Wrapper>
									<S.Wrapper2>
										<S.Wrapper3>
											<div>{product.status}</div>
										</S.Wrapper3>
										<S.Price>{product.price}</S.Price>
										<S.PriceText>won</S.PriceText>
									</S.Wrapper2>
								</S.MasterWrapper>
								<TextBox2>
									<p>상품 보러가기 〉</p>
								</TextBox2>
							</S.ProductContainer>
						),
					)}
				</S.Container>
			</>
		);
	}
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
	}
`;

const Title = styled.div`
	margin-top: 50px;
	font-size: 40px;
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
`;

const Wrapper2 = styled.div`
	${flexRow}
	width: 660px;
	margin-top: 16px;
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
`;

const Price = styled.p`
	font-size: 26px;
	font-weight: 600;
`;

const PriceText = styled.p`
	font-size: 20px;
	margin-left: 10px;
`;

const RowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${flexRow}
`;

const TextBox2 = styled.div`
	position: absolute;
	left: 825px;
	top: 214px;
`;

const ToggleBox = styled.div`
	${flexRow}
	margin-top: 50px;
	margin-right: 16px;
	width: 105px;
	height: 32px;
`;

const ToggleBox2 = styled.div`
	width: 105px;
	height: 32px;
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
	ToggleBox2,
};
