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

	if (isLoading) {
		return <div>스켈레톤 UI 추가 예정 로딩</div>;
	}
	console.log("result", data);
	const prod = data?.products.product;
	console.log("판매완료", prod);

	const avg = data?.cumulativeAvgPrice;
	console.log("기간 동안 팔린 물품 갯수 및 평균 값", avg);

	const totalAvgPrice = avg.reduce((total, item) => {
		return total + parseFloat(item.avgPrice);
	}, 0);
	const count = avg.length;
	const averagePrice = totalAvgPrice / count;

	const won = Math.floor(averagePrice).toLocaleString();

	return (
		<S.Container>
			<S.AvgPrice>
				<S.Keyword>" {keyword} "</S.Keyword> 의 평균 거래 가격은{" "}
				<S.Won>{won}</S.Won> 원 입니다
			</S.AvgPrice>
			<S.Line></S.Line>
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

const Line = styled.div`
	width: 1060px;
	height: 1px;
	background-color: ${({ theme }) => theme.PALETTE.gray};
	margin-bottom: 80px;
`;

const AvgPrice = styled.p`
	font-weight: 500;
	font-size: ${({ theme }) => theme.FONT_SIZE.mmlarge};
	color: ${({ theme }) => theme.PALETTE.darkBlack};
	margin: 50px 0 80px 0;
`;

const Keyword = styled.span`
	color: ${({ theme }) => theme.PALETTE.primary};
	font-weight: 700;
`;

const Won = styled.span`
	color: ${({ theme }) => theme.PALETTE.black};
	font-size: 32px;
	display: inline-block;
	line-height: 40px;
	border-bottom: 6px solid ${({ theme }) => theme.PALETTE.primary};
	font-weight: 700;
`;

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
	Won,
	Keyword,
	Line,
	AvgPrice,
	Button,
	Container,
	Gridwrapper,
};
