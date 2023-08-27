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
		clearErrors,
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
			if (
				fieldValue !== userData[field] &&
				!duplicates &&
				field !== "phone" &&
				field !== "region"
			) {
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
		} else if (btnName === "취소") {
			setValue(field, userData[field]);
			setOpenInput(true);
			setDuplicates(false);
			clearErrors();
		}
	};

	const emailValue = watch("email");

	useEffect(() => {
		console.log("이메일 값이 변경되었습니다:", emailValue);
	}, [emailValue]);

	const nickNameValue = watch("nickName");

	useEffect(() => {
		console.log("닉네임 값이 변경되었습니다:", nickNameValue);
	}, [nickNameValue]);

	const onEmailCheck = async () => {
		// console.log("input값:", fieldValue);
		// console.log("저장된 data값:", userData[field]);
		if (fieldValue === userData[field]) {
			return alert("현재 이메일과 다른 이메일로 변경 후 확인해 주세요. ");
		}
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
		console.log("input값:", fieldValue);
		console.log("저장된 data값:", userData["nick_name"]);
		if (fieldValue === userData["nick_name"]) {
			return alert("현재 닉네임과 다른 닉네임으로 변경 후 확인해 주세요.");
		}
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
		<S.MasterWarpper>
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
								if (field === "region") {
									setAddressOpen(true);
								}
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
										children={"취소"}
										style={{ marginLeft: "5px" }}
										onClick={() => {
											handleEdit("취소");
										}}
									/>
									<BasicButton
										size={"account"}
										color={"darkBlack"}
										children={"중복 확인"}
										onClick={onEmailCheck}
										style={{ marginLeft: "5px" }}
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
										children={"취소"}
										style={{ marginLeft: "5px" }}
										onClick={() => {
											handleEdit("취소");
										}}
									/>
									<BasicButton
										size={"account"}
										color={"darkBlack"}
										children={"중복 확인"}
										style={{ marginLeft: "5px" }}
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
							{field === "region" && (
								<BasicButton
									size={"account"}
									color={"darkBlack"}
									children={"변경"}
									style={{ marginLeft: "5px" }}
									onClick={() => {
										handleEdit("변경");
										if (field === "region") {
											setAddressOpen(true);
										}
									}}
								/>
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
		</S.MasterWarpper>
	);
};

export default ModifyInfoEdit;
const MasterWarpper = styled.div`
	max-width: 962px;
`;
const InputBox = styled.input`
	width: 100%;
	font-size: 16px;
`;

const Line = styled.div`
	width: 100%;
	background-color: #dddddd;
	height: 2px;
	margin: 14px 0;
	@media ${({ theme }) => theme.DEVICE.pc} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: auto;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: auto;
	}
`;

const Title = styled.div`
	margin-top: 40px;
	margin-bottom: ${props => (props.openInput ? "2px" : "7px")};
	color: #8a8a8a;
`;
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
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
	MasterWarpper,
};
