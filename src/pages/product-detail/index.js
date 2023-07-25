import RecentlyClicked from "components/RecentlyClicked";
import styled from "styled-components";
import { primaryFont } from "styles/common";
import ProductInfo from "./components/ProductInfo";
import OtherProducts from "./components/OtherProducts";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
	const { id } = useParams();
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
	${primaryFont}
`;

const S = {
	Container,
};
