import BasicButton from "components/Button";
import styled from "styled-components";
import { flexCenter, flexColumn, flexRow, primaryFont } from "styles/common";

const SalesDetail = () => {
	return (
		<S.Container>
			<S.RowBox>
				<S.Title>등록 상품</S.Title>
				<ToggleBox>토글메뉴 만들거잉</ToggleBox>
			</S.RowBox>
			<ProductContainer>
				<img src="#" />
				<Wrapper>
					<p>product설명</p>
					<div>
						<BasicButton
							variant={"white"}
							size={"small"}
							children={"수정"}
							style={{
								fontSize: "14px",
								height: "28px",
								borderRadius: "6px",
								fontWeight: "600",
							}}
						/>
						<BasicButton
							variant={"primary"}
							size={"small"}
							children={"삭제"}
							style={{
								fontSize: "14px",
								height: "28px",
								borderRadius: "6px",
								fontWeight: "600",
							}}
						/>
					</div>
				</Wrapper>
				<div>
					<div>토글메뉴 만들거임</div>
					<p>350,000</p> <p>won</p>
				</div>
			</ProductContainer>
		</S.Container>
	);
};
export default SalesDetail;

const Container = styled.div`
	display: flex;
	margin-bottom: 100px;
	${primaryFont}
	${flexColumn}
    ${flexCenter}
`;

const ProductContainer = styled.div`
	padding: 35px;
	width: 962px;
	height: 270px;
	background-color: pink;
	border: 1px solid #b6b6b6;
	border-radius: 6px;
	${flexRow}
	img {
		width: 200px;
		height: 200px;
		border-radius: 6px;
		overflow: hidden;
	}
`;

const Title = styled.div`
	margin-top: 50px;
	font-size: 24px;
	font-weight: bold;
	color: black;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	${flexRow}
	justify-content: space-between;
	width: 100%; // 100% 너비 설정
	align-items: center; // 세로축 방향으로 가운데 정렬
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
