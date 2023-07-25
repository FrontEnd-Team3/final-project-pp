import React from "react";
import Banner from "./components/Banner";
import Slogan from "./components/Slogan";
import styled from "styled-components";
import RecentlyClicked from "components/RecentlyClicked";
import UsedProduct from "./components/UsedProducts";
import FreeProduct from "./components/FreeProducts";

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
