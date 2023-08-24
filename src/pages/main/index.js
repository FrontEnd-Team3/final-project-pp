import React from "react";
import Banner from "./components/Banner";
import Slogan from "./components/Slogan";
import styled from "styled-components";
import RecentlyClicked from "components/RecentlyClicked";
import { useQueryClient } from "react-query";
import Products from "./components/Products";
import QueryKey from "consts/queryKey";
import ProductQueryApi from "apis/product.query.api";
import Loading from "components/Loading";

const Main = () => {
	const queryClient = useQueryClient();

	const { data, isLoading, error } = ProductQueryApi.getProductList();

	// const { data, fetchNextPage, status, isLoading, error } = useInfiniteQuery([
	// 	[QueryKey.productData],
	// 	ProductApi.getProductPageList,
	// 	{
	// 		getNextPageParam: lastPage => {
	// 			const { curPage, totalPage } = lastPage;
	// 			if (totalPage == curPage) return false;
	// 			return curPage + 1; // 'page' 변수가 정의되지 않았으므로 'curPage + 1'을 반환합니다.
	// 		},
	// 	},
	// ]);

	// console.log("페이지 보기위한 데이터", data);
	if (isLoading) return <Loading />;

	if (error) {
		window.location.reload();
		queryClient.refetchQueries(QueryKey.productData);
	}

	// const loadMoreRef = useRef();
	// useEffect(() => {
	// 	if (status === "loading") return;

	// 	const observer = new IntersectionObserver(entries => {
	// 		if (entries[0].isIntersecting) {
	// 			fetchNextPage();
	// 		}
	// 	});

	// 	if (loadMoreRef.current) {
	// 		observer.observe(loadMoreRef.current);
	// 	}

	// 	// Clean up function
	// 	return () => observer.disconnect();
	// }, [status]);
	return (
		<>
			<Banner />
			<Slogan />
			<Products
				list={data?.usedProduct}
				title={"중고"}
				route={"/used-transaction"}
			/>
			<S.DivisionLine />
			<Products
				list={data?.freeProduct}
				title={"무료"}
				route={"/free-transaction"}
			/>
			<RecentlyClicked />
			{/* <div ref={loadMoreRef}>Loading more...</div> */}
		</>
	);
};

export default Main;

const DivisionLine = styled.hr`
	width: 600px;
	height: 1px;
	background-color: #cccccc;
	margin: 0 auto;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 500px;
	}
`;

const S = { DivisionLine };
