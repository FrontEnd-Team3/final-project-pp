import { flexColumn } from "styles/common";
import styled from "styled-components";
import ButtonContainer from "./Buttons/index";
import ProductImages from "./productImages";
import UserInfo from "./userInfo";

const ProductInfo = ({ product }) => {
	console.log("상세", product);
	const { searchProduct, isSeller, chat } = product;
	const localPrice = searchProduct?.price.toLocaleString("ko-KR");

	if (product)
		return (
			<S.Container>
				<ProductImages product={searchProduct} />
				<S.InfoContainer>
					<S.ProductName>{searchProduct?.title}</S.ProductName>
					<S.ProductLocation>
						{searchProduct?.region}(위도, 경도)
					</S.ProductLocation>
					<UserInfo targetUser={searchProduct?.User} />
					<S.Introduction>{searchProduct?.description}</S.Introduction>
					<div>
						{searchProduct?.ProductsTags.map(tag => (
							<S.Tag># {tag.Tag["tag"]}</S.Tag>
						))}
					</div>
					<S.ProductPrice>{localPrice} 원</S.ProductPrice>
					<ButtonContainer
						isSeller={isSeller}
						bookmark={searchProduct?.liked}
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
