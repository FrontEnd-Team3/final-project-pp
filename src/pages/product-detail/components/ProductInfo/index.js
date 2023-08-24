import { flexColumn } from "styles/common";
import styled from "styled-components";
import ButtonContainer from "./Buttons/index";
import ProductImages from "./productImages";
import UserInfo from "./userInfo";
import getUserData from "utils/getUserData";

const ProductInfo = ({ product }) => {
	const { searchProduct, isSeller, chat } = product;
	const localPrice = searchProduct?.price.toLocaleString("ko-KR");

	const DATA = getUserData();
	const location = {};
	if (DATA) {
		location.x = DATA.x;
		location.y = DATA.y;
	}

	if (product)
		return (
			<S.Container>
				<ProductImages product={searchProduct} />
				<S.InfoContainer>
					<S.UserWrapper>
						<S.ProductName>{searchProduct?.title}</S.ProductName>
						<S.ProductLocation>
							{searchProduct?.region}({parseFloat(location?.x).toFixed(3)},{" "}
							{parseFloat(location?.y).toFixed(3)})
						</S.ProductLocation>
						<UserInfo targetUser={searchProduct?.User} />
						<S.Introduction>{searchProduct?.description}</S.Introduction>
					</S.UserWrapper>
					<S.Hr></S.Hr>
					<div>
						{searchProduct?.ProductsTags.map((tag, i) => {
							if (tag.Tag["tag"])
								return <S.Tag key={i}># {tag.Tag["tag"]}</S.Tag>;
						})}
					</div>
					<S.ProductPrice>{localPrice} 원</S.ProductPrice>
					<ButtonContainer
						isSeller={isSeller}
						bookmark={searchProduct?.liked}
						chat={chat}
						status={searchProduct?.status}
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
	@media ${({ theme }) => theme.DEVICE.tablet} {
		flex-direction: column;
		align-items: center;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		/* width: 580px; */
	}
`;

const InfoContainer = styled.div`
	margin-left: 20px;
	${flexColumn}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin-top: 48px;
		width: 100%;
		margin-left: 0;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-top: 20px;
	}
	button {
		margin-right: 30px;
		@media ${({ theme }) => theme.DEVICE.tablet} {
			font-size: 20px;
		}
	}

	button:last-of-type {
		margin: 0;
	}
`;

const ProductName = styled.div`
	font-size: 32px;
	font-weight: 900;
`;

const ProductLocation = styled.div`
	padding-top: 10px;
	font-size: 14px;
	color: #767676;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin-top: 12px;
	}
`;

const Introduction = styled.div`
	height: 310px;
	padding-top: 20px;
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
	margin: 20px 5px 5px 5px;
	text-align: center;
	line-height: 16.5px;
`;

const UserWrapper = styled.div`
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-left: 0;
	}
`;

const Hr = styled.hr`
	border-bottom: 1px solid #b6b6b6;
`;

const S = {
	Container,
	InfoContainer,
	ProductName,
	ProductLocation,
	Introduction,
	ProductPrice,
	Tag,
	UserWrapper,
	Hr,
};
