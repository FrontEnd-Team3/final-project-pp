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

const S = {
	Container,
	Wrapper,
	Title,
	Essential,
};
