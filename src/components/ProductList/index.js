import styled from "styled-components";
import OneProduct from "./one-product";
import { useState } from "react";
import Pagination from "components/Pagination";

const ProductList = ({ productList }) => {
	const [dataLimit, setDataLimit] = useState(8);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * dataLimit;

	if (productList)
		return (
			<>
				<S.Container>
					{productList.slice(offset, offset + dataLimit).map(product => (
						<OneProduct key={product.id} product={product} />
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
	display: flex;
	width: 860px;
	margin: 20px auto;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 20px 0;
`;

const S = { Container };
