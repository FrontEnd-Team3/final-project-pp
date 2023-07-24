import BasicButton from "components/Button";
import styled from "styled-components";
import { flexColumn } from "styles/common";

const PurchasedButtons = () => {
	return (
		<ButtonsContainer>
			<BasicButton
				color={"white"}
				size={"xmedium"}
				children={"상품 보러가기"}
				style={{
					width: "124px",
					border: "1px solid #dddddd",
					fontSize: "16px",
					borderRadius: "6px",
					fontWeight: "500",
				}}
			/>
			<BasicButton
				color={"black"}
				size={"xmedium"}
				children={"후기 남기기"}
				style={{
					width: "124px",
					fontSize: "16px",
					borderRadius: "6px",
					fontWeight: "600",
					marginTop: "10px",
				}}
			/>
		</ButtonsContainer>
	);
};
export default PurchasedButtons;

const ButtonsContainer = styled.div`
	${flexColumn}
`;
