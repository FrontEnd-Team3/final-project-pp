import BasicButton from "components/Button";
import { useRef } from "react";
import styled from "styled-components";

const EditSection = ({
	title,
	value,
	handleChange,
	handleCompleteEdit,
	editStateKey,
	open,
}) => {
	const inputRef = useRef(null);

	function handleEditClick() {
		handleChange(editStateKey);
	}
	function handleCompleteEditClicked() {
		if (!inputRef.current.value.trim()) {
			return;
		}
		handleCompleteEdit({ target: inputRef.current }, editStateKey);
		handleChange(editStateKey);
	}

	if (open) {
		return (
			<>
				<S.Title>{title}</S.Title>
				<S.Container>
					<S.Value>{value}</S.Value>
					<BasicButton
						size={"account"}
						color={"darkBlack"}
						children={"변경"}
						name={`${editStateKey}`}
						onClick={handleEditClick}
					/>
				</S.Container>
				<S.Line />
			</>
		);
	}

	return (
		<>
			<S.Title>{title}</S.Title>
			<S.Container>
				<S.InputBox ref={inputRef} defaultValue={value} />
				<BasicButton
					size={"account"}
					color={"darkBlack"}
					children={"완료"}
					style={{ marginLeft: "5px" }}
					name={`${editStateKey}`}
					onClick={handleCompleteEditClicked}
				/>
			</S.Container>
		</>
	);
};

export default EditSection;

const InputBox = styled.input`
	width: 765px;
	font-size: 16px;
`;

const Line = styled.div`
	width: 950px;
	background-color: #dddddd;
	height: 2px;
	margin: 14px 0;
`;

const Value = styled.div`
	margin-top: 16px;
`;

const Title = styled.div`
	margin-top: 40px;
	color: #8a8a8a;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

const S = {
	InputBox,
	Line,
	Value,
	Title,
	Container,
};
