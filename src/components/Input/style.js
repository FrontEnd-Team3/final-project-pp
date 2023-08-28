import styled, { css } from "styled-components";

const variantCSS = {
	primary: css`
		border: none;
		border-bottom: 1.3px solid ${({ theme }) => theme.PALETTE.gray};
		padding: 8px 1px;
	`,
	bgBox: css`
		border: none;
		background-color: #f1f1f1;
	`,
	line: css`
		border: 1.3px solid ${({ theme }) => theme.PALETTE.gray};
	`,
	chat: css`
		border-radius: 8px;
		border: none;
		background-color: #f4f4f4;
	`,
};

const sizeCSS = {
	xsmall: css`
		width: 300px;
		padding: 8px;
		height: 40px;
	`,
	small: css`
		width: 340px;
		font-size: 11px;
	`,
	medium: css`
		width: 370px;
		font-size: 11px;
	`,
	full: css`
		width: 100%;
	`,
	chat: css`
		width: 300px;
		padding: 8px;
		height: 40px;
		@media ${({ theme }) => theme.DEVICE.tablet} {
			width: 240px;
			height: 40px;
		}
		@media ${({ theme }) => theme.DEVICE.mobile} {
			width: 270px;
			height: 40px;
		}
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
