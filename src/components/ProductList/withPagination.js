import styled from "styled-components";
import OneProduct from "./oneProduct";
import Pagination from "components/Pagination";

const ProductList = ({ productList, pagination, page, setPage }) => {
	return (
		<>
			<S.Container>
				{productList.map((product, i) => (
					<OneProduct key={product.idx} product={product} grid={"box" + i} />
				))}
			</S.Container>
			<Pagination
				totalData={pagination.count}
				dataLimit={pagination.page_size}
				page={parseInt(page)}
				setPage={setPage}
			/>
		</>
	);
};

export default ProductList;

const Container = styled.div`
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
