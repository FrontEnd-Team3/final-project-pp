import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import RecentlyClicked from "components/RecentlyClicked";
import ErrorPage from "pages/error-page";
import Loading from "components/Loading";
import ProductQueryApi from "apis/product.query.api";
import ProductInfo from "./components/ProductInfo";

const ProductDetailPage = () => {
	const { id } = useParams();

	const { data, isLoading, isError } = ProductQueryApi.getProductDetail(id);
	console.log("상품상세", data);

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <ErrorPage />;
	}

	return (
		<>
			<RecentlyClicked />
			<S.Container>
				<ProductInfo product={data} />
				{/* <OtherProducts list={data?.relatedProduct} /> */}
			</S.Container>
		</>
	);
};

export default ProductDetailPage;

const Container = styled.div`
	width: 1060px;
	margin: 0 auto;
	padding: 20px 0;
`;

const S = {
	Container,
};
