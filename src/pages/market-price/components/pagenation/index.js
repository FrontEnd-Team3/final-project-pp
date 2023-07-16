import styled from "styled-components";

const Pagenation = ({ total, limit, page, setPage }) => {
	const numPage = Math.ceil(total / limit);
	return (
		<>
			<Nav>
				<Button onClick={() => setPage(page - 1)} disabled={page === 1}>
					&lt;
				</Button>
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
				<Button onClick={() => setPage(page + 1)} disabled={page === numPage}>
					&gt;
				</Button>
			</Nav>
		</>
	);
};
export default Pagenation;

const Nav = styled.nav`
	position: relative;
	top: 110px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	border: none;
	margin: 20px;
	cursor: pointer;
	font-weight: bold;
	background-color: white;
	:hover {
		background-color: #e2e2fe;
	}
	&[disabled] {
		background-color: white;
		cursor: revert;
	}

	&[aria-current] {
		background-color: #e2e2fe;
	}
`;

const S = {
	Nav,
	Button,
};
