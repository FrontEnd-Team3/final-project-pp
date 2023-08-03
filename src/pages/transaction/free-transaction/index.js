import ProductQueryApi from "apis/product.query.api";
import BasicButton from "components/Button";
import Loading from "components/Loading";
import ProductList from "components/ProductList/withPagination";
import RecentlyClicked from "components/RecentlyClicked";
import BasicSelect from "components/Select";
import styled from "styled-components";
import { useState } from "react";

const FreeTransaction = () => {
	const { data, isLoading, error } = ProductQueryApi.getProductList();

	console.log("main", data);

	const [filteredProducts, setFilteredProducts] = useState(data?.freeProduct);

	const onFiltering = value => {
		console.log("value", value);
		let filteredList = [...data?.freeProduct];

		if (value === "등록순") {
			filteredList.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
		} else if (value === "인기순") {
			filteredList.sort((a, b) => b.liked - a.liked);
		}

		setFilteredProducts(filteredList);
	};

	const options = [
		{ value: "등록순", label: "등록순" },
		{ value: "인기순", label: "인기순" },
	];

	if (isLoading) return <Loading />;

	if (error) {
		window.location.reload();
		queryClient.refetchQueries(QueryKey.productData);
	}

	return (
		<S.Container>
			<S.Wrapper>
				<S.Title>
					우리 동네 <span>무료</span> 나눔
				</S.Title>
				<S.Address>
					<div>
						서울시 성동구 성수동
						<BasicButton color={"primary"} size={"xsmall"} children={"변경"} />
					</div>
					<BasicSelect
						variant={"primary"}
						options={options}
						selectedValue={"등록순"}
						onChange={onFiltering}
					/>
				</S.Address>
				<ProductList productList={filteredProducts || data?.freeProduct} />
				<RecentlyClicked />
			</S.Wrapper>
		</S.Container>
	);
};
export default FreeTransaction;

const Container = styled.div`
	width: 100%;
`;

const Wrapper = styled.div`
	margin: 50px auto;
	max-width: 1060px;
`;

const Title = styled.p`
	text-align: center;
	margin-bottom: 50px;
	font-weight: 500;
	font-size: ${({ theme }) => theme.FONT_SIZE.mmlarge};
	& span {
		color: ${({ theme }) => theme.PALETTE.darkPrimary};
	}
`;

const Address = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 13px;
	color: #788394;
	margin: 12px 0;
	& button {
		color: ${({ theme }) => theme.PALETTE.white};
		font-size: 14px;
		margin-left: 15px;
	}
`;

const S = {
	Container,
	Wrapper,
	Title,
	Address,
};
