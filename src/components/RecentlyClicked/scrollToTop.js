import { useState } from "react";
import styled from "styled-components";

const ScrollToTop = () => {
	const [scrollY, setScrollY] = useState(0);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		setScrollY(0);
	};
	return (
		<>
			<S.ScollBtn onClick={handleScrollToTop}>TOP</S.ScollBtn>
		</>
	);
};

export default ScrollToTop;

const ScollBtn = styled.div`
	font-weight: 500;
	border-top: 1px solid;
	border-color: ${({ theme }) => theme.PALETTE.primary};
	line-height: 45px;
	cursor: pointer;
`;

const S = { ScollBtn };
