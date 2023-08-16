import styled from "styled-components";
import { flexCenter, flexColumn, flexRow } from "styles/common";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EmptyData from "../EmptyData";
import { useSearchParams } from "react-router-dom";
import MyPageSelect from "../MyPageSelect";
import StatusEndProductList from "../RegisterProducts/StatusEndProductList";
import UserQueryApi from "apis/user.query.api";

const RegisterProduct = () => {
	const navigate = useNavigate();

	const [searchParams, setSearhParams] = useSearchParams();
	const [displayedProducts, setDisplayProducts] = useState([]);
	const [statusProduct, setStatusProduct] = useState(null);

	const page = searchParams.get("page") || 1;
	// const status = searchParams.get("status") || "판매중";

	const [selectedStatus, setSelectedStatus] = useState("전체");
	const [selectedProductStatus, setSelectedProductStatus] =
		useState("중고물품");

	const { data: LikeProductData } = UserQueryApi.LikeProductList({
		page,
	});
	const likeProductList = LikeProductData?.LikeList;
	console.log("likeProductList", likeProductList);

	useEffect(() => {
		setDisplayProducts(likeProductList || []);
	}, [likeProductList]);

	const handleProductDisplay = value => {
		if (value === "무료나눔") {
			setSelectedStatus("전체");
			const filteredProducts = likeProductList?.filter(
				product => product.Product.price === 0,
			);
			setDisplayProducts(filteredProducts);
		}
		if (value === "중고물품") {
			setSelectedStatus("전체");
			const filteredProducts = likeProductList?.filter(
				product => product.Product.price > 0,
			);
			setDisplayProducts(filteredProducts);
		}
	};

	const handleProductStateDisplay = value => {
		if (value === "판매중") {
			const filteredProducts = likeProductList?.filter(
				product => product.Product.status === "판매중",
			);
			setDisplayProducts(filteredProducts);
		}
		if (value === "판매완료") {
			const filteredProducts = likeProductList?.filter(
				product => product.Product.status === "판매완료",
			);
			setDisplayProducts(filteredProducts);
		}
		if (value === "전체") {
			setDisplayProducts(likeProductList);
		}
	};

	// const displayedProducts =
	// 	selectedStatus === "전체"
	// 		? [...sellingProducts, ...soldProducts]
	// 		: likeProductList?.filter(
	// 				product => product.Product.status === selectedStatus,
	// 		  );

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

	// const [dataLimit, setDataLimit] = useState(8);
	// const [pageState, setPageState] = useState(1);
	// const offset = (pageState - 1) * dataLimit;

	return (
		<>
			<S.Container>
				<S.RowBox>
					<S.Title>관심 상품</S.Title>
					<S.ToggleBox>
						<div>
							<MyPageSelect
								variant={"primary"}
								options={stateOptions}
								selectedStatus={selectedStatus}
								setSelectedStatus={value => {
									setSelectedStatus(value);
									handleProductStateDisplay(value);
								}}
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
									handleProductDisplay(value);
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
						product.Product.status === "판매완료" ? (
							<StatusEndProductList product={product.Product} />
						) : (
							<S.ProductContainer key={product.Product.idx}>
								<img src={product.Product.img_url} />
								<S.MasterWrapper>
									<S.Wrapper>
										<p>{product.Product.title}</p>
									</S.Wrapper>
									<S.Wrapper2>
										<S.Wrapper3>
											<div>{product.Product.status}</div>
										</S.Wrapper3>
										<S.Price>{product.Product.price}</S.Price>
										<S.PriceText>won</S.PriceText>
									</S.Wrapper2>
								</S.MasterWrapper>
								<TextBox2>
									<p
										onClick={() => navigate(`/product/${product.Product.idx}`)}
									>
										상품 보러가기 〉
									</p>
								</TextBox2>
							</S.ProductContainer>
						),
					)
				)}
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
	cursor: pointer;
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
