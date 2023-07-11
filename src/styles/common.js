/* 
  사용 예시 ex)
              const HeaderDiv = styled.div`
                ${flexCenter}` 

*/
import { css } from "styled-components";
import "@kfonts/neodgm";
// export const font = css`
// 	font-family: "Neo둥근모", "neodgm";
// `;
export const primaryFont = css`
	font-family: "Neo둥근모", "neodgm";
`;

export const color = css`
	color: #8490c8;
`;
export const flexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const flexColumn = css`
	display: flex;
	flex-direction: column;
`;
