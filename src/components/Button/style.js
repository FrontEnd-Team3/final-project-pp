import styled, { css } from "styled-components";
import { primaryFont } from "styles/common";

const variantCSS = {
	primary: css`
		background-color: ${({ theme }) => theme.PALETTE.primary["dark"]};
	`,
	secondary: css`
		background-color: ${({ theme }) => theme.PALETTE.secondary};
	`,
	white: css`
		background-color: ${({ theme }) => theme.PALETTE.white};
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
	mediumLarge: css`
		width: 340px;
		height: 45px;
	`,
	medium: css`
		width: 160px;
		height: 42px;
	`,
};

const Button = styled.button`
	${({ variant }) => variantCSS[variant]}
	${({ shape }) => shapeCSS[shape]}
    ${({ size }) => sizeCSS[size]}
    cursor: pointer;
	${primaryFont}
`;
export default Button;
