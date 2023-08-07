import BasicButton from "components/Button";
import { useNavigate } from "react-router-dom";

const EditProductBtn = () => {
	const navigate = useNavigate();
	return (
		<BasicButton
			color={"white"}
			size={"xxmedium"}
			children={"수정"}
			onClick={() => navigate("/productRegister")}
			style={{ fontSize: "20px", fontWeight: "bold" }}
		/>
	);
};

export default EditProductBtn;
