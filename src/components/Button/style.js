import styled, { css } from "styled-components";

const variantCSS = {
	primary: css`
		background-color: ${({ theme }) => theme.PALETTE.primary["dark"]};
	`,
};

const shapeCSS = {
	primary: css`
		border-radius: 12px;
	`,
};

const sizeCSS = {
	large: css`
		width: 500px;
		height: 56px;
	`,
	small: css`
		width: 80px;
		height: 40px;
	`,
};

const Button = styled.button`
	${({ variant }) => variantCSS[variant]}
	${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
    cursor: pointer;
`;
export default Button;
