import ProductQueryApi from "apis/product.query.api";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter, flexColumn, flexRow } from "styles/common";

/**
 *
 * 완료 상품 css 적용해야함
 * 호버시 쉐도우 주는거 적용해야함
 *
 */
const StatusEndProductList = ({ product, formatNumber }) => {
	const navigate = useNavigate();

	const updateProduct = ProductQueryApi.updateProduct(product);
	return (
		<S.Container>
			<S.ProductContainer key={product.idx}>
				<img src={product.img_url} />

				<S.MasterWrapper>
					<S.Wrapper>
						<p>{product.title}</p>
						<div>
							{/* <BasicButton
								color={"white"}
								size={"xsmall"}
								children={"수정"}
								onClick={() => {
									navigate("/productRegister");
								}}
								style={{
									fontSize: "14px",
									height: "28px",
									borderRadius: "6px",
									fontWeight: "600",
									border: "1px solid #dddddd",
								}}
							/>
							<BasicButton
								color={"primary"}
								size={"xsmall"}
								children={"삭제"}
								style={{
									fontSize: "14px",
									height: "28px",
									borderRadius: "6px",
									fontWeight: "600",
									marginLeft: "10px",
								}}
							/> */}
						</div>
					</S.Wrapper>
					<S.Wrapper2>
						<S.Wrapper3>
							<div>{product.status}</div>
						</S.Wrapper3>
						<S.Price>{formatNumber(product.price)}</S.Price>
						<S.PriceText>won</S.PriceText>
					</S.Wrapper2>
				</S.MasterWrapper>
				<TextBox2>
					<p onClick={() => navigate(`/product/${product.idx}`)}>
						상품 보러가기 〉
					</p>
				</TextBox2>
			</S.ProductContainer>
		</S.Container>
	);
};

export default StatusEndProductList;

const Container = styled.div`
	display: flex;
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

const MasterWrapper = styled.div`
	${flexColumn};
	margin-left: 30px;
`;

const Wrapper = styled.div`
	${flexRow}
	display: flex;
	justify-content: space-between;
	width: 660px;
	p {
		font-size: 18px;
		text-decoration: line-through;
	}
`;
const Wrapper2 = styled.div`
	${flexRow}
	width: 660px;
	margin-top: 16px;
`;

const Wrapper3 = styled.div`
	${flexRow}
	align-items:center;
	width: 105px;
	height: 40px;
	justify-content: center;
	border: 1px solid rgb(221, 221, 221);
	border-radius: 4px;
	margin-right: 30px;
`;

const Price = styled.p`
	font-size: 26px;
	font-weight: 600;
	text-decoration: line-through;
`;

const PriceText = styled.p`
	font-size: 20px;
	margin-left: 10px;
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
	Price,
	PriceText,
	Title,
	TextP1,
	Container,
	ProductContainer,
	MasterWrapper,
	Wrapper,
	Wrapper2,
	RowBox,
	ToggleBox,
	ToggleBox2,
	Wrapper3,
};
