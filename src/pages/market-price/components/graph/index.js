const { default: styled } = require("styled-components");

const PriceGraph = () => {
	return (
		<S.Container>
			<div>그래프 자리</div>
		</S.Container>
	);
};

const Container = styled.div`
	width: 1060px;
	height: 600px;
	background-color: aliceblue;
	position: relative;
	top: 200px;
`;

const S = {
	Container,
};

export default PriceGraph;
