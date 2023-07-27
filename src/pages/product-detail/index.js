import RecentlyClicked from "components/RecentlyClicked";
import styled from "styled-components";
import ProductInfo from "./components/ProductInfo";
import OtherProducts from "./components/OtherProducts";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const ProductDetailPage = () => {
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`/api/product/detail?prod_idx=${id}`)
			.then(res => console.log("data", res.data));
	}, []);

	return (
		<>
			<RecentlyClicked />
			<S.Container>
				<ProductInfo id={id} />
				<OtherProducts id={id} />
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
