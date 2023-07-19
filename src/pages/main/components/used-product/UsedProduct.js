import BasicButton from "components/Button";
import ProductListWithoutPagination from "components/ProductList/withoutPagination";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter, primaryFont } from "styles/common";

const UsedProduct = ({ productList }) => {
	const PRODUCTLIST = productList?.filter(
		product => product.status !== "판매완료" && product.price,
	);

	const navigate = useNavigate();
	return (
		<S.Container>
			<div>
				<S.Title>
					우리 동네 <S.Used>중고</S.Used> 물품
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
			<ProductListWithoutPagination productList={PRODUCTLIST} />
			<S.ButtonContainer>
				<BasicButton
					variant={"black"}
					size={"small"}
					children={"MORE +"}
					style={{ fontSize: "14px", height: "28px" }}
					onClick={() => navigate("/used-transaction")}
				/>
			</S.ButtonContainer>
		</S.Container>
	);
};

export default UsedProduct;

const Container = styled.div`
	width: 1060px;
	margin: 40px auto 20px auto;
	padding-bottom: 40px;
	${primaryFont}
`;

const Title = styled.div`
	font-size: 32px;
	color: #6c6c6c;
	text-align: center;
`;

const Used = styled.span`
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

const S = { Container, Used, Title, Location, ButtonContainer };
