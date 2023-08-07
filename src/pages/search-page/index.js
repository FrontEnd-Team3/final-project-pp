import ProductQueryApi from "apis/product.query.api";
import ProductList from "components/ProductList/withPagination";
import BasicSelect from "components/Select";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const SearchPage = () => {
	const [searchParams, _] = useSearchParams();
	const category = searchParams.get("category") || 0;
	const { keyword } = useParams();
	const page = searchParams.get("page") || 1;
	const [searchResults, setSearchResults] = useState([]);

	const { data, isLoading } = ProductQueryApi.searchProductList(
		category,
		keyword,
		page,
	);

	console.log("result", data);
	const prod = data?.product;

	if (isLoading) {
		return <div>스켈레톤 UI로 변경 예정</div>;
	}

	const filteredSearchResults =
		prod?.filter(product => {
			const { title, description, ProductsTags } = product;
			const tags = ProductsTags?.map(item => item.Tag.tag) || [];

			const filterValue = [title, description, ...tags]
				.join(" ")
				.toLocaleLowerCase();
			return filterValue.includes(keyword.toLowerCase());
		}) || [];

	// const onFiltering = value => {
	// 	let filteredList = [...data.product];

	// 	if (value === "등록순") {
	// 		filteredList.sort((a, b) => a.created_at.localeCompare(b.created_at));
	// 	} else if (value === "인기순") {
	// 		filteredList.sort((a, b) => b.Liked - a.Liked);
	// 	} else if (value === "저가순") {
	// 		filteredList.sort((a, b) => a.price - b.price);
	// 	} else if (value === "고가순") {
	// 		filteredList.sort((a, b) => b.price - a.price);
	// 	}

	// 	filteredList = filteredList.filter(item => item.title.includes(keyword));

	// 	console.log("필터링", filteredList);
	// 	setSearchResults(filteredList);
	// };

	const options = [
		{ value: "등록순", label: "등록순" },
		{ value: "인기순", label: "인기순" },
		{ value: "저가순", label: "저가순" },
		{ value: "고가순", label: "고가순" },
	];

	return (
		<S.Container>
			<S.Wrapper>
				<S.ResultandFilter>
					<S.SearchText>
						<span>{keyword}</span>의 검색결과 {filteredSearchResults.length}개
					</S.SearchText>
					<BasicSelect
						variant={"primary"}
						options={options}
						selectedValue={"등록순"}
						// onChange={onFiltering}
					/>
				</S.ResultandFilter>
				<ProductList productList={filteredSearchResults} />
			</S.Wrapper>
		</S.Container>
	);
};

export default SearchPage;

const Container = styled.div`
	width: 100%;
`;

const Wrapper = styled.div`
	width: 1060px;
	margin: 50px auto;
`;

const ResultandFilter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xxsmall};
`;

const AllButton = styled.div`
	align-items: center;
	border: 1px solid black;
	width: 100px;
	text-align: center;
`;

const SearchText = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.semimedium};
	font-weight: bold;
	span {
		color: ${({ theme }) => theme.PALETTE.primary};
	}
`;

const S = {
	Container,
	Wrapper,
	ResultandFilter,
	SearchText,
	AllButton,
};
