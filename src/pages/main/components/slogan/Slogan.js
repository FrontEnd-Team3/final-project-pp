import styled from "styled-components";

const Slogan = () => {
	return (
		<S.Container>
			<S.TopBox>
				TRADE · REUSE · INNOVATE AND MAKE YOUR MOMENT . TRADE · REUSE · INNOVATE
				AND MAKE YOUR MOMENT
			</S.TopBox>
			<S.BottomBox>
				TRADE · REUSE · INNOVATE AND MAKE YOUR MOMENT . TRADE · REUSE · INNOVATE
				AND MAKE YOUR MOMENT
			</S.BottomBox>
		</S.Container>
	);
};

export default Slogan;

const Container = styled.div`
	margin: 20px 0;
	font-weight: 500;
	font-style: italic;
	font-size: 36px;
`;

const TopBox = styled.div`
	border-top: 2px solid;
	border-bottom: 2px solid;
	border-color: ${({ theme }) => theme.PALETTE.black};
	background-color: ${({ theme }) => theme.PALETTE.neon};
	overflow: hidden;
	white-space: nowrap;
`;

const BottomBox = styled.div`
	border-bottom: 2px solid;
	border-color: ${({ theme }) => theme.PALETTE.black};
	background-color: ${({ theme }) => theme.PALETTE.neon};
	overflow: hidden;
	white-space: nowrap;
`;

const S = { Container, TopBox, BottomBox };
