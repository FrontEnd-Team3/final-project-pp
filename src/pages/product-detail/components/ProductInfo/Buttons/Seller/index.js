import styled from "styled-components";
import BasicButton from "components/Button";
import DeleteProductBtn from "./deleteProduct";
import EditProductBtn from "./editProduct";
import UpdateProductStatusBtn from "./updateStatus";

const ButtonsForSeller = ({ chat, status }) => {
	return (
		<>
			<S.ProductButtons>
				{status !== "판매완료" ? (
					<>
						<EditProductBtn />
						<DeleteProductBtn />
						<UpdateProductStatusBtn chat={chat} />
					</>
				) : (
					<BasicButton
						size={"large"}
						children={"판매완료"}
						style={{ fontSize: "20px", fontWeight: "bold" }}
						disabled
					/>
				)}
			</S.ProductButtons>
		</>
	);
};

export default ButtonsForSeller;

const ProductButtons = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 30px 0;
`;

const S = { ProductButtons };
