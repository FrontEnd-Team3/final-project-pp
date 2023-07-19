import styled from "styled-components";

const SearchPage = () => {
	return (
		<S.Main>
			<S.SearchText>신발의 검색결과 8개</S.SearchText>
			<S.Select>
				<S.Option>최신순</S.Option>
				<S.Option>인기순</S.Option>
				<S.Option>고가순</S.Option>
				<S.Option>저가순</S.Option>
			</S.Select>
			{/* <ProductList productList={productList} /> */}
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
	float: right;
	margin-right: 5px;
	margin-bottom: 10px;
	font-size: 16px;
	width: 100px;
	text-align: center;
	padding: 5px;
	border: 1px solid #dddddd;
	border-radius: 8px;
`;

const Option = styled.option`
	background-color: white;
	border-bottom: 1px solid #dddddd;
`;

const AllButton = styled.div`
	align-items: center;
	border: 1px solid black;
	width: 100px;
	text-align: center;
`;

const SearchText = styled.div`
	font-size: 22px;
`;

const S = {
	SearchText,
	Main,
	AllButton,
	Select,
	Option,
};
