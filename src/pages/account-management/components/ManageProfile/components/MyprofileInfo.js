import AuthApi from "apis/auth.api";
import BasicButton from "components/Button";
import { useRef, useState } from "react";
import styled from "styled-components";

const MyProfileInfo = ({ userData, nickNameValue, setNickNameValue }) => {
	const [openNickNameInput, setOpenNickNameInput] = useState(true);
	const nickNameRef = useRef(null);
	// const [nickNameValue, setNickNameValue] = useState(userData?.nick_name);

	const handleEdit = btnName => {
		if (btnName === "변경") {
			setOpenNickNameInput(false);
		} else if (btnName === "완료") {
			setOpenNickNameInput(true);
			// nickNameRef.current.value의 값이 빈 문자열이라면 함수를 빠져나감
			if (!nickNameRef.current.value.trim()) {
				return setNickNameValue(userData?.nick_name);
			}
			setNickNameValue(nickNameRef.current.value);
		}
	};
	const onChangeRef = e => {
		nickNameRef.current.value = e.target.value;
	};

	const onNickNameCheck = async () => {
		if (!nickNameRef.current.value.trim()) return;
		try {
			const nickName = nickNameValue;
			console.log(nickName);
			const response = await AuthApi.nickNameCheck(nickName);
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
	};

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
						<S.InputBox
							defaultValue={nickNameValue}
							ref={nickNameRef}
							onChange={onChangeRef}
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
			<S.Line />
			<S.IntroducationTitle>소개</S.IntroducationTitle>
			<S.IntroducationContainer>
				<S.Introducation>
					자기소개 페이지입니다. 날 펙트로 정의 하자면 퍼펙트.
				</S.Introducation>
				<BasicButton size={"account"} color={"darkBlack"} children={"변경"} />
			</S.IntroducationContainer>
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
	margin-top: 80px;
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

const IntroducationTitle = styled.div`
	margin-top: 80px;
	color: #8a8a8a;
`;
const IntroducationContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Introducation = styled.div`
	margin-top: 16px;
`;

const S = {
	InputBox,
	Line,
	NickNameTitle,
	NickNameContainer,
	NickName,
	IntroducationTitle,
	IntroducationContainer,
	Introducation,
};
