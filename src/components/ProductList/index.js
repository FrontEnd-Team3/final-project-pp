import styled from "styled-components";
import OneProduct from "./one-product";
import { productList } from "mock/products";
import { useState } from "react";

const ProductList = () => {
	const [dataLimit, setDataLimit] = useState(8);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * dataLimit;

	if (productList)
		return (
			<S.Container>
				{productList.map((product, i) => (
					<OneProduct key={i} product={product} />
				))}
			</S.Container>
		);
};

export default ProductList;

const Container = styled.div`
	display: flex;
	width: 860px;
	margin: 20px auto;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 20px 0;
`;

const S = { Container };
