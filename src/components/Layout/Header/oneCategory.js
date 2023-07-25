import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Onecategory = ({ category, i, state, setState }) => {
	const navi = useNavigate();

	return (
		<div>
			<NavPage
				onClick={() => {
					navi(`${category.navigate}`);
					setState(i + 1);
				}}
				aria-current={state === i + 1 ? "page" : null}
				category={category}
			>
				{category.name}
			</NavPage>
		</div>
	);
};

export default Onecategory;
const NavPage = styled.div`
	cursor: pointer;
	:hover {
		color: ${({ theme }) => theme.PALETTE.darkPrimary};
	}
	&[aria-current] {
		color: ${({ theme }) => theme.PALETTE.darkPrimary};
	}
`;

const S = {
	NavPage,
};
