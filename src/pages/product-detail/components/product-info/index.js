import { gothicFont, primaryFont } from "styles/common";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { productList } from "mock/products";
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
					<UserInfo user={TARGET.user} />
					<S.Introduction>{TARGET.introduction}</S.Introduction>
					<S.ProductPrice>{localPrice}원</S.ProductPrice>
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
	width: 340px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ProductName = styled.div`
	font-size: 24px;
`;

const ProductLocation = styled.div`
	padding-top: 10px;
	font-size: 14px;
	color: #767676;
`;

const Introduction = styled.div`
	padding-top: 20px;
	border-bottom: 1px solid #b6b6b6;
	padding-bottom: 10px;
	line-height: 23px;
	${gothicFont}
`;

const ProductPrice = styled.div`
	font-size: 28px;
	color: #705ecb;
	text-align: right;
	padding-top: 30px;
`;

const S = {
	Container,
	InfoContainer,
	ProductName,
	ProductLocation,
	Introduction,
	ProductPrice,
};
