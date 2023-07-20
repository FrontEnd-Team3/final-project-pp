import BasicButton from "components/Button";
import ProductListWithoutPagination from "components/ProductList/withoutPagination";
import SearchAddress from "components/searchAddress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter, primaryFont } from "styles/common";

const FreeProduct = ({ productList }) => {
	const PRODUCTLIST = productList?.filter(
		product => product.status !== "판매완료" && !product.price,
	);
	const navigate = useNavigate();

	// 주소 변경
	const [isOpen, setIsOpen] = useState(false);
	const [address, setAddress] = useState("서울시 성동구 성수동");

	return (
		<>
			{isOpen && (
				<SearchAddress setAddress={setAddress} setIsOpen={setIsOpen} />
			)}
			<S.Container>
				<div>
					<S.Title>
						우리 동네 <S.Free>무료</S.Free> 나눔
					</S.Title>
					<S.Location>
						{address}
						<BasicButton
							variant={"primary"}
							size={"xsmall"}
							children={"변경"}
							style={{ marginLeft: "15px" }}
							onClick={() => setIsOpen(true)}
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
