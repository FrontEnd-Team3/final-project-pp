import SearchModal from "components/Layout/Header/SearchModal";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexColumn } from "styles/common";

const SearchBar = () => {
	const searchInput = useRef();
	const modalSearchInput = useRef();
	const navigate = useNavigate();

	const [isOpen, setIsOpen] = useState(false);
	const PlaceHolder = "나이키 조던";
	const handleMarketPriceResult = e => {
		e.preventDefault();
		const searchValue = searchInput.current.value;
		const keyword = searchValue.replace(/\s/g, ""); // 띄어쓰기 막기
		if (keyword === "") return; // 빈값 막기
		navigate(`/marketPrice/${keyword}`);
		searchInput.current.value = "";
	};

	const handleSearchResult = e => {
		e.preventDefault();
		const searchValue = modalSearchInput.current.value;
		const keyword = searchValue.replace(/\s/g, ""); // 띄어쓰기 막기
		if (keyword === "") return; // 빈값 막기
		navigate(`/marketPrice/${keyword}`);
		modalSearchInput.current.value = "";
		setIsOpen(false);
	};

	return (
		<S.Container>
			<S.Title>시세조회</S.Title>
			<S.Subtitle>원하시는 상품이 얼마에 거래되고 있는지 알아보세요</S.Subtitle>
			<S.Form onSubmit={handleMarketPriceResult}>
				<S.Search
					ref={searchInput}
					placeholder="나이키 조던"
					autofocus
				></S.Search>
				<S.SearchBtn onClick={handleMarketPriceResult}>Search</S.SearchBtn>
			</S.Form>
			<ModalSearchBtn onClick={() => setIsOpen(true)}>Search</ModalSearchBtn>
			{isOpen && (
				<SearchModal
					PlaceHolder={PlaceHolder}
					setIsOpen={setIsOpen}
					handleSearchResult={handleSearchResult}
					searchInput={modalSearchInput}
				/>
			)}
		</S.Container>
	);
};
export default SearchBar;

const ModalSearchBtn = styled.div`
	color: ${({ theme }) => theme.PALETTE.primary};
	font-weight: 600;
	margin-right: 4px;
	margin-top: 15px;
	border: 2px solid ${({ theme }) => theme.PALETTE.primary};
	border-radius: 10px;
	padding: 5px 8px 5px 8px;
	font-size: 25px;
	cursor: pointer;
	display: none;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		display: block;
		font-size: 18px;
	}
`;

const Subtitle = styled.div`
	font-size: 18px;
	color: #5a5a5a;
	font-weight: 500;
	margin-bottom: 20px;
	@media ${({ theme }) => theme.DEVICE.pc} {
		font-size: 17px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		font-size: 16px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: 15px;
	}
`;
const Title = styled.div`
	font-size: 26px;
	font-weight: 700;
	color: ${({ theme }) => theme.PALETTE.black};
	margin-bottom: 20px;
	@media ${({ theme }) => theme.DEVICE.pc} {
		font-size: 25px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		font-size: 24px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: 23px;
	}
`;
const SearchBtn = styled.div`
	z-index: 1;
	position: absolute;
	right: 20px;
	top: 16px;
	color: ${({ theme }) => theme.PALETTE.primary};
	font-weight: 600;
	cursor: pointer;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		display: none;
	}
`;
const MentWrapper = styled.div`
	font-size: 19px;
	position: relative;
	top: 80px;
	left: 70px;
	p:nth-child(2) {
		padding-top: 22px;
		padding-left: 14px;
	}
	p:nth-child(3) {
		padding-top: 5px;
		padding-left: 14px;
	}
`;

const Container = styled.div`
	width: 100%;
	${flexColumn}
	align-items: center;
	margin: 70px auto;
`;

const Form = styled.form`
	position: relative;
`;
const Search = styled.input`
	top: 50px;
	width: 553px;
	height: 50px;
	border: 1.5px solid #e0e0e0;
	border-radius: 60px;
	font-size: 20px;
	padding-left: 20px;
	:focus {
		outline: none;
	}
	::placeholder {
		font-size: 17px;
		color: #858585;
	}
	@media ${({ theme }) => theme.DEVICE.pc} {
		width: 480px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 400px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		display: none;
	}
`;

const S = {
	Search,
	Form,
	Container,
	MentWrapper,
	SearchBtn,
	Title,
	Subtitle,
};
