import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import { flexColumn } from "styles/common";
import Soldout from "./components/SoldOut";
import LineGraphs from "./components/Graph";

const MarketPrice = () => {
	return (
		<>
			<S.Container>
				<SearchBar />
				<LineGraphs />
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
	align-items: center;
`;

const S = {
	Container,
};
