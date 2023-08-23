import ProductQueryApi from "apis/product.query.api";
import Loading from "components/Loading";
import ProductList from "components/ProductList/withPagination";
import RecentlyClicked from "components/RecentlyClicked";
import styled from "styled-components";
import { useEffect, useState } from "react";
import QueryKey from "consts/queryKey";
import { useQueryClient } from "react-query";
import { useSearchParams, useLocation } from "react-router-dom";

const FreeTransaction = () => {
	const [page, setPage] = useState(1);
	const [searchParams, setSearchParams] = useSearchParams();
	const test = searchParams.get("page") || 1;
	const { data, isLoading, error, refetch } = ProductQueryApi.getFreeProduct({
		category: 1,
		page,
		status: "판매중",
	});

	const location = useLocation();
	const SearchParams = new URLSearchParams(location.search);
	const PAGE = SearchParams.get("page");
	const queryClient = useQueryClient();

	useEffect(() => {
		if (PAGE) setPage(Number(PAGE));
	}, [PAGE, setPage]);

	useEffect(() => {
		setPage(test);
	}, [test]);

	useEffect(() => {
		refetch();
		setSearchParams({ page });
	}, [page]);

	if (isLoading) return <Loading />;

	if (error) {
		window.location.reload();
		queryClient.refetchQueries(QueryKey.freeProduct);
	}

	return (
		<S.Container>
			<S.Wrapper>
				<S.Title>
					우리 동네 <span>무료</span> 나눔
				</S.Title>
				<ProductList
					productList={data?.product}
					pagination={data?.pagination}
					page={page}
					setPage={setPage}
				/>
				<RecentlyClicked />
			</S.Wrapper>
		</S.Container>
	);
};
export default FreeTransaction;

const Container = styled.div`
	width: 100%;
`;

const Wrapper = styled.div`
	margin: 50px auto;
	max-width: 1060px;
	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 0 20px;
	}
`;

const Title = styled.p`
	text-align: center;
	margin-bottom: 50px;
	font-weight: 500;
	font-size: ${({ theme }) => theme.FONT_SIZE.mmlarge};
	& span {
		color: ${({ theme }) => theme.PALETTE.darkPrimary};
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	}
`;

const S = {
	Container,
	Wrapper,
	Title,
};
