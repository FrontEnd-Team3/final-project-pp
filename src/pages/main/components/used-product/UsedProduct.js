import BasicButton from "components/Button";
import ProductList from "components/ProductList";
import { productList } from "mock/productsList";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { primaryFont } from "styles/common";

const UsedProduct = () => {
	const navigate = useNavigate();
	return (
		<S.Container>
			<div>
				<S.Title>
					우리 동네 <S.Used>중고</S.Used> 물품
				</S.Title>
				<div>
					서울시 성동구 성수동
					<BasicButton
						variant={"primary"}
						size={"xsmall"}
						children={"변경"}
						style={{ color: "white", fontSize: "14px", marginLeft: "15px" }}
					/>
				</div>
				<div style={{ float: "right" }}>
					<BasicButton
						variant={"primary"}
						size={"medium"}
						children={"상품 등록 + "}
						style={{ color: "white", fontSize: "20px", margin: "40px 0" }}
						onClick={() => navigate("/productRegister")}
					/>
				</div>
			</div>
			<ProductList productList={productList} />
		</S.Container>
	);
};

export default UsedProduct;

const Container = styled.div`
	width: 860px;
	margin: 30px auto;
	margin-bottom: 40px;
	padding-bottom: 40px;
	${primaryFont}
	border-bottom: 2.5px solid black;
`;

const Title = styled.div`
	font-size: 32px;
	color: #6c6c6c;
	margin-bottom: 10px;
`;
const Used = styled.span`
	color: ${({ theme }) => theme.PALETTE.highlightTitle};
`;

const S = { Container, Used, Title };
