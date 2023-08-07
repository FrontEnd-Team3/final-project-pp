import AuthApi from "apis/auth.api";
import BasicButton from "components/Button";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as SCHEMA from "../../../../../consts/schema";
import * as yup from "yup";
import ValidateInput from "pages/sign/components/OneValidate";
import { yupResolver } from "@hookform/resolvers/yup";
import { replacePhone } from "utils/phoneNum";

const ModifyInfoEdit = ({ userData, field, setFieldValue }) => {
	const [openInput, setOpenInput] = useState(true);

	// 닉네임 schema 적용하기
	const { email, pw, phone, region } = SCHEMA;
	const schema = yup.object().shape({ email, pw, phone, region });
	const {
		handleSubmit,
		control,
		formState: { errors },
		getValues,
		setValue,
		watch,
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const phoneNumber = watch("phone");

	useEffect(() => {
		const newPhoneNumber = replacePhone(phoneNumber);
		setValue("phone", newPhoneNumber);
	}, [phoneNumber, setValue]);

	const fieldValue = getValues(field);

	const handleEdit = btnName => {
		if (btnName === "변경") {
			setOpenInput(false);
		} else if (btnName === "완료") {
			setOpenInput(true);
			if (!fieldValue) {
				return;
			}
			setFieldValue(fieldValue);
		}
	};

	const onEmailCheck = async () => {
		if (!fieldValue) return;
		const email = fieldValue;
		try {
			const response = await AuthApi.emailDoubleCheck(email);
			if (response.status === 200) {
				alert("사용 가능한 이메일 입니다.");
				console.log(response);
			}
		} catch (error) {
			if (error.response.status === 400) {
				alert("중복된 이메일 입니다.");
				console.log(error);
				setValue("email", "");
			}
		}
	};

	return (
		<>
			<S.Title openInput={openInput}>
				{field === "pw" ? "password" : field}
			</S.Title>
			<S.Container>
				{openInput ? (
					<>
						<S.Value>
							{" "}
							{field === "pw" ? "●●●●●●●●●●" : fieldValue || userData[field]}
						</S.Value>
						<BasicButton
							size={"account"}
							color={"darkBlack"}
							children={"변경"}
							onClick={() => {
								handleEdit("변경");
							}}
						/>
					</>
				) : (
					<>
						<ValidateInput
							control={control}
							name={field}
							errors={errors}
							type={field === "pw" ? "password" : "text"}
						/>
						<div>
							{field === "email" ? (
								<>
									<BasicButton
										size={"account"}
										color={"darkBlack"}
										children={"중복 확인"}
										onClick={onEmailCheck}
									/>
									<BasicButton
										size={"account"}
										color={"darkBlack"}
										children={"완료"}
										style={{ marginLeft: "5px" }}
										onClick={() => {
											handleEdit("완료");
										}}
									/>
								</>
							) : (
								<BasicButton
									size={"account"}
									color={"darkBlack"}
									children={"완료"}
									style={{ marginLeft: "5px" }}
									onClick={() => {
										handleEdit("완료");
									}}
								/>
							)}
						</div>
					</>
				)}
			</S.Container>
		</>
	);
};

export default ModifyInfoEdit;

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

const Title = styled.div`
	margin-top: 40px;
	margin-bottom: ${props => (props.openInput ? "2px" : "7px")};
	color: #8a8a8a;
`;
const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Value = styled.div`
	margin-top: 16px;
`;

const S = {
	InputBox,
	Line,
	Title,
	Container,
	Value,
};
