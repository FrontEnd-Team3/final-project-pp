import BasicButton from "components/Button";
import styled from "styled-components";
import { flexCenter, flexColumn, flexRow, primaryFont } from "styles/common";
import EmptyData from "../empty-data";
import StatusEndProductList from "../register-product/components/StatusEndProductList";

/**
 *
 * 호버시 쉐도우 주는거 적용해야함
 *
 */

const InterestProduct = ({ productList, productListStatusEnd }) => {
	console.log(productList);
	if (productList && productList.length > 0) {
		return (
			<S.Container>
				<S.RowBox>
					<S.Title>거래 내역</S.Title>
					<S.ToggleBox>
						<div>토글메뉴</div>
					</S.ToggleBox>
				</S.RowBox>
				<S.DivisionLine />
				{productList.map(product => (
					<S.ProductContainer key={product.id}>
						<img src={product.image[2]} />
						<div>
							<div>
								<S.Wrapper>
									<p>{product.name}</p>
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
										<p>토글메뉴</p>
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
				))}
				<StatusEndProductList productListStatusEnd={productListStatusEnd} />
			</S.Container>
		);
	} else {
		<EmptyData />;
	}
};
export default InterestProduct;

const DivisionLine = styled.hr`
	width: 962px;
	height: 1px;
	background-color: #cccccc;
	margin-top: 30px;
`;

const Container = styled.div`
	display: flex;
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
	margin-top: 50px;
	font-size: 24px;
	font-weight: bold;
	color: black;
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
	width: 105px;
	height: 32px;
	background: pink;
`;
const ToggleBox2 = styled.div`
	width: 105px;
	height: 32px;
`;

const S = {
	DivisionLine,
	Title,
	Container,
	ProductContainer,
	Wrapper,
	Wrapper2,
	RowBox,
	ToggleBox,
	ToggleBox2,
};
