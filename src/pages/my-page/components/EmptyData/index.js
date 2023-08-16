import BasicButton from "components/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter, flexColumn } from "styles/common";

const EmptyData = ({ text }) => {
	const navigate = useNavigate();
	const handleRegister = () => {
		navigate("/productRegister");
	};

	return (
		<>
			<S.Container>
				<p>{text}</p>
				<BasicButton
					color={"primary"}
					size={"medium"}
					children={"물품 등록하기"}
					style={{
						fontSize: "14px",
						height: "36px",
						borderRadius: "6px",
						fontWeight: "600",
						border: "1px solid #dddddd",
					}}
					onClick={handleRegister}
				/>
			</S.Container>
		</>
	);
};
export default EmptyData;

const Container = styled.div`
	width: 962px;
	margin: 0 auto;
	padding: 150px 0;
	display: flex;
	${flexColumn}
	${flexCenter}
	p {
		font-size: 24px;
		margin-bottom: 20px;
	}
`;

const S = {
	Container,
};
