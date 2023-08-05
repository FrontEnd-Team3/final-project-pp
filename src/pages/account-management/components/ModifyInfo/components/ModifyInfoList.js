import AuthApi from "apis/auth.api";
import BasicButton from "components/Button";
import { useState } from "react";
import styled from "styled-components";
import EditSection from "./EditSection";

const ModifyInfoList = ({ userData }) => {
	const [editStates, setEditStates] = useState({
		email: true,
		password: true,
		phone: true,
		region: true,
	});

	const initialState = {
		email: userData?.email,
		password: "●●●●●●●●●●",
		phone: userData?.phone,
		region: userData?.region,
	};

	const [inputValues, setInputValues] = useState(initialState);

	function handleEditChange(key) {
		setEditStates(prevState => ({
			...prevState,
			[key]: !prevState[key],
		}));
	}

	function handleCompleteEdit(e, id) {
		setInputValues({
			...inputValues,
			[id]: e.target.value,
		});
	}

	const handleSave = async () => {
		try {
			const newValue = {
				email: inputValues.email,
				password: inputValues.password,
				phone: inputValues.phone,
				region: inputValues.region,
			};
			const responseInfo = await AuthApi.userProfileInfo(newValue);
			console.log("수정사항 저장 성공:", responseInfo);
		} catch (error) {
			console.error("수정사항 저장 실패:", error);
		}
	};

	return (
		<>
			{Object.keys(editStates).map(key => (
				<EditSection
					key={key}
					title={
						key.charAt(0).toUpperCase() +
						key.slice(1, key.length).toLowerCase() +
						" " +
						(key === "phone" ? "번호" : "")
					}
					value={inputValues[key]}
					handleChange={handleEditChange}
					handleCompleteEdit={handleCompleteEdit}
					editStateKey={key}
					open={editStates[key]}
				/>
			))}
			<BasicButton
				size={"medium"}
				color={"darkBlack"}
				children={"변경사항 저장"}
				style={{ marginTop: "40px" }}
				onClick={handleSave}
			/>

			<S.Withdrawal>회원탈퇴</S.Withdrawal>
		</>
	);
};

export default ModifyInfoList;

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

const EmailContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const EmailTitle = styled.div`
	margin-top: 40px;
	color: #8a8a8a;
`;
const Email = styled.div`
	margin-top: 16px;
`;
const PasswordTitle = styled.div`
	margin-top: 40px;
	color: #8a8a8a;
`;
const PasswordContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Password = styled.div`
	margin-top: 16px;
`;
const Privacy = styled.div`
	margin-top: 80px;
	font-size: 20px;
	font-weight: bold;
`;
const PhoneNumberTitle = styled.div`
	margin-top: 40px;
	color: #8a8a8a;
`;
const PhoneNumberContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const PhoneNumber = styled.div`
	margin-top: 16px;
`;
const TrandingAreaTitle = styled.div`
	margin-top: 40px;
	color: #8a8a8a;
`;
const TrandingAreaContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const TrandingArea = styled.div`
	margin-top: 16px;
`;
const Withdrawal = styled.div`
	margin-top: 90px;
	border-bottom: 1px solid #a9a9a9;
	width: 50px;
	color: #a9a9a9;
	font-size: 14px;
`;

const S = {
	InputBox,
	Line,
	EmailContainer,
	EmailTitle,
	Email,
	PasswordTitle,
	PasswordContainer,
	Password,
	Privacy,
	PhoneNumberTitle,
	PhoneNumberContainer,
	PhoneNumber,
	TrandingAreaTitle,
	TrandingAreaContainer,
	TrandingArea,
	Withdrawal,
};
