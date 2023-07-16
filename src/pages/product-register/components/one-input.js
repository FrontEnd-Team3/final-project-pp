import styled from "styled-components";
import { registerInput } from "styles/common";

const OneInput = ({ label, required, type, placeholder }) => {
	return (
		<S.InputBox>
			<S.Title>
				{label} {required && <S.Essential>*</S.Essential>}
			</S.Title>
			<S.Input type={type} placeholder={placeholder} />
		</S.InputBox>
	);
};

export default OneInput;

const InputBox = styled.div`
	position: relative;
`;

const Title = styled.p`
	position: absolute;
	top: 25px;
	z-index: 1;
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
`;

const Essential = styled.span`
	color: ${({ theme }) => theme.PALETTE.primary.dark};
`;

const Input = styled.input`
	${registerInput}
`;

const S = {
	InputBox,
	Title,
	Essential,
	Input,
};
