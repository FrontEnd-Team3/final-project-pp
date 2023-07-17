import BasicButton from "components/Button";
import styled from "styled-components";

const ButtonContainer = () => {
	return (
		<>
			<S.ProductButtons>
				<BasicButton
					variant={"gray"}
					size={"mediumSecond"}
					children={"❤ Like"}
					style={{
						fontSize: "20px",
						border: "3px solid #404040",
					}}
				/>
			</S.ProductButtons>
			<div>
				<BasicButton
					variant={"black"}
					size={"mediumLarge"}
					children={"채팅"}
					style={{
						color: "#ffffff",
						fontSize: "20px",
						border: "3px solid #404040",
						letterSpacing: "5px",
					}}
				/>
			</div>
		</>
	);
};

export default ButtonContainer;

const ProductButtons = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 30px 0;
`;

const S = { ProductButtons };
