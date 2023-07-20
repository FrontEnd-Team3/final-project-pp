import styled from "styled-components";

const Pagenation = ({ total, limit, page, setPage }) => {
	const numPage = Math.ceil(total / limit);
	return (
		<>
			<Nav>
				<NavButton
					onClick={() => setPage(page - (page - 1))}
					disabled={page === 1}
				>
					&lt;&lt;
				</NavButton>
				<NavButton onClick={() => setPage(page - 1)} disabled={page === 1}>
					&lt;
				</NavButton>
				{Array(numPage)
					.fill()
					.map((_, i) => (
						<Button
							key={i + 1}
							onClick={() => setPage(i + 1)}
							aria-current={page === i + 1 ? "page" : null}
						>
							{i + 1}
						</Button>
					))}
				<NavButton
					onClick={() => setPage(page + 1)}
					disabled={page === numPage}
				>
					&gt;
				</NavButton>
				<NavButton
					onClick={() => setPage(page + (numPage - page))}
					disabled={page === numPage}
				>
					&gt;&gt;
				</NavButton>
			</Nav>
		</>
	);
};
export default Pagenation;
const NavButton = styled.button`
	width: 34px;
	height: 34px;
	margin: 5px;
	cursor: pointer;
	font-weight: bold;
	border: none;
	color: ${({ theme }) => theme.PALETTE.white};
	background-color: ${({ theme }) => theme.PALETTE.darkPrimary};
	&[disabled] {
		background-color: ${({ theme }) => theme.PALETTE.gray};
		border: none;
		cursor: revert;
		color: ${({ theme }) => theme.PALETTE.white};
	}
`;

const Nav = styled.nav`
	position: relative;
	top: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	width: 34px;
	height: 34px;
	border: 1px solid ${({ theme }) => theme.PALETTE.primary};
	margin: 13px;
	cursor: pointer;
	font-weight: bold;
	color: ${({ theme }) => theme.PALETTE.primary};
	background-color: white;

	&[aria-current] {
		background-color: ${({ theme }) => theme.PALETTE.primary};
		color: white;
	}
`;

const S = {
	Nav,
	Button,
};
