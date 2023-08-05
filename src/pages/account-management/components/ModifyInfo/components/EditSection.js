import AuthApi from "apis/auth.api";
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
	// const { email, pw, pwCheck, nickName, region, phone } = SCHEMA;
	// const schema = yup
	// 	.object()
	// 	.shape({ email, pw, pwCheck, nickName, region, phone });

	// const {
	// 	handleSubmit,
	// 	control,
	// 	formState: { errors },
	// 	getValues,
	// 	setValue, // useForm에서 setValue 메서드를 가져옵니다.
	// 	watch,
	// 	register,
	// } = useForm({
	// 	resolver: yupResolver(schema),
	// 	mode: "onChange",
	// });

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

	const onEmailCheck = async () => {
		console.log(inputRef.current.value);
		if (!inputRef.current.value.trim()) return;
		try {
			const email = inputRef.current.value;
			const response = await AuthApi.emailDoubleCheck(email);
			if (response.status === 200) {
				alert("사용 가능한 이메일 입니다.");
			}
		} catch (error) {
			if (error.response.status === 400) {
				alert("중복된 이메일 입니다.");
				console.log(error);
				inputRef.current.value = "";
			}
		}
	};

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
			<S.Title editStateKey={editStateKey}>{title}</S.Title>
			<S.Container>
				<S.InputBox
					ref={inputRef}
					type="text"
					defaultValue={value}
					// {...register(editStateKey)}
				/>
				{editStateKey === "email" && (
					<BasicButton
						size={"account"}
						color={"darkBlack"}
						children={"중복 확인"}
						onClick={onEmailCheck}
					/>
				)}
				<BasicButton
					size={"account"}
					color={"darkBlack"}
					children={"완료"}
					name={`${editStateKey}`}
					onClick={handleCompleteEditClicked}
				/>
			</S.Container>
			<S.Line />
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
	margin-bottom: ${props => (props.editStateKey ? "7px" : "2px")};
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
