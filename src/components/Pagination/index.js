import styled from "styled-components";
import { primaryFont } from "styles/common";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ totalData, dataLimit, page, setPage }) => {
	const pageCount = Math.ceil(totalData / dataLimit);

	return (
		<S.Container>
			<S.ControlBtn
				onClick={() => setPage(page - (page - 1))}
				disabled={page === 1}
			>
				<IoIosArrowBack color="white" size="15" />
				<IoIosArrowBack color="white" size="15" />
			</S.ControlBtn>
			<S.ControlBtn onClick={() => setPage(page - 1)} disabled={page === 1}>
				<IoIosArrowBack color="white" size="15" />
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
				<IoIosArrowForward color="white" size="15" />
			</S.ControlBtn>
			<S.ControlBtn
				onClick={() => setPage(page + (pageCount - page))}
				disabled={page === pageCount}
			>
				<IoIosArrowForward color="white" size="15" />
				<IoIosArrowForward color="white" size="15" />
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
	width: 34px;
	height: 34px;
	background-color: ${({ theme }) => theme.PALETTE.darkPrimary};
	${primaryFont}
	font-size: 24px;
	&[disabled] {
		background-color: ${({ theme }) => theme.PALETTE.gray};
	}
	line-height: 5px;
`;

const PageBtn = styled.button`
	border: 1px solid;
	border-color: ${({ theme }) => theme.PALETTE.primary};
	color: ${({ theme }) => theme.PALETTE.primary};
	width: 34px;
	height: 34px;
	margin: 0 7px;
	background-color: white;
	line-height: 33px;
	padding-left: 1px;
	${primaryFont}
	&[aria-current] {
		background-color: ${({ theme }) => theme.PALETTE.primary};
		transition-duration: 0.1s;
		color: ${({ theme }) => theme.PALETTE.white};
	}
`;

const S = { Container, ControlBtn, PageBtn };
