import styled from "styled-components";
import BasicButton from "components/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import NoListModal from "../Modals/noList";
import SelectListModal from "../Modals/selectList";

const ButtonsForSeller = ({ chat }) => {
	const navigate = useNavigate();

	const { id } = useParams();
	console.log("buttonid", id);

	const deleteProduct = () => {
		axios
			.delete(`/api/product?prod_idx=${id}`)
			.then(res => console.log("삭제", res?.data));
	};

	const [isModalOpen, setIsModalOpen] = useState(false);

	const onOpenModal = () => {
		setIsModalOpen(true);
	};

	const [isDealClosed, setIsDealClosed] = useState(false);

	return (
		<>
			<S.ProductButtons>
				<BasicButton
					color={"white"}
					size={"xxmedium"}
					children={"수정"}
					onClick={() => navigate("/productRegister")}
					style={{ fontSize: "20px", fontWeight: "bold" }}
				/>
				<BasicButton
					color={"black"}
					size={"xxmedium"}
					children={"삭제"}
					onClick={() => deleteProduct()}
					style={{ fontSize: "20px", fontWeight: "bold" }}
				/>
				<BasicButton
					color={isDealClosed ? "gray" : "primary"}
					size={"xxmedium"}
					children={isDealClosed ? "판매완료" : "판매중"}
					onClick={onOpenModal}
					style={{ fontSize: "20px", fontWeight: "bold" }}
				/>
			</S.ProductButtons>
			{isModalOpen &&
				(chat.length ? (
					<SelectListModal
						setIsModalOpen={setIsModalOpen}
						chat={chat}
						setIsDealClosed={setIsDealClosed}
						idx={id}
					/>
				) : (
					<NoListModal setIsModalOpen={setIsModalOpen} />
				))}
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
