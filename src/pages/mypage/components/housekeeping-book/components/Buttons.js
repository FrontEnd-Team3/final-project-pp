import BasicButton from "components/Button";
import styled from "styled-components";
import { flexRow } from "styles/common";

const Buttons = () => {
	return (
		<Container>
			<div>
				<BasicButton
					variant={"primary"}
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
					variant={"white"}
					size={"xmedium"}
					children={"구매내역"}
					style={{
						fontSize: "16px",
						border: "1px solid #dddddd",
						borderRadius: "6px",
						fontWeight: "400",
						marginRight: "24px",
					}}
				/>
				<BasicButton
					variant={"white"}
					size={"xmedium"}
					children={"판매내역"}
					style={{
						fontSize: "16px",
						border: "1px solid #dddddd",
						borderRadius: "6px",
						fontWeight: "400",
					}}
				/>
			</div>
			<div>
				<BasicButton
					variant={"primary"}
					size={"small"}
					children={"3개월"}
					style={{
						fontSize: "16px",
						borderRadius: "6px",
						fontWeight: "700",
						marginRight: "16px",
					}}
				/>
				<BasicButton
					variant={"white"}
					size={"small"}
					children={"6개월"}
					style={{
						fontSize: "16px",
						borderRadius: "6px",
						border: "1px solid #dddddd",
						fontWeight: "400",
						marginRight: "16px",
					}}
				/>
				<BasicButton
					variant={"white"}
					size={"small"}
					children={"9개월"}
					style={{
						fontSize: "16px",
						borderRadius: "6px",
						border: "1px solid #dddddd",
						fontWeight: "400",
						marginRight: "16px",
					}}
				/>
				<BasicButton
					variant={"white"}
					size={"small"}
					children={"1년"}
					style={{
						fontSize: "16px",
						borderRadius: "6px",
						fontWeight: "400",
						border: "1px solid #dddddd",
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
