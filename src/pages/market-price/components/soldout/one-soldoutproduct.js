import styled from "styled-components";

const OneProduct = ({ product }) => {
	return (
		<>
			<S.Container>
				<div>
					{product.id}
					<img src={product.image}></img>
				</div>
			</S.Container>
		</>
	);
};
export default OneProduct;

const Container = styled.div`
	border: 1px solid black;
	width: 165px;
	height: 210px;
	background-color: #e2e2fe;
	border: 3px solid black;
	border-radius: 7px;
`;
const S = {
	Container,
};
