import styled from "styled-components";

const SearchBarModal = () => {
	return (
		<>
			<BackGround>
				<SearchBar placeholder="입력하세요"></SearchBar>
			</BackGround>
		</>
	);
};
const BackGround = styled.div`
	background-color: rgba(80, 80, 80, 0.5);
	position: fixed;
	left: 0%;
	width: 100%;
	top: 0%;
	height: 100vh;
	z-index: 1;
`;
const SearchBar = styled.input`
	margin-top: 10px;
	padding-bottom: 6px;
	width: 450px;
	border: none;
	padding-left: 5px;
	:focus {
		outline: none;
	}
	border-bottom: 1.5px solid ${({ theme }) => theme.PALETTE.black};
	::placeholder {
		color: black;
		font-size: 14px;
	}
`;
export default SearchBarModal;
