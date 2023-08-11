import {
	ComposedChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";
import styled from "styled-components";

function LineGraphs({ data }) {
	const avg = data?.cumulativeAvgPrice;
	// console.log("여기여기", avg);
	const graphdata = [
		{
			name: "7월 1일",
			uv: avg[0].avgPrice,
		},
		{
			name: "7월 5일",
			uv: avg[4].avgPrice,
		},
		{
			name: "7월 10일",
			uv: avg[9].avgPrice,
		},
		{
			name: "7월 15일",
			uv: avg[14].avgPrice,
		},
		{
			name: "7월 20일",
			uv: avg[19].avgPrice,
		},
		{
			name: "7월 25일",
			uv: avg[24].avgPrice,
		},
		{
			name: "7월 30일",
			uv: avg[30].avgPrice,
		},
	];

	return (
		<S.Container>
			<ComposedChart
				width={1000}
				height={600}
				data={graphdata}
				margin={{
					top: 250,
					right: 80,
					bottom: -20,
					left: 20,
				}}
			>
				<CartesianGrid stroke="#f5f5f5" />
				<XAxis
					dataKey="name"
					label={{ value: "Pages", position: "insideBottomRight", offset: 0 }}
					// isAnimationActive={false}
				/>
				<YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
				<Tooltip />
				<Legend />
				{/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
				<Line type="monotone" dataKey="uv" stroke="#3cb371" />
			</ComposedChart>
		</S.Container>
	);
}

export default LineGraphs;

const Container = styled.div`
	width: 1000px;
	height: 600px;
	top: 100px;
	margin-bottom: 100px;
`;

const S = { Container };
