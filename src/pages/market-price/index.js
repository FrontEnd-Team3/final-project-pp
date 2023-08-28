import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import { flexColumn } from "styles/common";
import Soldout from "./components/SoldOut";
import SelectBox from "./components/SelectBox";
import { useState } from "react";
import ProductQueryApi from "apis/product.query.api";
import { useParams } from "react-router-dom";
import { getPastDate, getTodayDate } from "utils/marketPriceData";
import RecentlyClicked from "components/RecentlyClicked";

const MarketPrice = () => {
	const { keyword } = useParams();
	const [currensValue, setCurrentValue] = useState("1개월");
	const startDate = Number(currensValue.slice(0, -2));

	// console.log("시작날짜", startDate);

	const { data, isLoading } = ProductQueryApi.searchMarketPriceList({
		keyword,
		start: getPastDate(startDate),
		end: getTodayDate(),
	});

	const soldoutProd = { data, isLoading, keyword };

	return (
		<>
			<S.Container>
				<SearchBar />
				<SelectBox
					currensValue={currensValue}
					setCurrentValue={setCurrentValue}
				/>
			</S.Container>
			<Soldout soldoutProd={soldoutProd} />
			<RecentlyClicked />
		</>
	);
};

export default MarketPrice;
const Container = styled.div`
	margin: 0 auto;
	max-width: 1060px;
	${flexColumn}/* align-items: center; */
`;

const S = {
	Container,
};
