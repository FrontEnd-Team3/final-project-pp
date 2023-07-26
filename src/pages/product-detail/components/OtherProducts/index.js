import ProductList from "components/ProductList/withPagination";
import { productList } from "mocks/data/products/productsList";
import styled from "styled-components";

const OtherProducts = ({ id }) => {
	const PRODUCTLIST = productList?.filter(
		product => product.status !== "판매완료" && product.id !== parseInt(id),
	);

	return (
		<>
			<S.OtherProductTitle>연관 상품 보러가기</S.OtherProductTitle>
			<ProductList productList={PRODUCTLIST} />
		</>
	);
};

export default OtherProducts;

const OtherProductTitle = styled.div`
	width: 260px;
	padding: 12px 10px;
	background-color: ${({ theme }) => theme.PALETTE.black};
	color: ${({ theme }) => theme.PALETTE.white};
	font-size: 20px;
	margin: 25px auto;
	text-align: center;
`;

const S = { OtherProductTitle };
