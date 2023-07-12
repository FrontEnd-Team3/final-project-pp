import styled, { css } from "styled-components";

const variantCSS = {
	primary: css`
		background-color: ${({ theme }) => theme.PALETTE.primary["dark"]};
	`,
	secondary: css`
		background-color: ${({ theme }) => theme.PALETTE.secondary};
	`,
	light: css`
		background-color: ${({ theme }) => theme.PALETTE.primary["light"]};
	`,
};

const shapeCSS = {
	primary: css`
		border-radius: 12px;
	`,
	medium: css`
		border-radius: 16px;
		font-size: ${({ theme }) => theme.FONT_SIZE.xsmedium};
	`,
};

const sizeCSS = {
	primary: css`
		padding: 6px 10px;
	`,
	medium: css`
		width: 140px;
		height: 50px;
	`,
	large: css`
		width: 500px;
		height: 56px;
	`,
};

const Button = styled.button`
	${({ variant }) => variantCSS[variant]}
	${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
    cursor: pointer;
`;
export default Button;
