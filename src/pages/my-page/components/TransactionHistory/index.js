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
						<div>
							<img src={product?.Product.img_url} />
						</div>
						<S.MasterWrapper>
							<div>
								<S.Wrapper>
									<p>{product?.Product.title}</p>
								</S.Wrapper>
								<S.Wrapper2>
									<S.Price>{formatNumber(product?.Product.price)}</S.Price>
									<S.PriceText>won</S.PriceText>
								</S.Wrapper2>
							</div>
							<S.TextBox2>
								<p onClick={() => navigate(`/product/${product?.Product.idx}`)}>
									상품 보러가기 〉
								</p>
							</S.TextBox2>
						</S.MasterWrapper>
					</S.ProductContainer>
				))}
			</S.Container>
		);
	} else {
		<EmptyData />;
	}
};
export default TransactionHistory;

const Container = styled.div`
	width: 100%;
	display: flex;
	${flexColumn}
	${flexCenter}
	margin-bottom: 20px;
	transition: padding width 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 0 20px;
	}
`;

const ProductContainer = styled.div`
	padding: 35px;
	margin-top: 30px;
	width: 100%;
	height: 270px;
	border: 1px solid #b6b6b6;
	border-radius: 6px;
	position: relative;
	${flexRow}
	img {
		width: 200px;
		height: 200px;
		border-radius: 6px;
		overflow: inherit;
		transition: overflow 0.3s;
		@media ${({ theme }) => theme.DEVICE.tablet} {
			overflow: inherit;
		}
		@media ${({ theme }) => theme.DEVICE.mobile} {
			overflow: inherit;
			width: 100px;
			height: 100px;
		}
	}
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		padding: 20px;
		height: 150px;
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
	width: 100%;
	p {
		font-size: 18px;
	}
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: auto;
	}
`;
const Wrapper2 = styled.div`
	${flexRow}
	align-items: center;
	margin-top: 16px;
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: auto;
		flex-wrap: wrap;
	}
`;

const RowBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${flexRow}
	transition: width 0.3s;
`;

const MasterWrapper = styled.div`
	${flexColumn};
	margin-left: 30px;
	justify-content: space-between;
	width: 100%;
`;

const Price = styled.p`
	font-size: 26px;
	font-weight: 600;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-top: 20px;
		font-size: 16px;
	}
`;

const PriceText = styled.p`
	font-size: 20px;
	margin-left: 10px;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-top: 20px;
		font-size: 16px;
	}
`;

const TextBox2 = styled.div`
	text-align: right;
	cursor: pointer;
	transition: left top 0.3s;
	@media ${({ theme }) => theme.DEVICE.tablet} {
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: 14px;
	}
`;

const S = {
	Title,
	Container,
	ProductContainer,
	Wrapper,
	Wrapper2,
	RowBox,
	MasterWrapper,
	Price,
	PriceText,
	TextBox2,
};
