import styled from "styled-components";
import { productList } from "mocks/data/products/productsList";
import { useState } from "react";
import Pagination from "components/Pagination";
import { flexColumn } from "styles/common";
import OneProduct from "./oneSoldOutProduct";
import ProductQueryApi from "apis/product.query.api";
import { useParams, useSearchParams } from "react-router-dom";

const Soldout = () => {
	const [dataLimit, setDataLimit] = useState(8);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * dataLimit;
	const [searchParams, _] = useSearchParams();
	const start = searchParams.get("start") || "2023-07-09";
	const end = searchParams.get("end") || "2023-08-09";
	const { keyword } = useParams();
	const SoldoutList = productList.filter(v => v.status == "판매완료");

	const { data, isLoading } = ProductQueryApi.searchMarketPriceList({
		keyword,
		start,
		end,
	});

	console.log("result", data);
	const prod = data?.products.product;
	console.log("판매완료", prod);

	const avg = data?.cumulativeAvgPrice;
	console.log("기간 동안 팔린 물품 갯수 및 평균 값", avg);

	if (isLoading) {
		return <div>스켈레톤 UI 추가 예정 로딩</div>;
	}

	return (
		<S.Container>
			<S.Button>최근 거래 종료 품목</S.Button>
			<S.GridContainer>
				<S.Gridwrapper>
					{SoldoutList.slice(offset, offset + dataLimit).map(product => (
						<OneProduct product={product} />
					))}
				</S.Gridwrapper>
			</S.GridContainer>
			<Pagination
				totalData={SoldoutList.length}
				dataLimit={dataLimit}
				page={page}
				setPage={setPage}
			/>
		</S.Container>
	);
};
export default Soldout;

const GridContainer = styled.div`
	width: 1060px;
	height: 940px;
	${flexColumn}
	align-items: center;
	position: relative;
	margin-top: -60px;
`;

const Gridwrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 253px);
	grid-column-gap: 10px;
	grid-row-gap: 30px;
	position: relative;
	top: 65px;
`;
const Button = styled.button`
	width: 260px;
	height: 52px;
	font-size: 19px;
	background-color: ${({ theme }) => theme.PALETTE.darkBlack};
	color: ${({ theme }) => theme.PALETTE.white};
	position: relative;
`;

const Container = styled.div`
	position: relative;
	width: 100%;
	top: 300px;
	height: 1200px;
	${flexColumn}
	align-items: center;
`;

const S = {
	Button,
	Container,
	Gridwrapper,
	GridContainer,
};
