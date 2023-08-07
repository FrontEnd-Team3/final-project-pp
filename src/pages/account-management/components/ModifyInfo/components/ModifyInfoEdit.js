import AuthApi from "apis/auth.api";
import BasicButton from "components/Button";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as SCHEMA from "../../../../../consts/schema";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { replacePhone } from "utils/phoneNum";
import SearchAddress from "components/SearchAddress";
import ValidateInput from "../../OneValidate";

const ModifyInfoEdit = ({ userData, field, setFieldValue }) => {
	const [openInput, setOpenInput] = useState(true);
	const [address, setAddress] = useState("");
	const [addressOpen, setAddressOpen] = useState(false);
	// 닉네임 schema 적용하기
	const { email, pw, phone, region, nickName } = SCHEMA;
	const schema = yup.object().shape({ email, pw, phone, region, nickName });
	const {
		control,
		formState: { errors },
		getValues,
		setValue,
		watch,
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
		defaultValues: {
			[field]: userData[field],
		},
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

	const onNickNameCheck = async () => {
		if (!fieldValue) return;
		const nickName = fieldValue;
		try {
			const response = await AuthApi.nickNameDoubleCheck(nickName);
			if (response.status === 200) {
				alert("사용 가능한 닉네임입니다.");
				console.log(response);
			}
		} catch (error) {
			if (error.response.status === 400) {
				alert("중복된 닉네임입니다.");
				console.log(error);
				setValue("nickName", "");
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
							placeholder={
								field === "region"
									? "주소창을 클릭해주세요"
									: "변경할 정보를 입력해주세요"
							}
							address={field === "region" ? address : undefined}
							onClick={
								field === "region" ? () => setAddressOpen(true) : undefined
							}
						/>
						{addressOpen && (
							<SearchAddress
								setAddress={setAddress}
								setIsOpen={setAddressOpen}
								setValue={setValue}
							/>
						)}
						<div>
							{field === "email" && (
								<>
									<BasicButton
										size={"account"}
										color={"darkBlack"}
										children={"중복 확인"}
										onClick={onEmailCheck}
										disabled={errors[field] || !getValues("email")}
									/>
									<BasicButton
										size={"account"}
										color={"darkBlack"}
										children={"완료"}
										style={{ marginLeft: "5px" }}
										onClick={() => {
											handleEdit("완료");
										}}
										disabled={errors[field] || !getValues("email")}
									/>
								</>
							)}
							{field === "nickName" && (
								<>
									<BasicButton
										size={"account"}
										color={"darkBlack"}
										children={"중복 확인"}
										onClick={onNickNameCheck}
										disabled={errors[field] || !getValues("nickName")}
									/>
									<BasicButton
										size={"account"}
										color={"darkBlack"}
										children={"완료"}
										style={{ marginLeft: "5px" }}
										onClick={() => {
											handleEdit("완료");
										}}
										disabled={errors[field] || !getValues("nickName")}
									/>
								</>
							)}
							{field !== "email" && field !== "nickName" && (
								<BasicButton
									size={"account"}
									color={"darkBlack"}
									children={"완료"}
									style={{ marginLeft: "5px" }}
									onClick={() => {
										handleEdit("완료");
									}}
									disabled={errors[field] || !getValues(field)}
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
