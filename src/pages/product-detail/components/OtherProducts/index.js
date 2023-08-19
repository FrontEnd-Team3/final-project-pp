import ProductListWithoutPagination from "components/ProductList/withoutPagination";
import styled from "styled-components";

const OtherProducts = ({ list }) => {
	return (
		<>
			<S.OtherProductTitle>연관 상품 보러가기</S.OtherProductTitle>
			<ProductListWithoutPagination productList={list} />
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
	@media ${({ theme }) => theme.DEVICE.pc} {
		margin: 25px 360px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin: 100px 144px;
	}
`;

const S = { OtherProductTitle };
