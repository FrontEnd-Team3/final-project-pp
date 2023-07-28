import React from "react";
import Banner from "./components/Banner";
import Slogan from "./components/Slogan";
import styled from "styled-components";
import RecentlyClicked from "components/RecentlyClicked";
import UsedProduct from "./components/UsedProducts";
import FreeProduct from "./components/FreeProducts";
import axios from "axios";
import { useQuery } from "react-query";

const Main = () => {
	// const [data, setData] = useState(false);
	// useEffect(() => {
	// 	axios.get(`/api/product`).then(res => {
	// 		console.log("data", res.data);
	// 		setData(res.data);
	// 	});
	// }, []);

	const { data } = useQuery({
		queryKey: ["productData"],
		queryFn: () => axios.get(`/api/product`).then(res => res.data),
	});

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
