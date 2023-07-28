import styled from "styled-components";
import loading from "./loading.gif";
const Loading = () => {
	return (
		<div>
			<S.LoadingImg src={loading} />
		</div>
	);
};

export default Loading;

const LoadingImg = styled.img`
	width: 500px;
	height: 500px;
	margin: 0 auto;
`;

const S = { LoadingImg };
