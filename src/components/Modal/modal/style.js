import styled, { css } from "styled-components";
import { flexColumn } from "styles/common";

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

const containerCSS = {
	primary: css`
		border: 2px solid ${({ theme }) => theme.PALETTE.black};
		border-radius: 10px;
		width: 500px;
		height: 168px;
		padding-top: 5px;
	`,
	small: css`
		border: 2px solid ${({ theme }) => theme.PALETTE.black};
		border-radius: 8px;
		width: 450px;
		height: 138px;
		padding-top: 1px;
	`,
	xsmall: css`
		border: 2px solid ${({ theme }) => theme.PALETTE.black};
		border-radius: 6px;
		width: 400px;
		height: 120px;
		padding-top: -12px;
	`,
};

const closeCSS = {
	primary: css`
		left: 230px;
		font-size: 16px;
	`,
	small: css`
		left: 205px;
		font-size: 13px;
	`,
	xsmall: css`
		left: 185px;
		font-size: 11px;
	`,
};

const titleCSS = {
	primary: css`
		font-size: 33px;
	`,
	small: css`
		font-size: 31px;
	`,
	xsmall: css`
		font-size: 28px;
	`,
};

const subtitleCSS = {
	primary: css`
		font-size: 15px;
		padding-top: 5px;
	`,
	small: css`
		font-size: 13px;
		padding-top: 5px;
	`,
	xsmall: css`
		font-size: 12px;
		padding-top: 5px;
	`,
};

const buttonCSS = {
	primary: css`
		width: 250px;
		height: 30px;
		position: relative;
		top: 18px;
		padding-top: 4px;
	`,
	small: css`
		width: 230px;
		height: 23px;
		position: relative;
		top: 10px;
		padding-top: 4px;
		font-size: 12px;
	`,
	xsmall: css`
		width: 190px;
		height: 21px;
		position: relative;
		top: 7px;
		padding-top: 3px;
		font-size: 11px;
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

export const Close = styled.div`
	${({ closebtn }) => closeCSS[closebtn]}
	cursor: pointer;
	position: relative;
	font-weight: bold;
`;

export const Button = styled.div`
	${({ button }) => buttonCSS[button]}
	background-color: ${({ theme }) => theme.PALETTE.black};
	color: white;
	border: none;
	cursor: pointer;
	${flexColumn}
	align-items: center;
`;

export const BackGround = styled.div`
	${({ background }) => backgroudCSS[background]}
	position: fixed;
	left: 0%;
	width: 100%;
	top: 0%;
	height: 100vh;
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
	top: 29%;
	left: 35.5%;
	z-index: 1;
	${flexColumn}
	align-items: center;
	background-color: white;
`;
