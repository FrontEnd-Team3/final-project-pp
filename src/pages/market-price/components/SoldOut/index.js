import styled from "styled-components";
import { flexCenter, flexColumn } from "styles/common";
import OneProduct from "./oneSoldOutProduct";
import LineGraphs from "../Graph";
import Loading from "components/Loading";
import { RiEmotionSadLine } from "react-icons/ri";
import { ResponsiveContainer } from "recharts";

const Soldout = ({ soldoutProd }) => {
	const { keyword, data, isLoading } = soldoutProd;

	console.log("keyword", keyword);
	console.log("data", data);
	if (isLoading) {
		return <Loading />;
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
	const titleLogic = prod.filter(prod => prod.title.includes(keyword));
	const tagLogic = prod.filter(prod =>
		prod.ProductsTags.map(tags => tags.Tag.tag).includes(keyword),
	);
	const allLogic = titleLogic.length > 0 || tagLogic.length > 0;
	console.log("logictest", titleLogic);
	console.log("tagLogic", tagLogic);

	return (
		<>
			<S.Container>
				{allLogic ? (
					<>
						<ResponsiveContainer width={1000}>
							<LineGraphs data={data} avg={avg} />
						</ResponsiveContainer>
						<S.AvgPrice>
							<S.Keyword>" {keyword} "</S.Keyword> 의 평균 거래 가격은{" "}
							<S.Won>{won}</S.Won> 원 입니다
						</S.AvgPrice>
					</>
				) : (
					<S.NoSearchResult>
						해당 검색어는 판매 완료된 상품이 없습니다
						<RiEmotionSadLine size={40} />
					</S.NoSearchResult>
				)}
				<S.Line></S.Line>
				<S.Button>최근 거래 종료 품목</S.Button>
				<S.Gridwrapper>
					{prod?.map(product => (
						<OneProduct product={product} />
					))}
				</S.Gridwrapper>
			</S.Container>
		</>
	);
};
export default Soldout;

const NoSearchResult = styled.div`
	${flexCenter}
	color: ${({ theme }) => theme.PALETTE.black};
	font-size: 36px;
	font-weight: 700;
	margin: 70px 0;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		font-size: 28px;
	}

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

const Gridwrapper = styled.div`
	max-width: 1060px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 20px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}
`;

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
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	}
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

const Button = styled.button`
	width: 260px;
	height: 52px;
	font-size: 19px;
	background-color: ${({ theme }) => theme.PALETTE.darkBlack};
	color: ${({ theme }) => theme.PALETTE.white};
	position: relative;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 240px;
		height: 48px;
		font-size: 16px;
	}
`;

const Container = styled.div`
	max-width: 100%;
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
	NoSearchResult,
};
