import ProductQueryApi from "apis/product.query.api";
import ProductList from "components/ProductList/withPagination";
import BasicSelect from "components/Select";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const SearchPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { keyword } = useParams();
	const page = searchParams.get("page") || 1;
	const filter = searchParams.get("filter") || "등록순";
	const [searchResults, setSearchResults] = useState([]);
	const [currensValue, setCurrentValue] = useState("등록순");

	const { data, isLoading } = ProductQueryApi.searchProductList({
		keyword,
		page,
		filter,
		status: "판매중"
	});

	console.log("result", data);
	const prod = data?.product;

	if (isLoading) {
		return <div>스켈레톤 UI로 변경 예정</div>;
	}

	// title, description, tag 값 포함되는 결과만 보여주는 로직(객체분해할당)
	// " " 공백 join하여 문자열 합쳐 검색
	// toLocaleLowerCase -> 영문 검색시 소문자로 변환하여 모두 검색 가능하도록
	const filteredSearchResults =
		prod?.filter(product => {
			const { title, description, ProductsTags } = product;
			const tags = ProductsTags?.map(item => item.Tag.tag) || [];

			const filterValue = [title, description, ...tags].join(" ").toLowerCase();
			return filterValue.includes(keyword.toLowerCase());
		}) || [];

	const onFiltering = value => {
		let filteredList = [...filteredSearchResults];

		if (value === "등록순") {
			filteredList.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
		} else if (value === "인기순") {
			filteredList.sort((a, b) => b.liked - a.liked);
		} else if (value === "저가순") {
			filteredList.sort((a, b) => a.price - b.price);
		} else if (value === "고가순") {
			filteredList.sort((a, b) => b.price - a.price);
		}

		setSearchResults(filteredList);
		// filter params만 업데이트하는 로직
		setSearchParams(new URLSearchParams({ ...searchParams, filter: value }));
	};

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
						<span>"{keyword}"</span>의 검색결과 {filteredSearchResults.length}개
					</S.SearchText>
					<BasicSelect
						variant={"primary"}
						options={options}
						selectedValue={filter}
						onChange={onFiltering}
						currensValue={filter}
						setCurrentValue={setCurrentValue}
					/>
				</S.ResultandFilter>
				{/* 검색 결과가 onFiltering 이벤트 발생시에 searchResults 적용되도록 */}
				{searchResults.length > 0 ? (
					<ProductList productList={searchResults} />
				) : (
					<ProductList productList={filteredSearchResults} />
				)}
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
