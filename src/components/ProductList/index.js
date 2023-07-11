import styled from "styled-components";
import OneProduct from "./one-product";

const ProductList = () => {
	// date: 추후 날짜 관련 라이브러리로 변경
	const productList = [
		{
			name: "메르세데스 벤츠 123123",
			date: "1일 전",
			location: "서울시 강남구 역삼2동",
			price: 50000000,
		},
		{
			name: "메르세데스 벤츠 123123",
			date: "1일 전",
			location: "서울시 강남구 역삼2동",
			price: 50000000,
		},
		{
			name: "메르세데스 벤츠 123123",
			date: "1일 전",
			location: "서울시 강남구 역삼2동",
			price: 50000000,
		},
		{
			name: "메르세데스 벤츠 123123",
			date: "1일 전",
			location: "서울시 강남구 역삼2동",
			price: 50000000,
		},
		{
			name: "메르세데스 벤츠 123123",
			date: "1일 전",
			location: "서울시 강남구 역삼2동",
			price: 50000000,
		},
		{
			name: "메르세데스 벤츠 123123",
			date: "1일 전",
			location: "서울시 강남구 역삼2동",
			price: 50000000,
		},
		{
			name: "메르세데스 벤츠 123123",
			date: "1일 전",
			location: "서울시 강남구 역삼2동",
			price: 50000000,
		},
		{
			name: "메르세데스 벤츠 123123",
			date: "1일 전",
			location: "서울시 강남구 역삼2동",
			price: 50000000,
		},
	];
	if (productList)
		return (
			<S.Container>
				{productList.map((product, i) => (
					<OneProduct key={i} product={product} />
				))}
			</S.Container>
		);
};

export default ProductList;

const Container = styled.div`
	display: flex;
	width: 1060px;
	margin: 20px auto;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 20px 0;
`;

const S = { Container };
