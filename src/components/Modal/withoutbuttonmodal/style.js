import styled, { css } from "styled-components";
const { flexColumn } = require("styles/common");

const backgroudCSS = {
	primary: css`
		position: absolute;
		width: 97%;
		top: 0%;
		height: 3156px;
		z-index: 1;
		background-color: rgba(255, 255, 255, 0.6);
	`,
	none: css`
		position: absolute;
		width: 97%;
		top: 0%;
		height: 3156px;
		z-index: 1;
		background-color: rgba(255, 255, 255, 0);
	`,
	gray: css`
		position: absolute;
		width: 97%;
		top: 0%;
		height: 3156px;
		z-index: 1;
		background-color: rgba(255, 255, 255, 0);
	`,
};

const subtitleCSS = {
	primary: css`
		font-size: 17px;
		color: ${({ theme }) => theme.PALETTE.darkPrimary};
		padding-top: 14px;
		font-weight: bold;
	`,
	small: css`
		font-size: 14px;
		color: ${({ theme }) => theme.PALETTE.darkPrimary};
		padding-top: 11px;
		font-weight: bold;
	`,
	xsmall: css`
		font-size: 9px;
		color: ${({ theme }) => theme.PALETTE.darkPrimary};
		padding-top: 6px;
		font-weight: bold;
	`,
};

const titleCSS = {
	primary: css`
		font-size: 38px;
		font-weight: bold;
		font-style: italic;
	`,

	small: css`
		font-size: 34px;
		font-weight: bold;
		font-style: italic;
	`,

	xsmall: css`
		font-size: 28px;
		font-weight: bold;
		font-style: italic;
	`,
};

const containerCSS = {
	primary: css`
		border: 2px solid ${({ theme }) => theme.PALETTE.black};
		border-radius: 10px;
		width: 500px;
		height: 168px;
		position: relative;
		left: 33%;
		top: 10%;
		padding-top: 30px;
		z-index: 1;
		${flexColumn}
		align-items: center;
		background-color: white;
	`,
	small: css`
		border: 2px solid ${({ theme }) => theme.PALETTE.black};
		border-radius: 8px;
		width: 450px;
		height: 118px;
		position: relative;
		/* left: 33%;
		top: 10%; */
		padding-top: 30px;
		z-index: 1;
		${flexColumn}
		align-items: center;
		background-color: white;
	`,
	xsmall: css`
		border: 2px solid ${({ theme }) => theme.PALETTE.black};
		border-radius: 6px;
		width: 400px;
		height: 68px;
		position: relative;
		/* left: 33%;
		top: 10%; */
		padding-top: 30px;
		z-index: 1;
		${flexColumn}
		align-items: center;
		background-color: white;
	`,
};

export const BackGround = styled.div`
	${({ background }) => backgroudCSS[background]}
`;

export const Subtitle = styled.div`
	${({ subtitle }) => subtitleCSS[subtitle]}
`;

export const Title = styled.div`
	${({ title }) => titleCSS[title]}
`;

export const Container = styled.div`
	${({ container }) => containerCSS[container]}
`;
