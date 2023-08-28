import ProductQueryApi from "apis/product.query.api";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter, flexColumn, flexRow } from "styles/common";

/**
 *
 * 완료 상품 css 적용해야함
 * 호버시 쉐도우 주는거 적용해야함
 *
 */
const StatusEndProductList = ({ product, formatNumber }) => {
	const navigate = useNavigate();

	const updateProduct = ProductQueryApi.updateProduct(product);
	return (
		<S.PContainer>
			<S.ProductContainer key={product.idx}>
				<div>
					<img src={product.img_url} />
				</div>
				<S.MasterWrapper>
					<div>
						<S.Wrapper>
							<TextP1>{product.title}</TextP1>
						</S.Wrapper>
						<S.Wrapper2>
							<S.Wrapper3>
								<div>{product.status}</div>
							</S.Wrapper3>
							<S.PriceWrapper>
								<S.Price>{formatNumber(product.price)}</S.Price>
								<S.PriceText>won</S.PriceText>
							</S.PriceWrapper>
						</S.Wrapper2>
					</div>
					<TextBox2>
						<p onClick={() => navigate(`/product/${product.idx}`)}>
							상품 보러가기 〉
						</p>
					</TextBox2>
				</S.MasterWrapper>
			</S.ProductContainer>
		</S.PContainer>
	);
};

export default StatusEndProductList;

const PContainer = styled.div`
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
		filter: brightness(40%);
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

const MasterWrapper = styled.div`
	${flexColumn};
	justify-content: space-between;
	margin-left: 30px;
	width: 100%;
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
	width: 100%;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: auto;
		flex-wrap: wrap;
		margin-top: 6px;
	}
`;

const Wrapper3 = styled.div`
	${flexRow}
	align-items:center;
	padding: 10px;
	justify-content: center;
	border: 1px solid rgb(221, 221, 221);
	border-radius: 4px;
	margin-right: 30px;
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.tablet} {
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: 12px;

		padding: 5px;
	}
	div {
		width: 100%;
	}
`;
const TextP1 = styled.p`
	text-decoration: line-through;
`;
const PriceWrapper = styled.div`
	${flexRow};
`;
const Price = styled.p`
	font-size: 26px;
	font-weight: 600;
	text-decoration: line-through;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-top: 10px;
		font-size: 16px;
	}
`;

const PriceText = styled.p`
	font-size: 20px;
	margin-left: 10px;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-top: 10px;
		font-size: 16px;
	}
`;
const TextBox2 = styled.div`
	text-align: right;
	cursor: pointer;
	transition: left top 0.3s;
	width: 100%;
	@media ${({ theme }) => theme.DEVICE.tablet} {
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: 14px;
		margin-top: 12px;
	}
`;

const S = {
	PContainer,
	MasterWrapper,
	TextP1,
	Wrapper,
	Wrapper2,
	Wrapper3,
	PriceWrapper,
	Price,
	PriceText,
	TextBox2,
	ProductContainer,
};
