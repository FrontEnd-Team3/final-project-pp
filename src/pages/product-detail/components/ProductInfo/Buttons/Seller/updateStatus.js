import BasicButton from "components/Button";
import { useState } from "react";
import SelectListModal from "../../Modals/selectList";
import NoListModal from "../../Modals/noList";
import { useParams } from "react-router-dom";
import AlertModal from "../../Modals/alert";

const UpdateProductStatusBtn = ({ chat }) => {
	const { id } = useParams();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

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
					<SelectListModal
						setIsModalOpen={setIsModalOpen}
						idx={id}
						setIsAlertModalOpen={setIsAlertModalOpen}
					/>
				) : (
					<NoListModal setIsModalOpen={setIsModalOpen} />
				))}
			{isAlertModalOpen && <AlertModal message={"판매가 완료되었습니다."} />}
		</>
	);
};

export default UpdateProductStatusBtn;
