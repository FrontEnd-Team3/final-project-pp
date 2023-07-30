import React, { useEffect } from "react";
import Banner from "./components/Banner";
import Slogan from "./components/Slogan";
import styled from "styled-components";
import RecentlyClicked from "components/RecentlyClicked";
import UsedProduct from "./components/UsedProducts";
import FreeProduct from "./components/FreeProducts";
import TokenRepository from "repositories/TokenRepository";
import ProductQueryApi from "apis/product.query.api";

const Main = () => {
	const { data } = ProductQueryApi.getProductList();

	useEffect(() => {
		const token = TokenRepository.getToken();
		console.log(token ? token : "null");
	}, []);

	return (
		<>
			<Banner />
			<Slogan />
			<UsedProduct region={data?.region} list={data?.usedProduct} />
			<S.DivisionLine />
			<FreeProduct region={data?.region} list={data?.freeProduct} />
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
