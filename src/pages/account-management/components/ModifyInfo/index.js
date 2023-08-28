import AuthApi from "apis/auth.api";
import UserQueryApi from "apis/user.query.api";
import BasicButton from "components/Button";
import { useState } from "react";
import styled from "styled-components";
import ModifyInfoEdit from "./components/ModifyInfoEdit";
import AlertModal from "pages/product-detail/components/ProductInfo/Modals/alert";
import { flexCenter } from "styles/common";

const AccountPrivacy = () => {
	const userInfo = UserQueryApi.getUserInfo();
	const userData = userInfo.data;

	const [isOpen, setIsOpen] = useState(false);
	const [nickNameValue, setNickNameValue] = useState(userData?.nick_name);
	const [imageSrc, setImageSrc] = useState(
		`${process.env.PUBLIC_URL}/img/defaultImg.png`,
	);
	const [emailValue, setEmailValue] = useState(userData?.email);
	const [phoneValue, setPhoneValue] = useState(userData?.phone);
	const [regionValue, setRegionValue] = useState(userData?.region);
	const [uncomplete, setUncomplete] = useState(false);

	const onUpload = e => {
		if (e.target.files && e.target.files[0]) {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);

			reader.onload = () => {
				setImageSrc(reader.result || null); // 파일의 컨텐츠
				handleSaveImage(file); // 파일을 전송하는 함수 호출
			};
		}
	};

	const handleSaveImage = async imageFile => {
		const userResponse = window.confirm("변경된 사진으로 저장하시겠습니까?");
		if (userResponse) {
			try {
				// 백엔드에 이미지 파일을 전송하는 코드
				const response = await AuthApi.userProfileImage(imageFile);

				if (response.status === 200) {
					alert("사진이 성공적으로 저장되었습니다.");
				}
			} catch (error) {
				alert("사진 저장 중 오류가 발생했습니다. 다시 시도해주세요.");
				console.error("Error saving image:", error);
			}
		} else {
			alert("사진 저장이 취소되었습니다.");
		}
	};

	const fetchDefaultImageAsFile = async () => {
		const response = await fetch(
			`${process.env.PUBLIC_URL}/img/defaultImg.png`,
		);

		if (!response.ok) {
			throw new Error("Failed to fetch default image.");
		}

		const blob = await response.blob();
		const file = new File([blob], "defaultImg.png", { type: "image/png" });

		return file;
	};

	const handleDeleteImage = async () => {
		const userResponse = window.confirm("사진을 삭제하시겠습니까?");
		if (userResponse) {
			try {
				const defaultImageFile = await fetchDefaultImageAsFile();
				const response = await AuthApi.userProfileImage(defaultImageFile);

				if (response.status === 200) {
					setImageSrc(`${process.env.PUBLIC_URL}/img/defaultImg.png`);
					alert("사진이 성공적으로 삭제되었습니다.");
				}
			} catch (error) {
				alert("사진 삭제 중 오류가 발생했습니다. 다시 시도해주세요.");
				console.error("Error deleting image:", error);
			}
		} else {
			alert("사진 삭제가 취소되었습니다.");
		}
	};

	// 입력 파일 창을 숨기고, 이미지 변경 버튼 클릭 시 파일 업로드 창이 뜨도록 설정
	const handleUploadClick = () => {
		const fileInput = document.getElementById("fileInput");
		fileInput.click();
	};

	// const handleDeleteClick = () => {
	// 	setImageSrc("img/defaultImg.png"); // 삭제 버튼으로 프로필 이미지 삭제시 기본 프로필 이미지가 나오도록 함

	// };

	const handleSave = async () => {
		console.log("handleSave 클릭중");
		if (uncomplete === true) {
			return alert("모든 수정 사항을 완료해 주세요.");
		}
		if (emailValue || phoneValue || regionValue || nickNameValue) {
			try {
				setIsOpen(true);

				const newValue = {
					email: emailValue,
					phone: phoneValue,
					region: regionValue,
					nickName: nickNameValue,
				};

				const responseInfo = await AuthApi.userProfileInfo(newValue);
				console.log("개인정보 수정사항 저장 성공:", responseInfo);
				// const reponsePasswordInfo = await AuthApi.userPasswordInfo(pw);
				window.location.reload();
				// console.log("비밀번호 수정 저장 성공:", reponsePasswordInfo);
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
							<S.ProfileImg>
								<img
									src={userData.profile_url ? userData.profile_url : imageSrc}
								/>
							</S.ProfileImg>
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
										size={"xxmedium"}
										color={"darkBlack"}
										children={"이미지 변경"}
										onClick={handleUploadClick}
									/>
									<BasicButton
										size={"xxmedium"}
										color={"darkBlack"}
										children={"이미지 삭제"}
										onClick={handleDeleteImage}
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
							setUncomplete={setUncomplete}
						/>
						<S.Line />
						<ModifyInfoEdit
							userData={userData}
							field={"nickName"}
							setFieldValue={setNickNameValue}
							setUncomplete={setUncomplete}
						/>
						<S.Line />
						<ModifyInfoEdit
							userData={userData}
							field={"phone"}
							setFieldValue={setPhoneValue}
							setUncomplete={setUncomplete}
						/>
						<S.Line />
						<ModifyInfoEdit
							userData={userData}
							field={"region"}
							setFieldValue={setRegionValue}
							setUncomplete={setUncomplete}
						/>
						<S.Line />
						{/* <EditCompleteBtn handleSave={handleSave} /> */}
						<S.ButtonWrapper>
							<BasicButton
								size={"medium"}
								color={"darkBlack"}
								children={"변경사항 저장"}
								style={{ padding: "20px" }}
								onClick={handleSave}
								// disabled={!emailValue && !phoneValue && !regionValue && !nickNameValue}
							/>
						</S.ButtonWrapper>
					</S.PrivacyWrapper>
				</S.MasterWrapper>
				{isOpen && <AlertModal message={"수정이 완료되었습니다"} />}
			</>
		);
	}
};

export default AccountPrivacy;

const MasterWrapper = styled.div`
	max-width: 962px;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
const ProfileImgContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	${flexCenter}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		flex-direction: column;
	}
`;
const ProfileImg = styled.div`
	img {
		border-radius: 100px;
		width: 180px;
		height: 180px;
		margin: 60px 60px;
		@media ${({ theme }) => theme.DEVICE.pc} {
		}
		@media ${({ theme }) => theme.DEVICE.tablet} {
			width: 140px;
			height: 140px;
		}
		@media ${({ theme }) => theme.DEVICE.mobile} {
			width: 100px;
			height: 100px;
			margin: 60px 10px;
		}
	}
`;
const PrivacyWrapper = styled.div`
	padding: 60px;
	margin: 0px 0px 50px 0px;
	button {
		font-size: 16px;
	}
`;
const ProfileImgBtnContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	text-align: center;

	button {
		margin-right: 16px;
		height: 40px;
		@media ${({ theme }) => theme.DEVICE.pc} {
			padding: 10px;
			width: 100%;
		}
		@media ${({ theme }) => theme.DEVICE.tablet} {
			padding: 10px;
			width: 100%;
			font-size: 14px;
		}
		@media ${({ theme }) => theme.DEVICE.mobile} {
			padding: 10px;
			width: 100%;
			font-size: 12px;
			margin-bottom: 10px;
			margin-right: 5px;
		}
	}
`;
const PrivacyCorrectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		${flexCenter}
	}
`;
const PrivacyCorrection = styled.div`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 16px;
`;
const ProfileIntroductionContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		${flexCenter}
	}
`;
const ProfileNickName = styled.div`
	font-size: 22px;
	font-weight: 900;
	margin-bottom: 36px;
`;
const Line = styled.div`
	width: 950px;
	background-color: #dddddd;
	height: 1px;
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
const Account = styled.div`
	margin-top: 60px;
	font-size: 20px;
	font-weight: bold;
`;
const ButtonWrapper = styled.div`
	width: 100%;
	margin-bottom: 30px;
	button {
		font-size: 15px;
		font-weight: 600;
		@media ${({ theme }) => theme.DEVICE.mobile} {
			width: 100%;
		}
		@media ${({ theme }) => theme.DEVICE.tablet} {
			width: 100%;
		}
		@media ${({ theme }) => theme.DEVICE.pc} {
			width: 100%;
		}
		:hover {
			background-color: ${({ theme }) => theme.PALETTE.gray};
		}
		/* :disabled {
			background-color: #e6e6e6;
		} */
	}
`;

const S = {
	ButtonWrapper,
	MasterWrapper,
	ProfileImgContainer,
	PrivacyWrapper,
	PrivacyCorrectionWrapper,
	PrivacyCorrection,
	ProfileIntroductionContainer,
	ProfileNickName,
	ProfileImg,
	ProfileImgBtnContainer,
	Line,
	Account,
};
