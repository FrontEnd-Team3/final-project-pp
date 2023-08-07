import BasicButton from "components/Button";
import ProductListWithoutPagination from "components/ProductList/withoutPagination";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "styles/common";

const FreeProduct = ({ list }) => {
	const navigate = useNavigate();
	return (
		<>
			<S.Container>
				<div>
					<S.Title>
						우리 동네 <S.Free>무료</S.Free> 나눔
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
						onClick={() => navigate("/free-transaction")}
					/>
				</S.ButtonContainer>
			</S.Container>
		</>
	);
};

export default FreeProduct;

const Container = styled.div`
	width: 1060px;
	margin: 0 auto;
`;

const Title = styled.div`
	font-size: 40px;
	color: #${({ theme }) => theme.PALETTE.darkPrimary};
	text-align: center;
	margin: 90px 0;
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
