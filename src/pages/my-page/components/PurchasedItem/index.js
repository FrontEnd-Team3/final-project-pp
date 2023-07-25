import BasicSelect from "components/Select";
import { productList } from "mocks/data/productsList";
import styled from "styled-components";
import { flexColumn, flexRow } from "styles/common";
import EmptyData from "../EmptyData";
import PurchasedButtons from "./PurchasedButtons";

/**
 *
 * 호버시 쉐도우 주는거 적용해야함
 *
 */

const PurchasedItem = () => {
	const ProductListStatusEndUser1 = productList?.filter(
		productEnd => productEnd.status === "판매완료" && productEnd.user === 1,
	);
	const options = [
		{ value: "중고거래", label: "중고거래" },
		{ value: "무료나눔", label: "무료나눔" },
	];
	console.log(productList);
	if (productList && productList.length > 0) {
		return (
			<S.Container>
				<S.RowBox>
					<S.Title>구매 물품</S.Title>
					<S.ToggleBox>
						<BasicSelect
							variant={"primary"}
							options={options}
							selectedValue={"중고거래"}
							style={{ border: "1px solid #dddddd" }}
						/>
					</S.ToggleBox>
				</S.RowBox>
				<Wrapper>
					{ProductListStatusEndUser1.map(product => (
						<S.ProductContainer key={product.id}>
							<p>{product.name}</p>
							<S.RowBox>
								<p>{product.location}</p>
								<p>{product.price}원</p>
							</S.RowBox>
							<DivisionLine2 />
							<S.RowBox>
								<img src={product.image[2]} />
								<PurchasedButtons />
							</S.RowBox>
						</S.ProductContainer>
					))}
				</Wrapper>
			</S.Container>
		);
	} else {
		<EmptyData />;
	}
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

const ToggleBox = styled.div`
	margin-top: 50px;
	margin-right: 16px;
	width: 105px;
	height: 32px;
`;

const S = {
	DivisionLine,
	Title,
	Container,
	ProductContainer,
	RowBox,
	ToggleBox,
};
