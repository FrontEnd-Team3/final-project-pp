import styled from "styled-components";
import OneProduct from "./one-soldoutproduct";
import { productList } from "mock/products";
import { useState } from "react";
import Pagenation from "../pagenation";

const Soldout = () => {
	// const [product, setProduct] = useState(productList);
	const [limit] = useState(8);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limit;

	return (
		<S.Container>
			<S.Button>
				<S.Icon src="img/soldouticon.png"></S.Icon>최근 거래 종료 품목
			</S.Button>
			<S.Gridwrapper>
				{productList.slice(offset, offset + limit).map(product => (
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
	grid-template-columns: repeat(4, 165px);
	grid-gap: 10px;
	position: relative;
	top: 65px;
`;
const Button = styled.button`
	width: 280px;
	height: 46px;
	font-size: 17px;
	padding-bottom: 8px;
	background-color: #c8c8ff;
	border-radius: 12px;
	color: #404040;
	box-shadow: 1px 1px 1px 1px;
	position: relative;
	left: 203px;
`;
s;

const Icon = styled.img`
	width: 20px;
	position: relative;
	right: 10px;
	top: 5px;
`;
const Container = styled.div`
	position: relative;
	top: 100px;
	height: 800px;
	align-items: center;
`;
const S = {
	Button,
	Icon,
	Container,
	Gridwrapper,
};
