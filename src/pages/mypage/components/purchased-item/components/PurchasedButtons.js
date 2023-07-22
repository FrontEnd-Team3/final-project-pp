import BasicButton from "components/Button";
import styled from "styled-components";
import { flexColumn } from "styles/common";

const PurchasedButtons = () => {
	return (
		<ButtonsContainer>
			<BasicButton
				variant={"white"}
				size={"xmedium"}
				children={"상품 보러가기"}
				style={{
					width: "124px",

					fontSize: "16px",
					borderRadius: "6px",
					fontWeight: "Medium",
				}}
			/>
			<BasicButton
				variant={"black"}
				size={"xmedium"}
				children={"후기 남기기"}
				style={{
					width: "124px",
					fontSize: "16px",
					borderRadius: "6px",
					fontWeight: "Medium",
				}}
			/>
		</ButtonsContainer>
	);
};
export default PurchasedButtons;

const ButtonsContainer = styled.div`
	${flexColumn}
`;
