import styled from "styled-components";
import SearchBar from "./components/search-bar";
import { flexColumn, primaryFont } from "styles/common";
import Soldout from "./components/soldout";

const MarketPrice = () => {
	return (
		<>
			<S.Container>
				<SearchBar />
				<Soldout />
			</S.Container>
		</>
	);
};

export default MarketPrice;
const Container = styled.div`
	margin: 0 auto;
	width: 1060px;
	height: 1500px;
	${flexColumn}
	${primaryFont}
	align-items: center;
`;

const S = {
	Container,
};
