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

	// const arr = [];
	// for (let i = 0; i < avg.length; i + 5) {
	// 	arr.push({ name: avg[i].date, uv: avg[i].avgPrice });
	// }
	// console.log("여기여기", arr);
	const arr = [];
	for (let i = 0; i < avg.length; i++) {
		arr.push({ name: avg[i].date, uv: avg[i].avgPrice });
		// i+6;
	}

	return (
		<S.Container>
			<ComposedChart
				width={1000}
				height={600}
				data={arr}
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
