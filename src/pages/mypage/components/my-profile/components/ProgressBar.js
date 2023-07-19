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
	border: 1px solid black;
	width: 332px;
	height: 32px;
	background-color: white;
	margin-left: 16px;
`;

const Progress = styled.div`
	width: ${({ percentage }) => `${percentage}%`};
	background-color: ${({ theme }) => theme.PALETTE.primary};
	height: 30px;
`;
