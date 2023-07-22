import React from "react";
import Banner from "./components/banner/Banner";
import Slogan from "./components/slogan/Slogan";
import styled from "styled-components";
import RecentlyClicked from "components/RecentlyClicked";
import { productList } from "mock/productsList";
import MainProducts from "./components/products";

const Main = () => {
	const USEDPRODUCTS = productList?.filter(
		product => product.status !== "판매완료" && product.price,
	);

	const FREEPRODUCTS = productList?.filter(
		product => product.status !== "판매완료" && !product.price,
	);

	return (
		<>
			<Banner />
			<Slogan />
			{/* <UsedProduct /> */}
			<MainProducts
				title={"중고"}
				list={USEDPRODUCTS}
				url={"/used-transaction"}
			/>
			<S.DivisionLine />
			{/* <FreeProduct /> */}
			<MainProducts
				title={"무료"}
				list={FREEPRODUCTS}
				url={"/free-transaction"}
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
