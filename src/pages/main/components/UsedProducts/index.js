import BasicButton from "components/Button";
import BasicNavigateModal from "components/Modal/WithButton";
import ProductListWithoutPagination from "components/ProductList/withoutPagination";
import SearchAddress from "components/SearchAddress";
import { productList } from "mocks/data/productsList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "styles/common";

const UsedProduct = () => {
	const PRODUCTLIST = productList?.filter(
		product => product.status !== "판매완료" && product.price,
	);

	const navigate = useNavigate();

	// 주소 변경
	const [isOpen, setIsOpen] = useState(false);
	const [address, setAddress] = useState("서울시 성동구 성수동");

	// 토큰 있을 때만 주소 변경 가능하게 하기
	// 토큰 없으면 로그인 창으로 이동하는 모달 띄우기
	const [hasToken, setHasToken] = useState(false);

	return (
		<>
			{hasToken
				? isOpen && (
						<SearchAddress setAddress={setAddress} setIsOpen={setIsOpen} />
				  )
				: isOpen && (
						<BasicNavigateModal
							setOpen={setIsOpen}
							background={"primary"}
							container={"primary"}
							closebtn={"primary"}
							title={"primary"}
							subtitle={"primary"}
							button={"primary"}
							titlement={"Please Join Us!"}
							subtitlement={"로그인이 필요합니다."}
							buttonment={"로그인 하러 가기 "}
							moveaddress={"Signin"}
						/>
				  )}
			<S.Container>
				<div>
					<S.Title>
						우리 동네 <S.Used>중고</S.Used> 물품
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
						onClick={() => navigate("/used-transaction")}
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
	font-size: 28px;
	color: #${({ theme }) => theme.PALETTE.darkPrimary};
	text-align: center;
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
