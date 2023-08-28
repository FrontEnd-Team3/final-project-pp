import styled from "styled-components";
import OneProduct from "./oneProduct";

const ProductListWithoutPagination = ({ productList }) => {
	if (productList) {
		const targetData = productList?.product
			? productList.product
			: productList.slice(0, 8);
		return (
			<>
				<S.Container>
					{targetData.map((product, i) => (
						<OneProduct key={product.idx} product={product} grid={"box" + i} />
					))}
				</S.Container>
			</>
		);
	}
};

export default ProductListWithoutPagination;

const Container = styled.div`
	margin-bottom: 70px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	grid-gap: 20px;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}
`;

const S = { Container };
