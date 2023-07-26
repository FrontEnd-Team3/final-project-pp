import { flexColumn } from "styles/common";
import styled from "styled-components";
import { productList } from "mocks/data/products/productsList";
import ProductImages from "./productImages";
import UserInfo from "./userInfo";
import ButtonContainer from "./Buttons/index";
import { useState } from "react";

const ProductInfo = ({ id }) => {
	const TARGET = productList.find(product => product.idx === parseInt(id));
	console.log(TARGET);
	const localPrice = TARGET?.price.toLocaleString("ko-KR");

	// 판매자인지 여부 파악해서 버튼 다르게 보이게 하기
	// 실제 API에서는 상세 데이터를 받아올 때 사용자의 토큰을 검사하여 판매자인지 미리 검사 후 isSeller 값 반환해주므로 state로 관리하지 않고 해당 값으로 수정할 예정
	const [isSeller, SetIsSeller] = useState(true);

	if (TARGET)
		return (
			<S.Container>
				<ProductImages image={TARGET.ProductImages} />
				<S.InfoContainer>
					<S.ProductName>{TARGET.title}</S.ProductName>
					<S.ProductLocation>{TARGET.region}(위도, 경도)</S.ProductLocation>
					<UserInfo targetUser={TARGET.User} />
					<S.Introduction>{TARGET.description}</S.Introduction>
					<div>
						{TARGET.ProductsTags.map(tag => (
							<S.Tag># {tag.Tag["tag"]}</S.Tag>
						))}
					</div>
					<S.ProductPrice>{localPrice} 원</S.ProductPrice>
					<ButtonContainer isSeller={isSeller} bookmark={TARGET.Liked} />
				</S.InfoContainer>
			</S.Container>
		);
};

export default ProductInfo;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 100px;
	padding-top: 25px;
`;

const InfoContainer = styled.div`
	width: 432px;
	${flexColumn}/* justify-content: space-between; */
`;

const ProductName = styled.div`
	font-size: 32px;
	font-weight: 900;
`;

const ProductLocation = styled.div`
	padding-top: 10px;
	font-size: 14px;
	color: #767676;
`;

const Introduction = styled.div`
	height: 310px;
	padding-top: 20px;
	border-bottom: 1px solid #b6b6b6;
	padding-bottom: 10px;
	line-height: 23px;
	font-size: 16px;
	font-weight: 100;
	vertical-align: bottom;
	margin-bottom: 10px;
`;

const ProductPrice = styled.div`
	font-size: 28px;
	font-weight: 900;
	color: #705ecb;
	text-align: right;
	padding-top: 30px;
	color: ${({ theme }) => theme.PALETTE.black};
`;

const Tag = styled.span`
	display: inline-block;
	padding: 8px 12px;
	border-radius: 20px;
	border: 1px solid;
	background: ${({ theme }) => theme.PALETTE.white};
	border-color: ${({ theme }) => theme.PALETTE.primary};
	color: ${({ theme }) => theme.PALETTE.primary};
	margin: 5px;
	text-align: center;
	line-height: 16.5px;
`;

const S = {
	Container,
	InfoContainer,
	ProductName,
	ProductLocation,
	Introduction,
	ProductPrice,
	Tag,
};
