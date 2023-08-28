import BasicButton from "components/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter, flexColumn } from "styles/common";

const EmptyData = ({ text, field }) => {
	const navigate = useNavigate();
	const handleRegister = () => {
		navigate("/productRegister");
	};

	return (
		<>
			{field === "like" ? (
				<S.Container>
					<p>{text}</p>
					<BasicButton
						color={"primary"}
						size={"medium"}
						children={"메인 페이지로"}
						style={{
							fontSize: "14px",
							height: "36px",
							borderRadius: "6px",
							fontWeight: "600",
							border: "1px solid #dddddd",
						}}
						onClick={() => {
							navigate("/");
						}}
					/>
				</S.Container>
			) : (
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
			)}
		</>
	);
};
export default EmptyData;

const Container = styled.div`
	max-width: 962px;
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
