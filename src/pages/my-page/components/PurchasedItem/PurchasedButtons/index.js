import BasicButton from "components/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexColumn } from "styles/common";

const PurchasedButtons = ({
	openReview,
	setOpenReview,
	reviewExists,
	poductIdx,
}) => {
	const navigate = useNavigate();
	if (reviewExists) return null;
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
				onClick={() => navigate(`/product/${poductIdx}`)}
			/>
			<BasicButton
				color={"white"}
				size={"xmedium"}
				children={"후기 남기기"}
				style={{
					width: "124px",
					border: "1px solid #dddddd",
					fontSize: "16px",
					marginTop: "10px",
					borderRadius: "6px",
					fontWeight: "500",
				}}
				onClick={() => {
					setOpenReview(true);
				}}
			/>
		</ButtonsContainer>
	);
};
export default PurchasedButtons;

const ButtonsContainer = styled.div`
	${flexColumn}
	margin-bottom: 10px;
`;
