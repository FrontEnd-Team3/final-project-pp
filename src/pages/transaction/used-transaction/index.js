import ProductQueryApi from "apis/product.query.api";
import Loading from "components/Loading";
import ProductList from "components/ProductList/withPagination";
import RecentlyClicked from "components/RecentlyClicked";
import BasicSelect from "components/Select";
import QueryKey from "consts/queryKey";
import { useState } from "react";
import styled from "styled-components";

const UsedTransaction = () => {
	const { data, isLoading, error } = ProductQueryApi.getProductList();
	const [currensValue, setCurrentValue] = useState("등록순");

	const [filteredProducts, setFilteredProducts] = useState(data?.usedProduct);

	const onFiltering = value => {
		let filteredList = [...data?.usedProduct];

		if (value === "등록순") {
			filteredList.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
		} else if (value === "인기순") {
			filteredList.sort((a, b) => b.liked - a.liked);
		} else if (value === "저가순") {
			filteredList.sort((a, b) => a.price - b.price);
		} else if (value === "고가순") {
			filteredList.sort((a, b) => b.price - a.price);
		}
		setFilteredProducts(filteredList);
	};

	const options = [
		{ value: "등록순", label: "등록순" },
		{ value: "인기순", label: "인기순" },
		{ value: "저가순", label: "저가순" },
		{ value: "고가순", label: "고가순" },
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
					우리 동네 <span>중고</span> 물품
				</S.Title>
				<S.Filter>
					<BasicSelect
						variant={"primary"}
						options={options}
						selectedValue={"등록순"}
						onChange={onFiltering}
						currensValue={"등록순"}
						setCurrentValue={setCurrentValue}
					/>
				</S.Filter>
				<ProductList productList={filteredProducts || data?.usedProduct} />
				<RecentlyClicked />
			</S.Wrapper>
		</S.Container>
	);
};
export default UsedTransaction;

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
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: ${({ theme }) => theme.FONT_SIZE.xxsmall};
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
	Filter,
};
