import styled, { css } from "styled-components";
import { primaryFont } from "styles/common";

const variantCSS = {
	primary: css`
		border: none;
		border-bottom: 1.3px solid ${({ theme }) => theme.PALETTE.gray};
		padding: 8px 1px;
		${primaryFont}
	`,
	bgBox: css`
		border: none;
		background-color: #f1f1f1;
	`,
	line: css`
		border: 1.3px solid ${({ theme }) => theme.PALETTE.gray};
	`,
};

const sizeCSS = {
	medium: css`
		width: 500px;
		font-size: 13px;
	`,
	full: css`
		width: 100%;
	`,
};

const colorCSS = {
	primary: css`
		color: ${({ theme }) => theme.PALETTE.black};
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
