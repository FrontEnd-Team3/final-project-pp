import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
	const navigate = useNavigate();

	return (
		<div>
			<S.Error>404PAGE</S.Error>
			<div>
				<button onClick={() => navigate("/")}>메인으로 돌아가기</button>
			</div>
		</div>
	);
};

export default ErrorPage;

const Error = styled.div`
	font-size: 500px;
	font-weight: bold;
	color: ${({ theme }) => theme.PALETTE.primary};
`;

const S = { Error };
