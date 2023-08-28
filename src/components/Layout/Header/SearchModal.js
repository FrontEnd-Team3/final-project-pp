import styled from "styled-components";
import search from "assets/images/search.png";
const SearchModal = ({
	PlaceHolder,
	setIsOpen,
	handleSearchResult,
	searchInput,
}) => {
	return (
		<S.BackGround>
			<S.Form onSubmit={handleSearchResult}>
				<S.ModalSearchBar placeholder={PlaceHolder} ref={searchInput} />
				<S.ModalSearchicon
					src={search}
					onClick={handleSearchResult}
				></S.ModalSearchicon>
			</S.Form>
			<S.CloseButton onClick={() => setIsOpen(false)}>x</S.CloseButton>
		</S.BackGround>
	);
};
export default SearchModal;
const BackGround = styled.div`
	background-color: rgba(80, 80, 80, 0.5);
	position: fixed;
	left: 0%;
	max-width: 100%;
	width: 100%;
	top: 0%;
	height: 100vh;
	z-index: 1;
`;

const Form = styled.form`
	position: relative;
	margin-top: 200px;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
`;

const ModalSearchBar = styled.input`
	padding: 13px 0px 13px 5px;
	padding-left: 13px;
	width: 400px;
	position: relative;
	margin-top: 200px;
	left: 50%;
	transform: translate(-50%, -50%);
	border: none;
	border-radius: 10px;
	:focus {
		outline: none;
	}
	border-bottom: 1.5px solid ${({ theme }) => theme.PALETTE.black};
	::placeholder {
		color: black;
		font-size: 14px;
		font-weight: bold;
	}
`;

const ModalSearchicon = styled.img`
	width: 18px;
	cursor: pointer;
	position: absolute;
	bottom: 23px;
	right: 0;
	transform: translate(-50%, -50%);
`;

const CloseButton = styled.button`
	font-size: 25px;
	cursor: pointer;
	position: absolute;
	top: 2%;
	right: 0;
	transform: translate(-50%, -50%);
	border: none;
	color: white;
	background-color: transparent;
`;

const S = {
	Form,
	BackGround,
	CloseButton,
	ModalSearchicon,
	ModalSearchBar,
};
