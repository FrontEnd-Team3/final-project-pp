import AuthApi from "apis/auth.api";
import BasicButton from "components/Button";
import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as SCHEMA from "../../../../../consts/schema";
import * as yup from "yup";
import ValidateInput from "pages/sign/components/OneValidate";
import { yupResolver } from "@hookform/resolvers/yup";

const MyProfileInfo = ({ userData, setNickNameValue }) => {
	const [openNickNameInput, setOpenNickNameInput] = useState(true);

	// 닉네임 schema 적용하기
	const { nickName } = SCHEMA;
	const schema = yup.object().shape({ nickName });
	const {
		handleSubmit,
		control,
		formState: { errors },
		getValues,
		setValue,
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const nickNameValue = getValues("nickName");

	const handleEdit = btnName => {
		if (btnName === "변경") {
			setOpenNickNameInput(false);
		} else if (btnName === "완료") {
			setOpenNickNameInput(true);
			// nickNameRef.current.value의 값이 빈 문자열이라면 함수를 빠져나감
			if (!nickNameValue.trim()) {
				return setValue("nickName", userData?.nick_name);
			}
			setNickNameValue(nickNameValue);
		}
	};

	const onNickNameCheck = handleSubmit(async () => {
		if (!nickNameValue.trim()) return;
		try {
			const response = await AuthApi.nickNameCheck(nickNameValue);
			if (response.status === 200) {
				alert("사용 가능한 닉네임 입니다.");
			}
		} catch (error) {
			if (error.response.status === 400) {
				alert("중복된 닉네임 입니다.");
				console.log(error);
				setValue("nickName", "");
			}
		}
	});

	return (
		<>
			<S.NickNameTitle openNickNameInput={openNickNameInput}>
				닉네임
			</S.NickNameTitle>
			<S.NickNameContainer>
				{openNickNameInput ? (
					<>
						<S.NickName>{nickNameValue || userData?.nick_name}</S.NickName>
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
							name={"nickName"}
							errors={errors}
							type={"text"}
						/>
						<div>
							<BasicButton
								size={"account"}
								color={"darkBlack"}
								children={"중복 확인"}
								onClick={onNickNameCheck}
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
						</div>
					</>
				)}
			</S.NickNameContainer>
		</>
	);
};

export default MyProfileInfo;

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

const NickNameTitle = styled.div`
	margin-top: 40px;
	margin-bottom: ${props => (props.openNickNameInput ? "2px" : "7px")};
	color: #8a8a8a;
`;
const NickNameContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const NickName = styled.div`
	margin-top: 16px;
`;

const S = {
	InputBox,
	Line,
	NickNameTitle,
	NickNameContainer,
	NickName,
};
