import BasicButton from "components/Button";
import SinginModal from "components/Modal/Signin";
import ProductListWithoutPagination from "components/ProductList/withoutPagination";
import SearchAddress from "components/searchAddress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter, primaryFont } from "styles/common";

const MainProducts = ({ title, list, url }) => {
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
						우리 동네 <S.Highlight>{title}</S.Highlight> 물품
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
				<ProductListWithoutPagination productList={list} />
				<S.ButtonContainer>
					<BasicButton
						color={"black"}
						size={"small"}
						children={"MORE +"}
						style={{ fontSize: "14px", height: "28px" }}
						onClick={() => navigate(url)}
					/>
				</S.ButtonContainer>
			</S.Container>
		</>
	);
};

export default MainProducts;

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

const Highlight = styled.span`
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

const S = { Container, Highlight, Title, Location, ButtonContainer };
