/* 
  사용 예시 ex)
              const HeaderDiv = styled.div`
                ${flexCenter}` 

*/
import { css } from "styled-components";

import { css } from "styled-components";

export const flexCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const flexColumn = css`
	display: flex;
	flex-direction: column;
`;

export const primaryFont = css`
	font-family: "Neo둥근모", "neodgm";
`;
