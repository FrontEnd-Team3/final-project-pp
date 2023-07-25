import BasicButton from "components/Button";
import BasicSelect from "components/Select";
import styled from "styled-components";
import { flexCenter, flexColumn, flexRow, primaryFont } from "styles/common";

/**
 *
 * 완료 상품 css 적용해야함
 * 호버시 쉐도우 주는거 적용해야함
 *
 */
const StatusEndProductList = ({ productListStatusEnd }) => {
	const sideOptions = [
		{ value: "판매중", label: "판매중" },
		{ value: "거래중", label: "거래중" },
		{ value: "판매완료", label: "판매완료" },
	];
	if (productListStatusEnd && productListStatusEnd.length > 0) {
		return (
			<S.Container>
				{productListStatusEnd.map(product => (
					<S.ProductContainer key={product.id}>
						<img src={product.image[0]} />
						<div>
							<div>
								<S.Wrapper>
									<S.TextP1>{product.name}</S.TextP1>
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
												border: "1px solid #dddddd",
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
										<BasicSelect
											variant={"primary"}
											options={sideOptions}
											selectedValue={"판매완료"}
											style={{ border: "1px solid #dddddd" }}
										/>
									</S.ToggleBox2>
									<S.Wrapper2>
										<S.TextP1>{product.price}won</S.TextP1>
									</S.Wrapper2>
								</S.Wrapper2>
							</div>
							<TextBox2>
								<p>상품 보러가기 〉</p>
							</TextBox2>
						</div>
					</S.ProductContainer>
				))}
				<StatusEndProductList />
			</S.Container>
		);
	}
};

export default StatusEndProductList;

const Container = styled.div`
	display: flex;
	margin-bottom: 150px;
	${primaryFont}
	${flexColumn}
    ${flexCenter}
`;

const ProductContainer = styled.div`
	padding: 35px;
	margin-top: 30px;
	width: 962px;
	height: 270px;
	border: 1px solid #b6b6b6;
	border-radius: 6px;
	position: relative;
	${flexRow}
	img {
		width: 200px;
		height: 200px;
		border-radius: 6px;
		overflow: hidden;
		filter: brightness(40%);
	}
`;

const TextP1 = styled.p`
	text-decoration: line-through;
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
	position: absolute;
	left: 825px;
	top: 214px;
`;

const ToggleBox = styled.div`
	margin-top: 50px;
`;
const ToggleBox2 = styled.div`
	width: 105px;
	height: 32px;
`;

const S = {
	Title,
	TextP1,
	Container,
	ProductContainer,
	Wrapper,
	Wrapper2,
	RowBox,
	ToggleBox,
	ToggleBox2,
};
