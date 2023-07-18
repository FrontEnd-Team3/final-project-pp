import React, { useEffect } from "react";
import Banner from "./components/banner/Banner";
import Slogan from "./components/slogan/Slogan";
import UsedProduct from "./components/used-product/UsedProduct";
import FreeProduct from "./components/free-product/FreeProduct";
import styled from "styled-components";
import RecentlyClicked from "components/RecentlyClicked/RecentlyClicked";

const Main = () => {
	useEffect(() => {
		fetch("/users")
			.then(res => res.json())
			.then(data => {
				console.log(data);
			});
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
