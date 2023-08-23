import styled from "styled-components";
import { flexCenter, flexColumn, flexRow } from "styles/common";
import EmptyData from "../EmptyData";
import { useNavigate } from "react-router-dom";
/**
 *
 * 호버시 쉐도우 주는거 적용해야함
 *
 */

const TransactionHistory = ({ MyuserList, formatNumber }) => {
	const navigate = useNavigate();

	if (MyuserList && MyuserList.length > 0) {
		return (
			<S.Container>
				<S.RowBox>
					<S.Title>거래 내역</S.Title>
				</S.RowBox>
				{MyuserList.map(product => (
					<S.ProductContainer key={product?.Product.idx}>
						<img src={product?.Product.img_url} />
						<S.MasterWrapper>
							<S.Wrapper>
								<p>{product?.Product.title}</p>
							</S.Wrapper>
							<S.Wrapper2>
								<S.Price>{formatNumber(product?.Product.price)}</S.Price>
								<S.PriceText>won</S.PriceText>
							</S.Wrapper2>
						</S.MasterWrapper>
						<S.TextBox2>
							<p onClick={() => navigate(`/product/${product?.Product.idx}`)}>
								상품 보러가기 〉
							</p>
						</S.TextBox2>
					</S.ProductContainer>
				))}
			</S.Container>
		);
	} else {
		<EmptyData />;
	}
};
export default TransactionHistory;

const DivisionLine = styled.hr`
	width: 962px;
	height: 1px;
	background-color: #cccccc;
	margin-top: 30px;
`;

const Container = styled.div`
	display: flex;
	${flexColumn}
	${flexCenter}
	margin-bottom: 150px
`;

const ProductContainer = styled.div`
	padding: 35px;
	margin-top: 30px;
	width: 962px;
	height: 270px;
	border: 1px solid #b6b6b6;
	border-radius: 6px;
	position: relative;
	${flexRow}
	img {
		width: 200px;
		height: 200px;
		border-radius: 6px;
		overflow: hidden;
	}
`;

const Title = styled.div`
	margin-top: 50px;
	font-size: 24px;
	font-weight: bold;
	color: black;
`;

const Wrapper = styled.div`
	${flexRow}
	display: flex;
	justify-content: space-between;
	width: 660px;
	p {
		font-size: 18px;
	}
`;
const Wrapper2 = styled.div`
	${flexRow}
	width: 660px;
	margin-top: 16px;
`;
const Wrapper3 = styled.div`
	${flexRow}
	align-items:center;
	width: 105px;
	height: 40px;
	justify-content: center;
	border: 1px solid rgb(221, 221, 221);
	border-radius: 4px;
	margin-right: 30px;
`;

const RowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${flexRow}
`;
const ToggleBox = styled.div`
	margin-top: 50px;
	width: 105px;
	height: 32px;
	margin-right: 16px;
`;
const ToggleBox2 = styled.div`
	width: 105px;
	height: 32px;
`;
const MasterWrapper = styled.div`
	${flexColumn};
	margin-left: 30px;
`;
const Price = styled.p`
	font-size: 26px;
	font-weight: 600;
`;

const PriceText = styled.p`
	font-size: 20px;
	margin-left: 10px;
`;

const TextBox2 = styled.div`
	position: absolute;
	left: 825px;
	top: 214px;
	cursor: pointer;
`;

const S = {
	DivisionLine,
	Title,
	Container,
	ProductContainer,
	Wrapper,
	Wrapper2,
	Wrapper3,
	RowBox,
	ToggleBox,
	ToggleBox2,
	MasterWrapper,
	Price,
	PriceText,
	TextBox2,
};
