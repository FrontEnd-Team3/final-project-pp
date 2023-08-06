import AuthApi from "apis/auth.api";
import UserQueryApi from "apis/user.query.api";
import BasicButton from "components/Button";
import Nav from "pages/my-page/components/Nav";
import { useState } from "react";
import styled from "styled-components";
import ModifyInfoEdit from "./components/ModifyInfoEdit";

const AccountPrivacy = () => {
	const userInfo = UserQueryApi.getUserInfo();
	const userData = userInfo.data;

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
				const responseInfo = await AuthApi.userProfileInfo(newValue);
				console.log("개인정보 수정사항 저장 성공:", responseInfo);
			} catch (error) {
				console.error("개인정보 저장 실패:", error);
			}
		}
	};

	if (userData) {
		return (
			<S.MasterWrapper>
				<S.NavWrapper>
					<Nav />
				</S.NavWrapper>
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
						style={{ marginTop: "80px" }}
						onClick={handleSave}
					/>
				</S.PrivacyWrapper>
			</S.MasterWrapper>
		);
	}
};

export default AccountPrivacy;

const MasterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
const NavWrapper = styled.div`
	padding-top: 124px;
`;
const PrivacyWrapper = styled.div`
	width: 1060px;
	padding: 60px;
	margin: 100px 50px;
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
	NavWrapper,
	PrivacyWrapper,
	PrivacyCorrectionWrapper,
	PrivacyCorrection,
	Line,
	Account,
};
