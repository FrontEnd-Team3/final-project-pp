import styled from "styled-components";
import BasicButton from "components/Button";
import { useNavigate } from "react-router-dom";

const ButtonsForSeller = () => {
	const navigate = useNavigate();
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
					onClick={() => alert("정말 삭제하시겠습니까?(임시 이벤트)")}
					style={{ fontSize: "20px", fontWeight: "bold" }}
				/>
				<BasicButton
					color={"primary"}
					size={"xxmedium"}
					children={"판매중"}
					style={{ fontSize: "20px", fontWeight: "bold" }}
				/>
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
