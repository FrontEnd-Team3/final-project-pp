import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexColumn } from "styles/common";

const SearchBar = () => {
	const searchInput = useRef();
	const navigate = useNavigate();

	const handleMarketPriceResult = e => {
		e.preventDefault();
		const searchValue = searchInput.current.value;
		const keyword = searchValue.replace(/\s/g, ""); // 띄어쓰기 막기
		if (keyword === "") return; // 빈값 막기
		navigate(`/marketPrice/${keyword}`);
		searchInput.current.value = "";
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
		</S.Container>
	);
};
export default SearchBar;
const Subtitle = styled.div`
	font-size: 18px;
	color: #5a5a5a;
	font-weight: 500;
	margin-bottom: 20px;
`;
const Title = styled.div`
	font-size: 26px;
	font-weight: 700;
	color: ${({ theme }) => theme.PALETTE.black};
	margin-bottom: 20px;
`;
const SearchBtn = styled.div`
	z-index: 1;
	position: absolute;
	right: 20px;
	top: 16px;
	color: ${({ theme }) => theme.PALETTE.primary};
	font-weight: 600;
	cursor: pointer;
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
	width: 553px;
	${flexColumn}
	align-items: center;
	margin: 150px 0 50px 0;
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
