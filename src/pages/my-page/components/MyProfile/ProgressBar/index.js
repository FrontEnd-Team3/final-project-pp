import styled from "styled-components";

const ProgressBar = ({ percentage }) => {
	return (
		<S.Container>
			<S.Progress percentage={percentage} />
		</S.Container>
	);
};

export default ProgressBar;

const Container = styled.div`
	border: none;
	border-radius: 8px;
	width: 100%;
	height: 32px;
	background-color: #e9e9e9;
	margin-left: 20px;
	transition: width 0.2s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		width: 100%;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 90%;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 80%;
	}
`;

const Progress = styled.div`
	width: ${({ percentage }) => `${Math.min(percentage, 100)}%`};
	background-color: ${({ theme }) => theme.PALETTE.primary};
	height: 30px;
	border-radius: 8px;
`;

const S = {
	Container,
	Progress,
};
