import React, { useEffect } from "react";
import Banner from "./components/Banner";
import Slogan from "./components/Slogan";
import styled from "styled-components";
import RecentlyClicked from "components/RecentlyClicked";
import UsedProduct from "./components/UsedProducts";
import FreeProduct from "./components/FreeProducts";
import axios from "axios";

const Main = () => {
	useEffect(() => {
		axios.get("/product").then(res => console.log("data", res.data));
	}, []);

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
