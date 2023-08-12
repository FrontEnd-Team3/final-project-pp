import BasicButton from "components/Button";

const EditCompleteBtn = ({ handleSave }) => {
	return (
		<BasicButton
			size={"medium"}
			color={"darkBlack"}
			children={"변경사항 저장"}
			style={{ marginTop: "60px", marginLeft: "400px" }}
			onClick={handleSave}
			// disabled={!emailValue && !phoneValue && !regionValue && !nickNameValue}
		/>
	);
};

export default EditCompleteBtn;
