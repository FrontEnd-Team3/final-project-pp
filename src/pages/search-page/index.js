import ProductQueryApi from "apis/product.query.api";
import Loading from "components/Loading";
import ProductList from "components/ProductList/withPagination";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { RiEmotionSadLine } from "react-icons/ri";
import { flexCenter } from "styles/common";
import RecentlyClicked from "components/RecentlyClicked";

const SearchPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { keyword } = useParams();
	const [page, setPage] = useState(1);
	const filter = searchParams.get("filter") || "등록순";

	const { data, isLoading, refetch } = ProductQueryApi.searchProductList({
		keyword,
		page,
		filter,
		status: "판매중",
	});

	const prod = data?.product;

	useEffect(() => {
		refetch();
	}, [page]);

	if (isLoading) {
		return <Loading />;
	}

	const filteredSearchResults =
		prod?.filter(product => {
			const { title, description, ProductsTags } = product;
			const tags = ProductsTags?.map(item => item.Tag.tag) || [];

			const filterValue = [title, description, ...tags].join(" ").toLowerCase();
			return filterValue.includes(keyword.toLowerCase());
		}) || [];

	return (
		<S.Container>
			<S.Wrapper>
				<S.ResultandFilter>
					<S.SearchText>
						<span>"{keyword}"</span>의 검색결과 {data?.pagination?.count}개
					</S.SearchText>
				</S.ResultandFilter>
				{filteredSearchResults.length === 0 && (
					<S.NoSearchResult>
						검색 결과가 없습니다
						<RiEmotionSadLine size={40} />
					</S.NoSearchResult>
				)}
				<ProductList
					productList={filteredSearchResults}
					pagination={data?.pagination}
					page={page}
					setPage={setPage}
				/>
			</S.Wrapper>
			<RecentlyClicked />
		</S.Container>
	);
};

export default SearchPage;

const NoSearchResult = styled.div`
	${flexCenter}
	color: ${({ theme }) => theme.PALETTE.black};
	font-size: 36px;
	font-weight: 700;
	margin: 70px 0 10px 0;

	svg {
		margin-left: 10px;

		@media ${({ theme }) => theme.DEVICE.mobile} {
			width: 28px;
			margin-left: 4px;
		}
	}

	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	}
`;

const Container = styled.div`
	width: 100%;
`;

const Wrapper = styled.div`
	max-width: 1060px;
	margin: 50px auto;
	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 0 20px;
	}
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

	@media ${({ theme }) => theme.DEVICE.tablet} {
		font-size: ${({ theme }) => theme.FONT_SIZE.smedium};
	}

	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: ${({ theme }) => theme.FONT_SIZE.xsmedium};
	}
`;

const S = {
	Container,
	Wrapper,
	ResultandFilter,
	SearchText,
	AllButton,
	NoSearchResult,
};
