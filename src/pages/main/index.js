import React from "react";
import Banner from "./components/banner/Banner";
import Slogan from "./components/slogan/Slogan";
import styled from "styled-components";
import RecentlyClicked from "components/RecentlyClicked";
import UsedProduct from "./components/used-product/UsedProduct";
import FreeProduct from "./components/free-product/FreeProduct";

const Main = () => {
	return (
		<>
			<Banner />
			<Slogan />
			<UsedProduct />
			<S.DivisionLine />
			<FreeProduct />
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
