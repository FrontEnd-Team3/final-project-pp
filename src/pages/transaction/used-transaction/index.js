import ProductQueryApi from "apis/product.query.api";
import Loading from "components/Loading";
import ProductList from "components/ProductList/withPagination";
import RecentlyClicked from "components/RecentlyClicked";
import QueryKey from "consts/queryKey";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const UsedTransaction = () => {
	const [page, setPage] = useState(1);
	const [searchParams, setSearchParams] = useSearchParams();
	const test = searchParams.get("page") || 1;
	const { data, isLoading, error, refetch } = ProductQueryApi.getUsedProduct({
		category: 0,
		page,
		status: "판매중",
	});

	const queryClient = useQueryClient();

	useEffect(() => {
		refetch();
		setSearchParams({ page });
	}, [page]);

	useEffect(() => {
		setPage(test);
	}, [test]);

	if (isLoading) return <Loading />;

	if (error) {
		window.location.reload();
		queryClient.refetchQueries(QueryKey.usedProduct);
	}

	return (
		<S.Container>
			<S.Wrapper>
				<S.Title>
					우리 동네 <span>중고</span> 물품
				</S.Title>
				<S.Total>총 {data?.pagination.count}개</S.Total>
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
export default UsedTransaction;

const Container = styled.div`
	width: 100%;
`;

const Wrapper = styled.div`
	margin: 50px auto;
	max-width: 1060px;
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

const Total = styled.div`
	margin: 20px 0;
	color: darkgray;
	font-size: 16px;
`;

const S = {
	Container,
	Wrapper,
	Title,
	Total,
};
