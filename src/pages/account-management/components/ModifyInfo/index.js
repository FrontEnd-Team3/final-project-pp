import AuthApi from "apis/auth.api";
import UserQueryApi from "apis/user.query.api";
import BasicButton from "components/Button";
import BasicModal from "components/Modal/WithoutButton";
import { useState } from "react";
import styled from "styled-components";
import ModifyInfoEdit from "./components/ModifyInfoEdit";
import MyProfileImage from "../ManageProfile/components/MyprofileImage";

const AccountPrivacy = () => {
	const userInfo = UserQueryApi.getUserInfo();
	const userData = userInfo.data;

	const [isOpen, setIsOpen] = useState(false);
	const [nickNameValue, setNickNameValue] = useState(userData?.nick_name);
	const [imageSrc, setImageSrc] = useState(null);

	const [emailValue, setEmailValue] = useState(userData?.email);
	const [passwordValue, setPasswordValue] = useState("0000000a!");
	const [phoneValue, setPhoneValue] = useState(userData?.phone);
	const [regionValue, setRegionValue] = useState(userData?.region);
	const onUpload = e => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);

			return new Promise(resolve => {
				reader.onload = () => {
					setImageSrc(reader.result || null); // 파일의 컨텐츠
					resolve();
				};
			});
		}
	};

	// 입력 파일 창을 숨기고, 이미지 변경 버튼 클릭 시 파일 업로드 창이 뜨도록 설정
	const handleUploadClick = () => {
		const fileInput = document.getElementById("fileInput");
		fileInput.click();
	};

	const handleDeleteClick = () => {
		setImageSrc("img/profile.png"); // 삭제 버튼으로 프로필 이미지 삭제시 기본 프로필 이미지가 나오도록 함
	};

	const handleSave = async () => {
		if (
			emailValue ||
			passwordValue ||
			phoneValue ||
			regionValue ||
			imageSrc ||
			nickNameValue
		) {
			try {
				setIsOpen(true);

				const inputImageFile = document.getElementById("fileInput").files[0];
				if (inputImageFile) {
					const responseImage = await AuthApi.userProfileImage(inputImageFile);
					console.log("이미지 수정사항 저장 성공:", responseImage);
				}

				const newValue = {
					email: emailValue,
					phone: phoneValue,
					region: regionValue,
					nickName: nickNameValue,
				};
				const responseInfo = await AuthApi.userProfileInfo(newValue);
				console.log("개인정보 수정사항 저장 성공:", responseInfo);

				const pw = passwordValue;
				const reponsePasswordInfo = await AuthApi.userPasswordInfo(pw);
				window.location.reload();
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
						<S.ProfileImgContainer>
							<MyProfileImage userData={userData} imageSrc={imageSrc} />
							<S.ProfileIntroductionContainer>
								<S.ProfileNickName>{userData?.nick_name}님 </S.ProfileNickName>
								<S.ProfileImgBtnContainer>
									<input
										id="fileInput"
										style={{ display: "none" }}
										accept="image/*"
										type="file"
										onChange={e => onUpload(e)}
									/>
									<BasicButton
										size={"medium"}
										color={"darkBlack"}
										children={"이미지 변경"}
										onClick={handleUploadClick}
									/>
									<BasicButton
										size={"medium"}
										color={"darkBlack"}
										children={"이미지 삭제"}
										onClick={handleDeleteClick}
									/>
								</S.ProfileImgBtnContainer>
							</S.ProfileIntroductionContainer>
						</S.ProfileImgContainer>
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
						<ModifyInfoEdit
							userData={userData}
							field={"Nickname"}
							setFieldValue={setNickNameValue}
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
								!emailValue &&
								!passwordValue &&
								!phoneValue &&
								!regionValue &&
								!nickNameValue
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
const ProfileImgContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
const PrivacyWrapper = styled.div`
	width: 1060px;
	padding: 60px;
	margin: 0px 0px 50px 174px;
	button {
		font-size: 16px;
	}
`;
const ProfileImgBtnContainer = styled.div`
	display: flex;
	flex-direction: row;
	text-align: center;
	button {
		margin-right: 16px;
		height: 40px;
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
const ProfileIntroductionContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 80px;
`;
const ProfileNickName = styled.div`
	font-size: 22px;
	font-weight: 900;
	margin-bottom: 14px;
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
	ProfileImgContainer,
	PrivacyWrapper,
	PrivacyCorrectionWrapper,
	PrivacyCorrection,
	ProfileIntroductionContainer,
	ProfileNickName,
	ProfileImgBtnContainer,
	Line,
	Account,
};
