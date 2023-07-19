import styled from "styled-components";
import { flexRow, primaryFont } from "styles/common";

const SalesDetail = () => {
	return (
		<S.Container>
			<S.RowBox>
				<S.Title>등록 상품</S.Title>
				<ToggleBox>토글메뉴 만들거잉</ToggleBox>
			</S.RowBox>
			<div>
				<img src="#" />
			</div>
		</S.Container>
	);
};
export default SalesDetail;

const Container = styled.div`
	display: flex;
	margin-bottom: 100px;
	${primaryFont}
`;

const Title = styled.div`
	margin-top: 50px;
	font-size: 24px;
	font-weight: bold;
	color: black;
`;

const RowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${flexRow}
`;

const ToggleBox = styled.div`
	margin-top: 50px;
`;

const S = { Title, Container, RowBox };
