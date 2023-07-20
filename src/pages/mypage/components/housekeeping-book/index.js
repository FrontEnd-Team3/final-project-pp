import BasicButton from "components/Button";
import styled from "styled-components";
import { flexCenter, flexColumn, flexRow, primaryFont } from "styles/common";

const HouseKeeping = () => {
	return (
		<S.Container>
			<S.RowBox>
				<S.Title>가계부</S.Title>
			</S.RowBox>
			<S.DivisionLine />
			<S.Title2>
				<ParentDiv>
					<p>총 판매 금액</p>
					<p>2,000,000 원</p>
				</ParentDiv>
				<ParentDiv>
					<p>총 지불 금액</p>
					<p>2,00,000 원</p>
				</ParentDiv>
			</S.Title2>
			<S.DivisionLine />
			<S.ProductContainer>
				<img src="#" />
				<div>
					<div>
						<S.Wrapper>
							<p></p>
							<div>
								<BasicButton
									variant={"white"}
									size={"xsmall"}
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
									size={"xsmall"}
									children={"삭제"}
									style={{
										fontSize: "14px",
										height: "28px",
										borderRadius: "6px",
										fontWeight: "600",
										marginLeft: "10px",
									}}
								/>
							</div>
						</S.Wrapper>
						<S.Wrapper2>
							<S.ToggleBox2>
								<p>토글메뉴임</p>
							</S.ToggleBox2>
							<S.Wrapper2>
								<p>350,000</p> <p>won</p>
							</S.Wrapper2>
						</S.Wrapper2>
					</div>
					<TextBox2>
						<p>상품 보러가기 〉</p>
					</TextBox2>
				</div>
			</S.ProductContainer>
		</S.Container>
	);
};
export default HouseKeeping;

const DivisionLine = styled.hr`
	width: 962px;
	height: 1px;
	background-color: #cccccc;
	margin-top: 30px;
`;

const Container = styled.div`
	display: flex;
	margin-bottom: 100px;
	${primaryFont}
	${flexColumn}
    ${flexCenter}
`;

const ProductContainer = styled.div`
	padding: 35px;
	margin-top: 30px;
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
	margin-top: 20px;
	font-size: 24px;
	font-weight: bold;
	color: black;
`;
const Title2 = styled.div`
	margin-top: 67px;
	margin-bottom: 44px;
	font-size: 24px;
	font-weight: bold;
	color: black;
	width: 100%;
	${flexColumn}
	${flexCenter}
`;
const ParentDiv = styled.div`
	${flexRow}
	p:first-of-type {
		text-align: left;
		width: 200px;
	}
	p:nth-of-type(2) {
		text-align: right;
		width: 170px;
	}
	margin-top: 20px;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	${flexRow}
	display: flex;
	justify-content: space-between;
	width: 660px;
`;
const Wrapper2 = styled.div`
	margin-left: 30px;
	${flexRow}
	width: 660px;
`;

const RowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${flexRow}
`;

const TextBox2 = styled.div`
	position: relative;
	left: 585px;
	top: 124px;
`;

const ToggleBox = styled.div`
	margin-top: 50px;
`;
const ToggleBox2 = styled.div`
	width: 105px;
	height: 32px;
`;

const S = {
	DivisionLine,
	Title,
	Title2,
	Container,
	ProductContainer,
	Wrapper,
	Wrapper2,
	RowBox,
	ToggleBox,
	ToggleBox2,
};
