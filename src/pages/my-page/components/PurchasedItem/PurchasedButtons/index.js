import BasicButton from "components/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexColumn } from "styles/common";

const PurchasedButtons = ({
	openReview,
	setOpenReview,
	reviewExists,
	poductIdx,
	setOpenOnReview,
}) => {
	const navigate = useNavigate();
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleReview = () => {
		setOpenOnReview(false);
		setOpenReview(true);
		setTimeout(() => {
			window.scrollTo(0, 530);
		}, 0);
	};
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
				onClick={handleReview}
			/>
		</ButtonsContainer>
	);
};
export default PurchasedButtons;

const ButtonsContainer = styled.div`
	${flexColumn}
	margin-bottom: 10px;
`;
