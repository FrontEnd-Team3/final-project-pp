import styled from "styled-components";

const OneProduct = ({ product }) => {
	const url = product.image[0];
	return (
		<>
			<S.Container>
				<Img src={url}></Img>
				<div>{product.name}</div>
				<div>{product.location}</div>
			</S.Container>
		</>
	);
};
export default OneProduct;
const Img = styled.img`
	width: 250px;
	height: 250px;
`;
const Container = styled.div`
	width: 250px;
	height: 280px;
	background-color: #e2e2fe;
`;
const S = {
	Container,
	Img,
};
