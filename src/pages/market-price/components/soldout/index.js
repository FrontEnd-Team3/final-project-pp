import styled from "styled-components";
import OneProduct from "./one-soldoutproduct";
import { productList } from "mock/productsList";
import { useState } from "react";
import Pagenation from "../pagenation";
import { flexColumn } from "styles/common";

const Soldout = () => {
	const [limit] = useState(8);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limit;
	const SoldoutList = productList.filter(v => v.status == "판매완료");
	return (
		<S.Container>
			<S.Button>최근 거래 종료 품목</S.Button>
			<S.Gridwrapper>
				{SoldoutList.slice(offset, offset + limit).map(product => (
					<OneProduct product={product} />
				))}
			</S.Gridwrapper>
			<Pagenation
				total={productList.length}
				limit={limit}
				page={page}
				setPage={setPage}
			/>
		</S.Container>
	);
};
export default Soldout;
const Gridwrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 253px);
	grid-gap: 10px;
	position: relative;
	top: 65px;
`;
const Button = styled.button`
	width: 260px;
	height: 52px;
	font-size: 19px;
	background-color: ${({ theme }) => theme.PALETTE.darkBlack};
	color: ${({ theme }) => theme.PALETTE.white};
	position: relative;
`;

const Container = styled.div`
	position: relative;
	width: 100%;
	top: 600px;
	height: 800px;
	${flexColumn}
	align-items: center;
`;
const S = {
	Button,
	Container,
	Gridwrapper,
};
