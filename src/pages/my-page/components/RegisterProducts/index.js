import BasicButton from "components/Button";
import Pagination from "components/Pagination";
import BasicSelect from "components/Select";
import { productList } from "mocks/data/products/productsList";
import { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexColumn, flexRow } from "styles/common";
import EmptyData from "../EmptyData";
import StatusEndProductList from "./StatusEndProductList";
import { useNavigate, useParams } from "react-router-dom";

const RegisterProduct = () => {
	const sellingProducts = productList?.filter(
		product =>
			product.User &&
			product.User.nick_name === "aaa123" &&
			product.status === "판매중",
	);
	const soldProducts = productList?.filter(
		product =>
			product.User &&
			product.User.nick_name === "aaa123" &&
			product.status === "판매완료",
	);

	const allProducts = [...sellingProducts, ...soldProducts];
	const options = [
		{ value: "판매중", label: "판매중" },
		{ value: "거래중", label: "거래중" },
		{ value: "판매완료", label: "판매완료" },
	];
	const sideOptions = [
		{ value: "판매중", label: "판매중" },
		{ value: "거래중", label: "거래중" },
		{ value: "판매완료", label: "판매완료" },
	];

	const [dataLimit, setDataLimit] = useState(8);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * dataLimit;

	const { id } = useParams();

	const navigate = useNavigate();

	if (sellingProducts.length > 0 || soldProducts.length > 0) {
		return (
			<>
				<S.Container>
					<S.RowBox>
						<S.Title>등록 상품</S.Title>
						<S.ToggleBox>
							<BasicSelect
								variant={"primary"}
								options={options}
								selectedValue={"판매중"}
								style={{ border: "1px solid #dddddd" }}
							/>
						</S.ToggleBox>
					</S.RowBox>
					{allProducts.slice(offset, offset + dataLimit).map((product, i) => {
						return product.status === "판매완료" ? (
							<StatusEndProductList product={product} />
						) : (
							<S.ProductContainer key={product.idx}>
								<img src={product.img_url} />
								<div>
									<div>
										<S.Wrapper>
											<p>{product.title}</p>
											<div>
												<BasicButton
													color={"white"}
													size={"xsmall"}
													children={"수정"}
													onClick={() => {
														navigate("/productRegister");
													}}
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
											<S.ToggleBox2>
												<BasicSelect
													variant={"primary"}
													options={sideOptions}
													selectedValue={product.status}
													style={{ border: "1px solid #dddddd" }}
												/>
											</S.ToggleBox2>
											<S.Wrapper2>
												<p>{product.price}</p> <p>won</p>
											</S.Wrapper2>
										</S.Wrapper2>
									</div>
									<TextBox2>
										<p>상품 보러가기 〉</p>
									</TextBox2>
								</div>
							</S.ProductContainer>
						);
					})}
				</S.Container>
				<Pagination
					totalData={sellingProducts.length + soldProducts.length}
					dataLimit={dataLimit}
					page={page}
					setPage={setPage}
				/>
			</>
		);
	} else {
		return <EmptyData />;
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
	font-size: 24px;
	font-weight: bold;
	color: black;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	${flexRow}
	display: flex;
	justify-content: space-between;
	width: 660px;
`;

const Wrapper2 = styled.div`
	margin-left: 30px;
	${flexRow}
	width: 660px;
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
	DivisionLine,
	Title,
	Container,
	ProductContainer,
	Wrapper,
	Wrapper2,
	RowBox,
	ToggleBox,
	ToggleBox2,
};
