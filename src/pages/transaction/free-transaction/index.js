import BasicButton from "components/Button";
import ProductList from "components/ProductList";
import RecentlyClicked from "components/RecentlyClicked/RecentlyClicked";
import { productList } from "mock/products";
import styled from "styled-components";
import { primaryFont } from "styles/common";

const FreeTransaction = () => {
	return (
		<S.Container>
			<S.Wrapper>
				<S.Title>
					우리 동네 <span>무료</span> 나눔
				</S.Title>
				<S.Address>
					<div>
						서울시 성동구 성수동{" "}
						<BasicButton variant="primary" size="primary" shape="primary">
							변경
						</BasicButton>
					</div>
					<S.Filtering>
						<li>등록순</li>
						<li>인기순</li>
						<li>저가순</li>
						<li>고가순</li>
					</S.Filtering>
				</S.Address>
				<ProductList productList={productList} /> {/* 임시 데이터 */}
				<RecentlyClicked />
			</S.Wrapper>
		</S.Container>
	);
};
export default FreeTransaction;

const Container = styled.div`
	width: 100%;
	background-color: #fcf9f3; // bg컬러 테스트
	* {
		${primaryFont}
	}
`;

const Wrapper = styled.div`
	margin: 50px auto;
	max-width: 860px;
`;

const Title = styled.p`
	text-align: center;
	margin-bottom: 50px;
	font-size: ${({ theme }) => theme.FONT_SIZE.mmlarge};
	& span {
		color: ${({ theme }) => theme.PALETTE.pricePoint};
	}
`;

const Address = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 12px;
	margin: 12px 0;
	& button {
		color: ${({ theme }) => theme.PALETTE.white};
		padding: 4px 14px;
		box-shadow: 2px 2px 0px 0px rgba(64, 64, 64, 1);
	}
`;

const Filtering = styled.ul`
	display: flex;

	li {
		display: flex;
		align-items: center;
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		padding-left: 12px;
		cursor: pointer;
	}

	// active시 컬러 확인용
	li:first-of-type {
		color: ${({ theme }) => theme.PALETTE.pricePoint};
	}

	li:first-of-type::before {
		content: "";
		display: inline-block;
		margin-right: 10px;
		width: 1px;
		height: 12px;
		background-color: #000;
	}

	li::after {
		content: "";
		display: inline-block;
		margin-left: 10px;
		width: 2px;
		height: 12px;
		background-color: #000;
	}
`;

const S = {
	Container,
	Wrapper,
	Title,
	Address,
	Filtering,
};
