import styled from "styled-components";
import OneProduct from "./oneProduct";
import { useState } from "react";
import Pagination from "components/Pagination";
import TokenRepository from "repositories/TokenRepository";

const ProductList = ({ productList }) => {
	console.log("token", TokenRepository.getToken());
	console.log("관련상품", productList);
	const [dataLimit, setDataLimit] = useState(8);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * dataLimit;

	if (productList)
		return (
			<>
				<S.Container>
					{productList.slice(offset, offset + dataLimit).map((product, i) => (
						<OneProduct key={product.idx} product={product} grid={"box" + i} />
					))}
				</S.Container>
				<Pagination
					totalData={productList.length}
					dataLimit={dataLimit}
					page={page}
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
