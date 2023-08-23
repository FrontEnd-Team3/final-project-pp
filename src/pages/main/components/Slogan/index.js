import styled, { keyframes } from "styled-components";

const Slogan = () => {
	return (
		<S.Container>
			<S.TopBox>
				<S.TopText>
					{"TRADE · REUSE · INNOVATE AND MAKE YOUR MOMENT .".repeat(10)}
				</S.TopText>
			</S.TopBox>
			<S.BottomBox>
				<S.BottomText>
					{"TRADE · REUSE · INNOVATE AND MAKE YOUR MOMENT .".repeat(10)}
				</S.BottomText>
			</S.BottomBox>
		</S.Container>
	);
};

export default Slogan;

const Container = styled.div`
	margin: 90px 0;
	font-weight: 600;
	font-style: italic;
	font-size: 36px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin: 60px 0;
		font-size: 24px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin: 30px 0;
		font-size: 24px;
	}
`;

const moveToLeft = keyframes`
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-100%);
	}
`;

const moveToRight = keyframes`
0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(0);
	}
`;

const TopBox = styled.div`
	border-top: 2px solid;
	border-bottom: 2px solid;
	border-color: ${({ theme }) => theme.PALETTE.black};
	background-color: ${({ theme }) => theme.PALETTE.neon};
	overflow: hidden;
	white-space: nowrap;
`;

const TopText = styled.div`
	animation: ${moveToLeft} 125s linear infinite;
`;

const BottomBox = styled.div`
	border-bottom: 2px solid;
	border-color: ${({ theme }) => theme.PALETTE.black};
	background-color: ${({ theme }) => theme.PALETTE.neon};
	overflow: hidden;
	white-space: nowrap;
`;

const BottomText = styled.div`
	animation: ${moveToRight} 125s linear infinite;
`;

const S = { Container, TopBox, BottomBox, TopText, BottomText };
