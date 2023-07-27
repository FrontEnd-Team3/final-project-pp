import RecentlyClicked from "components/RecentlyClicked";
import styled from "styled-components";
import ProductInfo from "./components/ProductInfo";
import OtherProducts from "./components/OtherProducts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetailPage = () => {
	const { id } = useParams();

	const [data, setData] = useState(false);
	useEffect(() => {
		axios.get(`/api/product/detail?prod_idx=${id}`).then(res => {
			console.log("data", res.data);
			setData(res.data);
		});
	}, [id]);

	return (
		<>
			<RecentlyClicked />
			<S.Container>
				<ProductInfo product={data} />
				<OtherProducts list={data?.relatedProduct} />
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
