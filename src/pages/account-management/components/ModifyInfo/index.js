import AuthApi from "apis/auth.api";
import UserQueryApi from "apis/user.query.api";
import BasicButton from "components/Button";
import BasicModal from "components/Modal/WithoutButton";
import { useState } from "react";
import styled from "styled-components";
import ModifyInfoEdit from "./components/ModifyInfoEdit";

const AccountPrivacy = () => {
	const userInfo = UserQueryApi.getUserInfo();
	const userData = userInfo.data;

	const [isOpen, setIsOpen] = useState(false);

	const [emailValue, setEmailValue] = useState(userData?.email);
	const [passwordValue, setPasswordValue] = useState("000000000");
	const [phoneValue, setPhoneValue] = useState(userData?.phone);
	const [regionValue, setRegionValue] = useState(userData?.region);

	const handleSave = async () => {
		if (emailValue || passwordValue || phoneValue || regionValue) {
			try {
				const newValue = {
					email: emailValue,
					phone: phoneValue,
					region: regionValue,
				};
				setIsOpen(true);
				const responseInfo = await AuthApi.userProfileInfo(newValue);
				console.log("개인정보 수정사항 저장 성공:", responseInfo);
				const pw = passwordValue;
				const reponsePasswordInfo = await AuthApi.userPasswordInfo(pw);
				console.log("비밀번호 수정 저장 성공:", reponsePasswordInfo);
			} catch (error) {
				console.error("개인정보 저장 실패:", error);
			}
		}
	};

	if (userData) {
		return (
			<>
				<S.MasterWrapper>
					<S.PrivacyWrapper>
						<S.PrivacyCorrectionWrapper>
							<S.PrivacyCorrection>개인 정보 수정</S.PrivacyCorrection>
						</S.PrivacyCorrectionWrapper>
						<S.Line />
						<S.Account>내 계정</S.Account>
						<ModifyInfoEdit
							userData={userData}
							field={"email"}
							setFieldValue={setEmailValue}
						/>
						<S.Line />
						<ModifyInfoEdit
							userData={userData}
							field={"pw"}
							setFieldValue={setPasswordValue}
						/>
						<S.Line />
						<ModifyInfoEdit
							userData={userData}
							field={"phone"}
							setFieldValue={setPhoneValue}
						/>
						<S.Line />
						<ModifyInfoEdit
							userData={userData}
							field={"region"}
							setFieldValue={setRegionValue}
						/>
						<S.Line />
						<BasicButton
							size={"medium"}
							color={"darkBlack"}
							children={"변경사항 저장"}
							style={{ marginTop: "60px", marginLeft: "400px" }}
							onClick={handleSave}
							disabled={
								!emailValue && !passwordValue && !phoneValue && !regionValue
							}
						/>
					</S.PrivacyWrapper>
				</S.MasterWrapper>
				{isOpen && (
					<BasicModal
						background={"gray"}
						subtitle={"primary"}
						title={"primary"}
						container={"primary"}
						position={"primary"}
						titlement={"Have been saved!"}
						subtitlement={"수정이 완료되었습니다"}
						onClickOutside={() => setIsOpen(false)}
					/>
				)}
			</>
		);
	}
};

export default AccountPrivacy;

const MasterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const PrivacyWrapper = styled.div`
	width: 1060px;
	padding: 60px;
	margin: 0px 0px 50px 174px;
	button {
		font-size: 16px;
	}
`;
const PrivacyCorrectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const PrivacyCorrection = styled.div`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 16px;
`;
const Line = styled.div`
	width: 950px;
	background-color: #dddddd;
	height: 1px;
	margin: 14px 0;
`;
const Account = styled.div`
	margin-top: 60px;
	font-size: 20px;
	font-weight: bold;
`;

const S = {
	MasterWrapper,
	PrivacyWrapper,
	PrivacyCorrectionWrapper,
	PrivacyCorrection,
	Line,
	Account,
};
