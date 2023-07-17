import styled from "styled-components";
import { primaryFont } from "styles/common";

const ProductDetailPage = () => {
	return (
		<>
			{/* <RecentlyClicked />
			<S.Container>
				<ProductInfo />
				<OtherProducts />
			</S.Container> */}
		</>
	);
};

export default ProductDetailPage;

const Container = styled.div`
	width: 860px;
	margin: 0 auto;
	padding: 20px 0;
	${primaryFont}
`;

const S = {
	Container,
};
