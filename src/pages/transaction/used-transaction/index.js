import BasicButton from "components/Button";
import ProductList from "components/ProductList/withPagination";
import RecentlyClicked from "components/RecentlyClicked";
import BasicSelect from "components/Select";
import { productList } from "mocks/data/productsList";
import { useState } from "react";
import styled from "styled-components";
import { primaryFont } from "styles/common";

const UsedTransaction = () => {
	const PRODUCTLIST = productList.filter(
		product => product.status !== "판매완료" && product.category,
	);
	const [filterdProducts, setFilterdProducts] = useState(PRODUCTLIST);

	const onFiltering = value => {
		let filteredList = [...PRODUCTLIST];

		if (value === "등록순") {
			filteredList.sort((a, b) => a.date - b.date);
		} else if (value === "인기순") {
			filteredList.sort((a, b) => b.bookmarkCount - a.bookmarkCount);
		} else if (value === "저가순") {
			filteredList.sort((a, b) => a.price - b.price);
		} else if (value === "고가순") {
			filteredList.sort((a, b) => b.price - a.price);
		}

		setFilterdProducts(filteredList);
	};

	const options = [
		{ value: "등록순", label: "등록순" },
		{ value: "인기순", label: "인기순" },
		{ value: "저가순", label: "저가순" },
		{ value: "고가순", label: "고가순" },
	];

	return (
		<S.Container>
			<S.Wrapper>
				<S.Title>
					우리 동네 <span>중고</span> 물품
				</S.Title>
				<S.Address>
					<div>
						서울시 성동구 성수동{" "}
						<BasicButton
							color={"primary"}
							shape={"primary"}
							size={"xsmall"}
							children={"변경"}
							style={{ fontSize: "14px", marginLeft: "15px" }}
						/>
					</div>
					<BasicSelect
						variant={"primary"}
						options={options}
						selectedValue={"등록순"}
						onChange={onFiltering}
					/>
				</S.Address>
				<ProductList productList={filterdProducts} />
				<RecentlyClicked />
			</S.Wrapper>
		</S.Container>
	);
};
export default UsedTransaction;

const Container = styled.div`
	width: 100%;
	* {
		${primaryFont}
	}
`;

const Wrapper = styled.div`
	margin: 50px auto;
	max-width: 1060px;
`;

const Title = styled.p`
	text-align: center;
	margin-bottom: 50px;
	font-size: ${({ theme }) => theme.FONT_SIZE.mmlarge};
	& span {
		color: ${({ theme }) => theme.PALETTE.darkPrimary};
	}
`;

const Address = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: ${({ theme }) => theme.FONT_SIZE.xxsmall};
	margin: 12px 0;
	& button {
		color: ${({ theme }) => theme.PALETTE.white};
	}
`;

const S = {
	Container,
	Wrapper,
	Title,
	Address,
};
