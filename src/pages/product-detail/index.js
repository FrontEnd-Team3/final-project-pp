import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import RecentlyClicked from "components/RecentlyClicked";
import ErrorPage from "pages/error-page";
import Loading from "components/Loading";
import ProductQueryApi from "apis/product.query.api";
import ProductInfo from "./components/ProductInfo";
import OtherProducts from "./components/OtherProducts";
import ProductApi from "apis/product.api";

const ProductDetailPage = () => {
	const { id } = useParams();

	const { data, isLoading, isError, refetch } =
		ProductQueryApi.getProductDetail(id);

	useEffect(() => {
		refetch();
		ProductApi.addRecentlyViewedProducts({ prod_idx: parseInt(id) });
	}, []);

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
				<OtherProducts list={data?.relatedProduct} />
			</S.Container>
		</>
	);
};

export default ProductDetailPage;

const Container = styled.div`
	max-width: 1060px;
	margin: 0 auto;
	padding: 20px 0;
	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 0 20px;
	}
`;

const S = {
	Container,
};
