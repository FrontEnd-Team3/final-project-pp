import styled from "styled-components";
import SearchBar from "./components/search-bar";
import { flexColumn, primaryFont } from "styles/common";
import Soldout from "./components/soldout";
import PriceGraph from "./components/graph";

const MarketPrice = () => {
	return (
		<>
			<S.Container>
				<SearchBar />
				<PriceGraph />
				<Soldout />
			</S.Container>
		</>
	);
};

export default MarketPrice;
const Container = styled.div`
	margin: 0 auto;
	width: 1060px;
	height: 2200px;
	${flexColumn}
	${primaryFont}
	align-items: center;
`;

const S = {
	Container,
};
