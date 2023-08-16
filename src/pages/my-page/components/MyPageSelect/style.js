import styled, { css } from "styled-components";

const variantCSS = {
	primary: css`
		border-bottom: 1px solid #ddd;
	`,
	bgfill: css`
		border-bottom: 1px solid #ddd;
		background-color: ${({ theme }) => theme.PALETTE.primary};
		color: white;
		border-radius: 4px;
	`,
};

export const Wrapper = styled.div`
	position: relative;
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 120px;
	height: 40px;
	padding: 1rem;
	border: 1px solid #ddd;
	cursor: pointer;
	border-radius: 4px;
	${({ variant }) => variantCSS[variant]}
`;

export const Select = styled.ul`
	position: absolute;
	z-index: 1;
	width: 120px;
	border-radius: 4px;
	margin-top: 10px;
	border: 1px solid #ddd;
	background-color: rgba(255, 255, 255, 0.8);
	${({ variant }) => variantCSS[variant]}
`;

export const OneSelect = styled.li`
	color: #222;
	cursor: pointer;
	text-align: center;
	padding: 0.5rem 0;
	transition: all 0.1s;
	border-bottom: 1px solid #ddd;

	:last-of-type {
		border: none;
	}
	:hover {
		font-weight: bold;
		background-color: rgba(238, 238, 238, 0.8);
		color: ${({ theme }) => theme.PALETTE.darkBlack};
	}
	${({ variant }) => variantCSS[variant]}
`;
