import ProductQueryApi from "apis/product.query.api";
import Loading from "components/Loading";
import ProductList from "components/ProductList/withPagination";
import RecentlyClicked from "components/RecentlyClicked";
import BasicSelect from "components/Select";
import styled from "styled-components";
import { useEffect, useState } from "react";
import QueryKey from "consts/queryKey";
import { useQueryClient } from "react-query";

const FreeTransaction = () => {
	const [page, setPage] = useState(1);
	const { data, isLoading, error, refetch } = ProductQueryApi.getFreeProduct({
		category: 1,
		page,
		status: "판매중",
	});

	const queryClient = useQueryClient();

	useEffect(() => {
		refetch();
	}, [page]);

	const [currensValue, setCurrentValue] = useState("등록순");

	const [filteredProducts, setFilteredProducts] = useState(data?.product);

	const onFiltering = value => {
		let filteredList = [...data?.product];

		if (value === "등록순") {
			filteredList.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
		} else if (value === "인기순") {
			filteredList.sort((a, b) => b.likeConut - a.likeConut);
		}
		setFilteredProducts(filteredList);
	};

	const options = [
		{ value: "등록순", label: "등록순" },
		{ value: "인기순", label: "인기순" },
	];

	if (isLoading) return <Loading />;

	if (error) {
		window.location.reload();
		queryClient.refetchQueries(QueryKey.productData);
	}

	return (
		<S.Container>
			<S.Wrapper>
				<S.Title>
					우리 동네 <span>무료</span> 나눔
				</S.Title>
				<S.Filter>
					<BasicSelect
						variant={"primary"}
						options={options}
						selectedValue={"등록순"}
						onChange={onFiltering}
						currensValue={"등록순"}
						setCurrentValue={setCurrentValue}
					/>
				</S.Filter>
				<ProductList
					productList={filteredProducts || data?.product}
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

const Filter = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: 13px;
	color: #788394;
	margin: 12px 0;
	& button {
		color: ${({ theme }) => theme.PALETTE.white};
		font-size: 14px;
		margin-left: 15px;
	}
`;

const S = {
	Container,
	Wrapper,
	Title,
	Filter,
};
