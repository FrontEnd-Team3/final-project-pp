import BasicButton from "components/Button";
import ProductListWithoutPagination from "components/ProductList/withoutPagination";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "styles/common";

const Products = ({ list, title, route }) => {
	console.log("페이지", list);
	const navigate = useNavigate();
	return (
		<>
			<S.Container>
				<div>
					<S.Title>
						우리 동네 <S.Free>{title}</S.Free> 나눔
					</S.Title>
				</div>
				<ProductListWithoutPagination productList={list} />
				<S.ButtonContainer>
					<BasicButton
						color={"black"}
						size={"small"}
						children={"MORE +"}
						style={{ fontSize: "14px", height: "28px" }}
						onClick={() => navigate(route)}
					/>
				</S.ButtonContainer>
			</S.Container>
		</>
	);
};

export default Products;

const Container = styled.div`
	max-width: 1060px;
	margin: 0 auto;

	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 0 20px;
	}
`;

const Title = styled.div`
	font-size: 28px;
	font-weight: 500;
	text-align: center;
	margin: 90px 0;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		font-size: 26px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: 24px;
	}
`;

const Free = styled.span`
	color: ${({ theme }) => theme.PALETTE.highlightTitle};
`;

const Location = styled.div`
	margin: 10px 0 40px 0;
	font-size: 15px;
	color: #788394;
	${flexCenter}
`;

const ButtonContainer = styled.div`
	${flexCenter}
	margin-bottom: 90px;
`;

const S = { Container, Free, Title, Location, ButtonContainer };
