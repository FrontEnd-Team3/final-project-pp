import useWindowSizeCustom from "hooks/useWindowSize";
import {
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ComposedChart,
} from "recharts";
import styled from "styled-components";

function LineGraphs({ data }) {
	const avg = data?.cumulativeAvgPrice;
	const windowSize = useWindowSizeCustom();

	const arr = avg.map(item => ({
		name: item.date.split("-").slice(1).join("/"),
		일일평균거래가: item.avgPrice,
	}));

	const Pricearr = avg.map(item => item.avgPrice);
	const MaxPrice = Math.max.apply(null, Pricearr);
	const MinPrice = Math.min.apply(null, Pricearr);

	const formatTicksAsIntegers = Pricearr => {
		const test = Math.ceil(Pricearr / 1000) * 1000;
		return test.toLocaleString();
	};
	return (
		<S.Container>
			<ComposedChart
				width={windowSize.width || 1060}
				height={windowSize.height || 600}
				data={arr}
				margin={{
					top: 120,
					right: 120,
					bottom: 0,
					left: 100,
				}}
			>
				<CartesianGrid stroke="#f5f5f5" />
				<XAxis
					dataKey="name"
					label={{ value: "날짜", position: "insideBottomRight", offset: -10 }}
					tick={{ fontSize: 13 }}
				/>
				<YAxis
					label={{
						value: "원",
						angle: 0,
						position: "top",
						offset: 20,
						dx: 18,
					}}
					tickFormatter={formatTicksAsIntegers}
					domain={[MinPrice, MaxPrice]}
					tickCount={10}
					tick={{ fontSize: 13 }}
				/>

				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="일일평균거래가"
					stroke="#3cb371"
					dot={false}
				/>
			</ComposedChart>
		</S.Container>
	);
}

export default LineGraphs;

const Container = styled.div`
	max-width: 1000px;
	height: 600px;
	margin-bottom: 100px;
`;

const S = { Container };
