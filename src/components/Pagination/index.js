import styled from "styled-components";
import { primaryFont } from "styles/common";

const Pagination = ({ totalData, dataLimit, page, setPage }) => {
	const pageCount = Math.ceil(totalData / dataLimit);

	return (
		<S.Container>
			<S.ControlBtn onClick={() => setPage(page - 1)} disabled={page === 1}>
				{"<"}
			</S.ControlBtn>
			<div>
				{Array(pageCount)
					.fill()
					.map((_, i) => (
						<S.PageBtn
							key={i + 1}
							onClick={() => setPage(i + 1)}
							aria-current={page === i + 1 ? "page" : null}
						>
							{i + 1}
						</S.PageBtn>
					))}
			</div>
			<S.ControlBtn
				onClick={() => setPage(page + 1)}
				disabled={page === pageCount}
			>
				{">"}
			</S.ControlBtn>
		</S.Container>
	);
};

export default Pagination;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	margin: 16px;
`;

const ControlBtn = styled.button`
	border: none;
	background-color: white;
	${primaryFont}
	font-size: 24px;
	&[disabled] {
		background-color: ${({ theme }) => theme.PALETTE.disabled};
	}
`;

const PageBtn = styled.button`
	border: none;
	width: 30px;
	height: 30px;
	margin: 0 15px;
	background-color: white;
	line-height: 33px;
	padding-left: 1px;
	${primaryFont}
	&[aria-current] {
		background: ${({ theme }) => theme.PALETTE.primary};
		border-radius: 50%;
		transition-duration: 0.3s;
	}
`;

const S = { Container, ControlBtn, PageBtn };
