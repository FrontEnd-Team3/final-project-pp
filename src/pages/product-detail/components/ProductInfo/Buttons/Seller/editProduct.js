import ProductQueryApi from "apis/product.query.api";
import BasicButton from "components/Button";
import { useNavigate, useParams } from "react-router-dom";

const EditProductBtn = () => {
	const navigate = useNavigate();

	const { id } = useParams();
	const { data, isLoading, error } = ProductQueryApi.getProductDetail(id);
	// 등록 페이지로 이동하면서 등록페이지에 조회한 데이터 전달
	const handleEdit = () => {
		navigate("/productRegister", { state: { prevData: data } });
	};
	return (
		<BasicButton
			color={"white"}
			size={"xxmedium"}
			children={"수정"}
			onClick={() => handleEdit()}
			style={{ fontSize: "20px", fontWeight: "bold" }}
		/>
	);
};

export default EditProductBtn;
