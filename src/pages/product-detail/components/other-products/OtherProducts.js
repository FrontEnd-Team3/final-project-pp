import ProductList from "components/ProductList";
import { productList } from "mock/products";
import styled from "styled-components";
import { primaryFont } from "styles/common";

const OtherProducts = () => {
	return (
		<div>
			<S.OtherProductTitle>다른 상품 보러가기</S.OtherProductTitle>
			<ProductList productList={productList} />
		</div>
	);
};

export default OtherProducts;

const OtherProductTitle = styled.button`
	width: 260px;
	padding: 10px;
	background-color: ${({ theme }) => theme.PALETTE.primary["light"]};
	${primaryFont}
	font-size: 20px;
	border: 3px solid ${({ theme }) => theme.PALETTE.black};
	border-radius: 12px;
	margin-bottom: 25px;
`;

const S = { OtherProductTitle };
