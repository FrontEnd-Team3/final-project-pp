import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import { flexColumn } from "styles/common";
import Soldout from "./components/SoldOut";
import LineGraphs from "./components/Graph";
import SelectBox from "./components/SelectBox";

const MarketPrice = () => {
	return (
		<>
			<S.Container>
				<SearchBar />
				<SelectBox />
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
	${flexColumn}
	align-items: center;
`;

const S = {
	Container,
};
