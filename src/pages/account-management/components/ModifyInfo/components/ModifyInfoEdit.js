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
import SearchAddress from "components/SearchAddress";

const ModifyInfoEdit = ({ userData, field, setFieldValue, setUncomplete }) => {
	const [openInput, setOpenInput] = useState(true);
	const [address, setAddress] = useState("");
	const [addressOpen, setAddressOpen] = useState(false);
	const [duplicates, setDuplicates] = useState(false);
	// 닉네임 schema 적용하기
	const { email, phone, region, nickName } = SCHEMA;
	const schema = yup.object().shape({ email, phone, region, nickName });
	const {
		handleSubmit,
		control,
		formState: { errors, isValid },
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
			setUncomplete(true);
		} else if (btnName === "완료") {
			if (watch(field) === null) {
				alert("값을 입력해주세요.");
				return;
			}
			if (fieldValue !== userData[field] && !duplicates) {
				alert("중복 검사를 해주세요.");
				return;
			}
			if (Object.keys(errors).length > 0) {
				alert("양식에 맞게 올바르게 입력해주세요.");
				return;
			}
			setOpenInput(true);
			setFieldValue(fieldValue);
			setUncomplete(false);
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
				setDuplicates(true);
			}
		} catch (error) {
			if (error.response.status === 400) {
				alert("중복된 이메일 입니다.");
				console.log(error);
				setValue("email", "");
				setDuplicates(false);
			}
		}
	};

	const onNickNameCheck = async () => {
		if (!fieldValue) return;
		const nickname = fieldValue;
		try {
			const response = await AuthApi.nickNameDoubleCheck(nickname);
			if (response?.status === 200) {
				alert("사용 가능한 닉네임 입니다.");
				console.log(response);
				setDuplicates(true);
			}
		} catch (error) {
			if (error.response?.status === 400) {
				alert("중복된 닉네임 입니다.");
				console.log(error);
				setValue("nickName", "");
				setDuplicates(false);
			}
		}
	};

	return (
		<>
			<S.Title openInput={openInput}>{field}</S.Title>
			<S.Container>
				{openInput ? (
					<>
						<S.Value>
							{field === "nickName"
								? fieldValue || userData["nick_name"]
								: fieldValue || userData[field]}
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
							type={"text"}
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
