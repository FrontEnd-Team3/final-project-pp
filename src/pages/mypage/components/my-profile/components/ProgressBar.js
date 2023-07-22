import styled from "styled-components";

const ProgressBar = ({ percentage }) => {
	return (
		<Container>
			<Progress percentage={percentage} />
		</Container>
	);
};

export default ProgressBar;

const Container = styled.div`
	border: none;
	border-radius: 8px;
	width: 332px;
	height: 32px;
	background-color: #e9e9e9;
	margin-left: 20px;
`;

const Progress = styled.div`
	width: ${({ percentage }) => `${percentage}%`};
	background-color: ${({ theme }) => theme.PALETTE.primary};
	height: 30px;
	border-radius: 8px;
`;
