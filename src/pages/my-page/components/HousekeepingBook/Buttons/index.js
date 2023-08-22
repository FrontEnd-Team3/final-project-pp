import BasicButton from "components/Button";
import styled from "styled-components";
import { flexRow } from "styles/common";

const Buttons = ({ setCategoryParams, setDateParams }) => {
	const threeMonthAgo = () => {
		let now = new Date();
		let date = new Date(now.setMonth(now.getMonth() - 3));
		let year = date.getFullYear();
		let month = ("0" + (1 + date.getMonth())).slice(-2);
		let day = ("0" + date.getDate()).slice(-2);

		return `${year}-${month}-${day}`;
	};

	const sixMonthAgo = () => {
		let now = new Date();
		let date = new Date(now.setMonth(now.getMonth() - 6));
		let year = date.getFullYear();
		let month = ("0" + (1 + date.getMonth())).slice(-2);
		let day = ("0" + date.getDate()).slice(-2);

		return `${year}-${month}-${day}`;
	};

	const nineMonthAgo = () => {
		let now = new Date();
		let date = new Date(now.setMonth(now.getMonth() - 9));
		let year = date.getFullYear();
		let month = ("0" + (1 + date.getMonth())).slice(-2);
		let day = ("0" + date.getDate()).slice(-2);

		return `${year}-${month}-${day}`;
	};
	const yearAgo = () => {
		let now = new Date();
		let date = new Date(now.setMonth(now.getMonth() - 12));
		let year = date.getFullYear();
		let month = ("0" + (1 + date.getMonth())).slice(-2);
		let day = ("0" + date.getDate()).slice(-2);

		return `${year}-${month}-${day}`;
	};

	return (
		<Container>
			<div>
				<BasicButton
					color={"primary"}
					size={"xmedium"}
					children={"총 내역"}
					style={{
						fontSize: "16px",
						borderRadius: "6px",
						fontWeight: "700",
						marginRight: "24px",
					}}
				/>
				<BasicButton
					color={"white"}
					size={"xmedium"}
					children={"구매내역"}
					style={{
						fontSize: "16px",
						border: "1px solid #dddddd",
						borderRadius: "6px",
						fontWeight: "400",
						marginRight: "24px",
					}}
					onClick={() => {
						setCategoryParams("buyer");
					}}
				/>
				<BasicButton
					color={"white"}
					size={"xmedium"}
					children={"판매내역"}
					style={{
						fontSize: "16px",
						border: "1px solid #dddddd",
						borderRadius: "6px",
						fontWeight: "400",
					}}
					onClick={() => {
						setCategoryParams("seller");
					}}
				/>
			</div>
			<div>
				<BasicButton
					color={"primary"}
					size={"small"}
					children={"3개월"}
					style={{
						fontSize: "16px",
						borderRadius: "6px",
						fontWeight: "700",
						marginRight: "16px",
					}}
					onClick={() => {
						setDateParams(threeMonthAgo());
					}}
				/>
				<BasicButton
					color={"white"}
					size={"small"}
					children={"6개월"}
					style={{
						fontSize: "16px",
						borderRadius: "6px",
						border: "1px solid #dddddd",
						fontWeight: "400",
						marginRight: "16px",
					}}
					onClick={() => {
						setDateParams(sixMonthAgo());
					}}
				/>
				<BasicButton
					color={"white"}
					size={"small"}
					children={"9개월"}
					style={{
						fontSize: "16px",
						borderRadius: "6px",
						border: "1px solid #dddddd",
						fontWeight: "400",
						marginRight: "16px",
					}}
					onClick={() => {
						setDateParams(nineMonthAgo());
					}}
				/>
				<BasicButton
					color={"white"}
					size={"small"}
					children={"1년"}
					style={{
						fontSize: "16px",
						borderRadius: "6px",
						fontWeight: "400",
						border: "1px solid #dddddd",
					}}
					onClick={() => {
						setDateParams(yearAgo());
					}}
				/>
			</div>
		</Container>
	);
};

export default Buttons;

const Container = styled.div`
	${flexRow}
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
	margin-top: 103px;
`;
