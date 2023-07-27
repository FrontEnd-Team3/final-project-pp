import ProductList from "components/ProductList/withPagination";
import styled from "styled-components";

const OtherProducts = ({ list }) => {
	return (
		<>
			<S.OtherProductTitle>연관 상품 보러가기</S.OtherProductTitle>
			<ProductList productList={list} />
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
