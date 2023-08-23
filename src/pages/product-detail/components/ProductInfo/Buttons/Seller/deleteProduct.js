import ProductQueryApi from "apis/product.query.api";
import BasicButton from "components/Button";
import { useState } from "react";
import { useQueryClient } from "react-query";
import AlertModal from "../../Modals/alert";
import { useNavigate, useParams } from "react-router-dom";
import QueryKey from "consts/queryKey";

const DeleteProductBtn = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

	const queryClient = useQueryClient();
	const deleteData = ProductQueryApi.deleteProduct(id, () =>
		queryClient.invalidateQueries([QueryKey.productData]),
	);

	const deleteProduct = () => {
		console.log(deleteData.mutateAsync());
		setIsAlertModalOpen(true);
		setTimeout(() => {
			setIsAlertModalOpen(false);
			navigate("/");
		}, 1500);
	};

	return (
		<>
			<BasicButton
				color={"black"}
				size={"seller"}
				children={"삭제"}
				onClick={() => deleteProduct()}
				style={{ fontSize: "20px", fontWeight: "bold" }}
			/>
			{isAlertModalOpen && <AlertModal message={"삭제가 완료되었습니다."} />}
		</>
	);
};

export default DeleteProductBtn;
