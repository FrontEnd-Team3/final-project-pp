import React from "react";
import Banner from "./components/Banner";
import Slogan from "./components/Slogan";
import styled from "styled-components";
import RecentlyClicked from "components/RecentlyClicked";
import ProductQueryApi from "apis/product.query.api";
import { useQueryClient } from "react-query";
import Loading from "components/Loading";
import Products from "./components/Products";
import QueryKey from "consts/queryKey";

const Main = () => {
	const queryClient = useQueryClient();

	const { data, isLoading, error } = ProductQueryApi.getProductList();

	if (isLoading) return <Loading />;

	if (error) {
		window.location.reload();
		queryClient.refetchQueries(QueryKey.productData);
	}
	console.log("전역메시지", data);
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
`;

const S = { DivisionLine };
