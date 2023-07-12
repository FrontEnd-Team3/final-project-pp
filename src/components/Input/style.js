import styled, { css } from "styled-components";
import { primaryFont } from "styles/common";

const variantCSS = {
	primary: css`
		border: none;
		border-bottom: 1.3px solid #d9d9d9;
		padding: 8px 1px;
		${primaryFont}
	`,
};

const sizeCSS = {
	medium: css`
		width: 500px;
		font-size: 13px;
	`,
};

const colorCSS = {
	primary: css`
		color: black;
	`,
};

const Input = styled.input`
	${({ variant }) => variantCSS[variant]}
	${({ size }) => sizeCSS[size]}
    ${({ color }) => colorCSS[color]}
	:focus {
		outline: none;
	}
	::placeholder {
		color: #c1c1c1;
	}
`;

export default Input;
