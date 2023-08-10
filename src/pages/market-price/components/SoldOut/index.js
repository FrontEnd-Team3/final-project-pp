import styled from "styled-components";
import { flexColumn } from "styles/common";
import OneProduct from "./oneSoldOutProduct";
import ProductQueryApi from "apis/product.query.api";
import { useParams } from "react-router-dom";
import { getPastDate, getTodayDate } from "utils/marketPriceData";

const Soldout = () => {
	const { keyword } = useParams();

	const { data, isLoading } = ProductQueryApi.searchMarketPriceList({
		keyword,
		start: getPastDate(1),
		end: getTodayDate(),
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
			<div>
				<S.Gridwrapper>
					{prod?.map(product => (
						<OneProduct product={product} />
					))}
				</S.Gridwrapper>
			</div>
		</S.Container>
	);
};
export default Soldout;

const Gridwrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	grid-gap: 20px;
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
	width: 100%;
	${flexColumn}
	align-items: center;
	margin-bottom: 100px;
`;

const S = {
	Button,
	Container,
	Gridwrapper,
};
