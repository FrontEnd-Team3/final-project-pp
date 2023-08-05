import styled from "styled-components";
import Inputs from "./components/inputs";

const ProductRegister = () => {
	return (
		<S.Wrapper>
			<S.Container>
				<Inputs />
			</S.Container>
		</S.Wrapper>
	);
};

export default ProductRegister;

const Title = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.semimedium};
	font-weight: bold;
	position: absolute;
	top: 50px;
	z-index: 1;
	margin-left: 20px;
`;

const Essential = styled.span`
	color: ${({ theme }) => theme.PALETTE.primary};
`;

const Wrapper = styled.div`
	width: 100%;
`;

const Container = styled.div`
	margin: 50px auto;
	max-width: 900px;
`;

// const TitleAnother = styled.p`
// 	font-size: ${({ theme }) => theme.FONT_SIZE.semimedium};
// 	font-weight: bold;
// `;

// const SubmitBtns = styled.div`
// 	display: flex;
// 	justify-content: flex-end;
// 	button {
// 		margin-left: 20px;
// 		font-weight: bold;
// 		transition: background 0.1s;
// 		font-size: ${({ theme }) => theme.FONT_SIZE.small};
// 	}
// 	button:hover {
// 		background: rgba(60, 179, 113, 0.9);
// 	}

// 	button:last-of-type {
// 		color: ${({ theme }) => theme.PALETTE.primary};
// 		transition: background 0.1s;
// 	}
// 	button:last-of-type:hover {
// 		background: transparent;
// 	}
// `;

// const MapBox = styled.div`
// 	margin: 30px 0;
// `;

// const MapAddress = styled.p`
// 	font-size: 12px;
// 	color: gray;
// 	margin: 12px 0 20px 0;
// `;

const S = {
	Container,
	Wrapper,
	Title,
	Essential,
	// SubmitBtns,
	// MapBox,
	// TitleAnother,
	// MapAddress,
};
