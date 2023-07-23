import styled, { css } from "styled-components";
const { flexColumn } = require("styles/common");

const backgroudCSS = {
	primary: css`
		background-color: rgba(255, 255, 255, 0.6);
	`,
	none: css`
		background-color: rgba(255, 255, 255, 0);
	`,
	gray: css`
		background-color: rgba(80, 80, 80, 0.2);
	`,
};

const subtitleCSS = {
	primary: css`
		font-size: 18px;
		padding-top: 14px;
	`,
	small: css`
		font-size: 14px;
		padding-top: 11px;
	`,
	xsmall: css`
		font-size: 9px;
		padding-top: 6px;
	`,
};

const titleCSS = {
	primary: css`
		font-size: 40px;
	`,

	small: css`
		font-size: 34px;
	`,

	xsmall: css`
		font-size: 28px;
	`,
};

const containerCSS = {
	primary: css`
		border: 2px solid ${({ theme }) => theme.PALETTE.black};
		border-radius: 10px;
		width: 500px;
		height: 168px;
		padding-top: 30px;
	`,
	small: css`
		border-radius: 8px;
		width: 450px;
		height: 118px;
		padding-top: 20px;
	`,
	xsmall: css`
		border-radius: 6px;
		width: 350px;
		height: 75px;
		padding-top: 7px;
	`,
};

const positionCSS = {
	primary: css`
		left: 36%;
		top: 25%;
	`,
	alignsmall: css`
		left: 36%;
		top: 30%;
	`,
	alignxsmall: css`
		left: 38%;
		top: 28%;
	`,
	lefttop: css`
		left: 18%;
		top: 22%;
	`,
	righttop: css`
		left: 61%;
		top: 22%;
	`,
	leftbottom: css`
		left: 18%;
		top: 50%;
	`,
	rightbottom: css`
		left: 61%;
		top: 50%;
	`,
};
export const BackGround = styled.div`
	${({ background }) => backgroudCSS[background]}
	position: fixed;
	width: 100%;
	top: 0%;
	height: 100vh;
	background-size: cover;
	z-index: 1;
`;

export const Subtitle = styled.div`
	${({ subtitle }) => subtitleCSS[subtitle]}
	color: ${({ theme }) => theme.PALETTE.darkPrimary};
	font-weight: bold;
`;

export const Title = styled.div`
	${({ title }) => titleCSS[title]}
	font-weight: bold;
	font-style: italic;
`;

export const Container = styled.div`
	${({ container }) => containerCSS[container]}
	${({ position }) => positionCSS[position]}
	position: relative;
	border: 2px solid ${({ theme }) => theme.PALETTE.black};
	z-index: 1;
	${flexColumn}
	align-items: center;
	background-color: white;
`;
