import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import styled from "styled-components";
import RecentlyClicked from "components/RecentlyClicked";
import ProductInfo from "./components/ProductInfo";
import OtherProducts from "./components/OtherProducts";
import ErrorPage from "pages/error-page";
import Loading from "components/Loading";

const ProductDetailPage = () => {
	const { id } = useParams();

	const { data, isLoading, isError } = useQuery({
		queryKey: ["productDetail", id],
		queryFn: async () => {
			try {
				const response = await axios.get(`/api/product/detail?prod_idx=${id}`);
				return response.data;
			} catch (error) {
				throw new Error("제품을 가져오지 못했어요.");
			}
		},
	});

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
	width: 1060px;
	margin: 0 auto;
	padding: 20px 0;
`;

const S = {
	Container,
};
