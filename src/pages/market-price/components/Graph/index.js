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

function LineGraphs() {
	const data = [
		{
			name: "Page A",
			uv: 4000,
		},
		{
			name: "Page B",
			uv: 3000,
		},
		{
			name: "Page C",
			uv: 2000,
		},
		{
			name: "Page D",
			uv: 2780,
		},
		{
			name: "Page E",
			uv: 1890,
		},
		{
			name: "Page F",
			uv: 2390,
		},
		{
			name: "Page G",
			uv: 3490,
		},
	];

	return (
		<Container>
			<ComposedChart
				width={1000}
				height={600}
				data={data}
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
		</Container>
	);
}

export default LineGraphs;

const Container = styled.div`
	width: 1000px;
	height: 600px;
	/* border: 1px solid black; */
	position: relative;
	top: 100px;
	padding-bottom: 200px;
`;
