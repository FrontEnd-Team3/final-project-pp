import BasicButton from "components/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexColumn } from "styles/common";

const ErrorPage = () => {
	const navigate = useNavigate();

	return (
		<S.Container>
			<S.Error>404PAGE</S.Error>
			<div>
				<BasicButton
					size={"medium"}
					color={"black"}
					onClick={() => navigate("/")}
					children={"메인으로 돌아가기"}
				/>
			</div>
		</S.Container>
	);
};

export default ErrorPage;

const Container = styled.div`
	${flexColumn};
	justify-content: center;
`;

const Error = styled.div`
	font-size: 300px;
	font-weight: bold;
	color: ${({ theme }) => theme.PALETTE.primary};
`;

const S = { Container, Error };
