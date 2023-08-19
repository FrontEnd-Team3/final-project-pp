import styled, { css } from "styled-components";

const colorCSS = {
	primary: css`
		background-color: ${({ theme }) => theme.PALETTE.primary};
		border: none;
		color: ${({ theme }) => theme.PALETTE.white};
	`,
	black: css`
		background-color: ${({ theme }) => theme.PALETTE.black};
		border: none;
		color: ${({ theme }) => theme.PALETTE.white};
	`,
	darkBlack: css`
		background-color: ${({ theme }) => theme.PALETTE.darkBlack};
		border: none;
		color: ${({ theme }) => theme.PALETTE.white};
	`,
	gray: css`
		background-color: ${({ theme }) => theme.PALETTE.gray};
		border: none;
	`,
	white: css`
		background-color: ${({ theme }) => theme.PALETTE.white};
		border: 1px solid;
		border-color: ${({ theme }) => theme.PALETTE.primary};
	`,
};

const sizeCSS = {
	primary: css`
		padding: 6px 10px;
	`,
	xmedium: css`
		width: 100px;
		padding: 8px;
		height: 40px;
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
	mediumThird: css`
		width: 344px;
		height: 50px;
	`,
	mediumfourth: css`
		width: 370px;
		height: 45px;
	`,
	xsmall: css`
		width: 59px;
		height: 28px;
		font-size: 14px;
	`,
	xxsmall: css`
		width: 100px;
		height: 50px;
	`,
	xxmedium: css`
		width: 120px;
		height: 50px;
	`,
	account: css`
		width: 70px;
		height: 30px;
	`,
	bookmark: css`
		width: 70px;
		height: 50px;
		@media ${({ theme }) => theme.DEVICE.tablet} {
			width: 84px;
			height: 60px;
		}
	`,
	chat: css`
		width: 344px;
		height: 50px;
		@media ${({ theme }) => theme.DEVICE.tablet} {
			width: 440px;
			height: 60px;
			font-size: 24px;
			font-weight: bold;
		}
	`,
	seller: css`
		width: 120px;
		height: 50px;
		@media ${({ theme }) => theme.DEVICE.tablet} {
			width: 160px;
			height: 60px;
		}
	`,
};

const Button = styled.button`
	${({ size }) => sizeCSS[size]}
	${({ color }) => colorCSS[color]}
    cursor: pointer;
`;
export default Button;
