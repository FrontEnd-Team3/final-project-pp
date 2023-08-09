import BasicButton from "components/Button";
import { useState } from "react";
import SelectListModal from "../../Modals/selectList";
import NoListModal from "../../Modals/noList";
import { useParams } from "react-router-dom";

const UpdateProductStatusBtn = ({ chat }) => {
	const { id } = useParams();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const onOpenModal = () => {
		setIsModalOpen(true);
	};
	return (
		<>
			<BasicButton
				color={"primary"}
				size={"xxmedium"}
				children={"판매중"}
				onClick={onOpenModal}
				style={{ fontSize: "20px", fontWeight: "bold" }}
			/>
			{isModalOpen &&
				(chat?.length ? (
					<SelectListModal setIsModalOpen={setIsModalOpen} idx={id} />
				) : (
					<NoListModal setIsModalOpen={setIsModalOpen} />
				))}
		</>
	);
};

export default UpdateProductStatusBtn;
