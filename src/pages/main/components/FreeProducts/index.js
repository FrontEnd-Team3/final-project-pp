import BasicButton from "components/Button";
import SinginModal from "components/Modal/WithButton";
import ProductListWithoutPagination from "components/ProductList/withoutPagination";
import SearchAddress from "components/SearchAddress";
import { productList } from "mocks/data/productsList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "styles/common";

const FreeProduct = () => {
	const PRODUCTLIST = productList?.filter(
		product => product.status !== "판매완료" && !product.price,
	);
	const navigate = useNavigate();

	// 주소 변경
	const [isOpen, setIsOpen] = useState(false);
	const [address, setAddress] = useState("서울시 성동구 성수동");

	// 토큰 있을 때만 주소 변경 가능하게 하기
	// 토큰 없으면 로그인 창으로 이동하는 모달 띄우기
	const [hasToken, setHasToken] = useState(true);

	return (
		<>
			{hasToken
				? isOpen && (
						<SearchAddress setAddress={setAddress} setIsOpen={setIsOpen} />
				  )
				: isOpen && <SinginModal setOpen={setIsOpen} />}
			<S.Container>
				<div>
					<S.Title>
						우리 동네 <S.Free>무료</S.Free> 나눔
					</S.Title>
					<S.Location>
						{address}
						<BasicButton
							color={"primary"}
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
	font-size: 28px;
	color: #${({ theme }) => theme.PALETTE.darkPrimary};
	text-align: center;
	margin-top: 90px;
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
