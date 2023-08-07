import BasicButton from "components/Button";
import ProductListWithoutPagination from "components/ProductList/withoutPagination";
import RouteKey from "consts/routes";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "styles/common";

const UsedProduct = ({ list }) => {
	const navigate = useNavigate();
	return (
		<>
			<S.Container>
				<div>
					<S.Title>
						우리 동네 <S.Used>중고</S.Used> 물품
					</S.Title>
					{/* <S.Location>
						{address}
						<BasicButton
							color={"primary"}
							size={"xsmall"}
							children={"변경"}
							style={{ marginLeft: "15px" }}
							onClick={() => setIsOpen(true)}
						/>
					</S.Location> */}
				</div>
				<ProductListWithoutPagination productList={list} />
				<S.ButtonContainer>
					<BasicButton
						color={"black"}
						size={"small"}
						children={"MORE +"}
						style={{ fontSize: "14px", height: "28px" }}
						onClick={() => navigate(RouteKey.used)}
					/>
				</S.ButtonContainer>
			</S.Container>
		</>
	);
};

export default UsedProduct;

const Container = styled.div`
	width: 1060px;
	margin: 40px auto 20px auto;
	padding-bottom: 40px;
`;

const Title = styled.div`
	font-size: 40px;
	color: #${({ theme }) => theme.PALETTE.darkPrimary};
	text-align: center;
	margin: 90px 0;
`;

const Used = styled.span`
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
`;

const S = { Container, Used, Title, Location, ButtonContainer };
