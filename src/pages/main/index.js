import React from "react";
import Banner from "./components/Banner";
import Slogan from "./components/Slogan";
import styled from "styled-components";
import RecentlyClicked from "components/RecentlyClicked";
import { useQueryClient } from "react-query";
import Products from "./components/Products";
import QueryKey from "consts/queryKey";
import ProductQueryApi from "apis/product.query.api";
import Loading from "components/Loading";

const Main = () => {
	const queryClient = useQueryClient();

	const { data, isLoading, error } = ProductQueryApi.getProductList();

	if (isLoading) return <Loading />;

	if (error) {
		window.location.reload();
		queryClient.refetchQueries(QueryKey.productData);
	}

	return (
		<>
			<Banner />
			<Slogan />
			<Products
				list={data?.usedProduct}
				title={"중고"}
				route={"/used-transaction"}
			/>
			<S.DivisionLine />
			<Products
				list={data?.freeProduct}
				title={"무료"}
				route={"/free-transaction"}
			/>
			<RecentlyClicked />
		</>
	);
};

export default Main;

const DivisionLine = styled.hr`
	width: 600px;
	height: 1px;
	background-color: #cccccc;
	margin: 0 auto;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 500px;
	}
`;

const S = { DivisionLine };
