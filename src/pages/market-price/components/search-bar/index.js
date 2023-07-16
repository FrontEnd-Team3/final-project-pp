import BasicButton from "components/Button";
import styled from "styled-components";
import { primaryFont } from "styles/common";

const SearchBar = () => {
	return (
		<S.Container>
			<S.Search
				placeholder="원하는 물품을 검색해 보세요 :)"
				autofocus
			></S.Search>
			<BasicButton size={"small"} variant={"primary"} shape={"primary"}>
				Search
			</BasicButton>
			<S.MentWrapper>
				<p>최근 1개월 간</p>
				<p>검색하신 키워드의 실시간 시세 정보 입니다.</p>
				<p>만약 검색한 물건이 없다면 거래 종료 목록을 확인해 주세요</p>
			</S.MentWrapper>
		</S.Container>
	);
};
export default SearchBar;

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
	width: 700px;
	height: 340px;
	border-bottom: 2px solid #8a8a8a;
	${primaryFont}
	button {
		background-color: white;
		position: relative;
		border: none;
		top: 6px;
		width: 120px;
		border-radius: 30px;
		height: 38px;
		left: 574px;
		z-index: 10;
		font-size: 14px;
		color: #8490c8;
	}
`;
const Search = styled.input`
	position: relative;
	top: 50px;
	width: 700px;
	height: 50px;
	border: 1.5px solid #404040;
	border-radius: 60px;
	background-color: #e2e2fe;
	box-shadow: 1px 1px 1px 1px;
	font-size: 20px;
	padding-left: 20px;
	:focus {
		outline: none;
	}
	::placeholder {
		font-size: 17px;
		font-weight: 600;
		color: #404040;
	}
`;

const S = {
	Search,
	Container,
	MentWrapper,
};
