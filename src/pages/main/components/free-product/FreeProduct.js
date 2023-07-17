import BasicButton from "components/Button";
import ProductList from "components/ProductList";
import { productList } from "mock/products";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { primaryFont } from "styles/common";

const FreeProduct = () => {
	const navigate = useNavigate();
	return (
		<S.Container>
			<div>
				<S.Title>
					우리 동네 <S.Free>무료</S.Free> 나눔
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

export default FreeProduct;

const Container = styled.div`
	width: 860px;
	margin: 0 auto;
	margin-bottom: 40px;
	${primaryFont}
`;

const Title = styled.div`
	font-size: 32px;
	color: #6c6c6c;
	margin-bottom: 10px;
`;

const Free = styled.span`
	color: ${({ theme }) => theme.PALETTE.highlightTitle};
`;

const S = { Container, Free, Title };
