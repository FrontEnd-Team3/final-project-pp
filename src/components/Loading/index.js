import styled from "styled-components";
import loading from "./loading.gif";
const Loading = () => {
	return (
		<S.Container>
			<S.LoadingImg src={loading} />
		</S.Container>
	);
};

export default Loading;

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const LoadingImg = styled.img`
	width: 200px;
	height: 200px;
`;

const S = { Container, LoadingImg };
