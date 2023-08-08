import styled from "styled-components";

const AlertModal = ({ message }) => {
	return (
		<S.Wrapper>
			<S.Container>{message}</S.Container>
		</S.Wrapper>
	);
};

export default AlertModal;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
`;

const Container = styled.div`
	width: 500px;
	height: 100px;
	z-index: 10000;
	position: relative;
	background-color: ${({ theme }) => theme.PALETTE.white};
	border-radius: 8px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	padding: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	font-weight: bold;
`;

const S = { Wrapper, Container };
