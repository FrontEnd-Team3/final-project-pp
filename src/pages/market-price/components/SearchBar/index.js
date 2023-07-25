import styled from "styled-components";
import { flexColumn, primaryFont } from "styles/common";

const SearchBar = () => {
	return (
		<S.Container>
			<S.Title>시세조회</S.Title>
			<S.Subtitle>원하시는 상품이 얼마에 거래되고 있는지 알아보세요</S.Subtitle>
			<div>
				<S.Search placeholder="나이키 조던" autofocus></S.Search>
				<S.SearchBtn>Search</S.SearchBtn>
			</div>
		</S.Container>
	);
};
export default SearchBar;
const Subtitle = styled.div`
	font-size: 18px;
	color: #5a5a5a;
	font-weight: 600;
	position: relative;
	top: 15px;
`;
const Title = styled.div`
	font-size: 26px;
	font-weight: 600;
	color: ${({ theme }) => theme.PALETTE.black};
`;
const SearchBtn = styled.div`
	z-index: 1;
	position: relative;
	left: 480px;
	top: 15px;
	color: ${({ theme }) => theme.PALETTE.primary};
	font-weight: 600;
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
	height: 200px;
	${primaryFont}
	${flexColumn}
	align-items: center;
	position: relative;
	top: 150px;
`;
const Search = styled.input`
	position: relative;
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
	Container,
	MentWrapper,
	SearchBtn,
	Title,
	Subtitle,
};
