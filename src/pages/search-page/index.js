import ProductList from "components/ProductList";
import { productList } from "mock/products";
import styled from "styled-components";
import { primaryFont } from "styles/common";

const SearchPage = () => {
	return (
		<S.Main>
			<S.SearchText>신발의 검색결과 8개</S.SearchText>
			<S.Select>
				<S.Option>중고상품</S.Option>
				<S.Option>무료 나눔</S.Option>
			</S.Select>
			<ProductList productList={productList} />
		</S.Main>
	);
};

export default SearchPage;
const Main = styled.div`
	width: 860px;
	margin: 20px auto;
	flex-wrap: wrap;
`;

const Select = styled.select`
	background-color: #efd6fb;
	float: right;
	margin-right: 5px;
	margin-bottom: 10px;
	${primaryFont}
	width: 100px;
	text-align: center;
	padding: 5px;
	border: 2px solid black;
`;

const Option = styled.option`
	background-color: white;
`;

const AllButton = styled.div`
	align-items: center;
	border: 1px solid black;
	width: 100px;
	text-align: center;
`;

const SearchText = styled.div`
	${primaryFont}
`;

const S = {
	SearchText,
	Main,
	AllButton,
	Select,
	Option,
};
