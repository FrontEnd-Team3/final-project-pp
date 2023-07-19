import { flexColumn, primaryFont } from "styles/common";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { productList } from "mock/productsList";
import ProductImages from "./product-images";
import UserInfo from "./user-info";
import ButtonContainer from "./buttons";

const ProductInfo = () => {
	const { id } = useParams();
	const TARGET = productList.find(product => product.id === parseInt(id));
	const localPrice = TARGET?.price.toLocaleString("ko-KR");

	if (TARGET)
		return (
			<S.Container>
				<ProductImages image={TARGET.image} />
				<S.InfoContainer>
					<S.ProductName>{TARGET.name}</S.ProductName>
					<S.ProductLocation>{TARGET.location}(위도, 경도)</S.ProductLocation>
					<UserInfo targetUser={TARGET.user} />
					<S.Introduction>{TARGET.introduction}</S.Introduction>
					<div>
						{TARGET.tags.map(tag => (
							<S.Tag># {tag}</S.Tag>
						))}
					</div>
					<S.ProductPrice>{localPrice} 원</S.ProductPrice>
					<ButtonContainer />
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
	${primaryFont}
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
	padding: 10px;
	height: 33px;
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
