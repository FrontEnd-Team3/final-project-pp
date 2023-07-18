import BasicButton from "components/Button";
import ProductListWithoutPagination from "components/ProductList/withoutPagination";
import { productList } from "mock/productsList";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter, primaryFont } from "styles/common";

const FreeProduct = () => {
	const navigate = useNavigate();
	return (
		<S.Container>
			<div>
				<S.Title>
					우리 동네 <S.Free>무료</S.Free> 나눔
				</S.Title>
				<S.Location>
					서울시 성동구 성수동
					<BasicButton
						variant={"primary"}
						size={"xsmall"}
						children={"변경"}
						style={{ marginLeft: "15px" }}
					/>
				</S.Location>
			</div>
			<ProductListWithoutPagination productList={productList} />
			<S.ButtonContainer>
				<BasicButton
					variant={"black"}
					size={"small"}
					children={"MORE +"}
					style={{ fontSize: "14px", height: "28px" }}
					onClick={() => navigate("/free-transaction")}
				/>
			</S.ButtonContainer>
		</S.Container>
	);
};

export default FreeProduct;

const Container = styled.div`
	width: 1060px;
	margin: 40px auto;
	${primaryFont}
`;

const Title = styled.div`
	font-size: 32px;
	color: #6c6c6c;
	text-align: center;
`;

const Free = styled.span`
	color: ${({ theme }) => theme.PALETTE.highlightTitle};
`;

const Location = styled.div`
	margin: 20px 0;
	${flexCenter}
`;

const ButtonContainer = styled.div`
	${flexCenter}
	margin: 20px 0;
`;

const S = { Container, Free, Title, Location, ButtonContainer };
