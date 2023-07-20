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
	small: css`
		width: 80px;
		height: 40px;
	`,
	mediumLarge: css`
		width: 340px;
		height: 45px;
	`,
	mediumSecond: css`
		width: 160px;
		height: 42px;
	`,
	xsmall: css`
		width: 62px;
		height: 21px;
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
