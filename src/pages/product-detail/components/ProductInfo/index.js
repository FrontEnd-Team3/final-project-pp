import { flexColumn } from "styles/common";
import styled from "styled-components";
import UserInfo from "./userInfo";
import ButtonContainer from "./Buttons/index";
import ProductImages from "./productImages";

const ProductInfo = ({ product }) => {
	const { searchProducts, isSeller, chat } = product;
	const localPrice = searchProducts?.price.toLocaleString("ko-KR");

	if (product)
		return (
			<S.Container>
				<ProductImages image={searchProducts?.ProductImages} />
				<S.InfoContainer>
					<S.ProductName>{searchProducts?.title}</S.ProductName>
					<S.ProductLocation>
						{searchProducts?.region}(위도, 경도)
					</S.ProductLocation>
					<UserInfo targetUser={searchProducts?.User} />
					<S.Introduction>{searchProducts?.description}</S.Introduction>
					<div>
						{searchProducts?.ProductsTags.map(tag => (
							<S.Tag># {tag.Tag["tag"]}</S.Tag>
						))}
					</div>
					<S.ProductPrice>{localPrice} 원</S.ProductPrice>
					<ButtonContainer
						isSeller={isSeller}
						bookmark={searchProducts?.liked}
						chat={chat}
					/>
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
