import styled from "styled-components";
import Nav from "pages/my-page/components/Nav";
import BasicButton from "components/Button";
import UserQueryApi from "apis/user.query.api";
import MyProfileImage from "./components/MyprofileImage";
import { useState } from "react";
import AuthApi from "apis/auth.api";
import MyProfileInfo from "./components/MyprofileInfo";
import BasicModal from "components/Modal/WithoutButton";

const MyProfile = () => {
	const userInfo = UserQueryApi.getUserInfo();
	const userData = userInfo.data;

	const [isOpen, setIsOpen] = useState(false);

	const [nickNameValue, setNickNameValue] = useState(userData?.nick_name);
	const [imageSrc, setImageSrc] = useState(null);

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
		if (imageSrc || nickNameValue) {
			try {
				setIsOpen(true);
				const inputImageFile = document.getElementById("fileInput").files[0];
				if (inputImageFile) {
					const responseImage = await AuthApi.userProfileImage(inputImageFile);
					console.log("이미지 수정사항 저장 성공:", responseImage);
				}
				const newValue = {
					nickName: nickNameValue,
				};
				const responseInfo = await AuthApi.userProfileInfo(newValue);
				console.log("nickName 수정사항 저장 성공:", responseInfo);
			} catch (error) {
				console.error("수정사항 저장 실패:", error);
			}
		}
	};

	if (userData) {
		return (
			<>
				<S.ContentWrapper>
					<S.NavWrapper>
						<Nav />
					</S.NavWrapper>
					<S.ProfileWrapper>
						<S.ProfileManagement>프로필 관리</S.ProfileManagement>
						<S.Line />
						<S.ProfileImgContainer>
							<MyProfileImage userData={userData} imageSrc={imageSrc} />
							<S.ProfileIntroductionContainer>
								<S.ProfileNickName>{userData?.nick_name}님 </S.ProfileNickName>
								<S.ProfileIntroduction>
									자기소개 페이지입니다. 날 펙트로 정의 하자면 퍼펙트.
								</S.ProfileIntroduction>
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
						<MyProfileInfo
							userData={userData}
							setNickNameValue={setNickNameValue}
						/>
						<S.Line />
						<S.IntroducationTitle>소개</S.IntroducationTitle>
						<S.IntroducationContainer>
							<S.Introducation>
								자기소개 페이지입니다. 날 펙트로 정의 하자면 퍼펙트.
							</S.Introducation>
							<BasicButton
								size={"account"}
								color={"darkBlack"}
								children={"변경"}
							/>
						</S.IntroducationContainer>
						<S.Line />
						<BasicButton
							size={"medium"}
							color={"darkBlack"}
							children={"변경사항 저장"}
							style={{ marginTop: "80px" }}
							onClick={handleSave}
						/>
					</S.ProfileWrapper>
				</S.ContentWrapper>
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

export default MyProfile;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
const NavWrapper = styled.div`
	padding-top: 124px;
`;

const ProfileWrapper = styled.div`
	width: 1060px;
	padding: 60px;
	margin: 80px 50px 200px 50px;
	button {
		font-size: 16px;
	}
`;
const ProfileManagement = styled.div`
	font-size: 22px;
	font-weight: bold;
`;
const Line = styled.div`
	width: 950px;
	background-color: #dddddd;
	height: 2px;
	margin: 14px 0;
`;
const ProfileImgContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
const ProfileIntroductionContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 80px;
`;

const ProfileImg = styled.img`
	width: 160px;
	height: 160px;
	border-radius: 100px;
	margin: 60px 60px;
`;
const ProfileNickName = styled.div`
	font-size: 22px;
	font-weight: 900;
	margin-bottom: 14px;
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

const ProfileIntroduction = styled.div`
	margin-bottom: 30px;
`;
const NickNameTitle = styled.div`
	margin-top: 80px;
	color: #8a8a8a;
`;
const NickNameContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const NickName = styled.div`
	margin-top: 16px;
`;
const NameTitle = styled.div`
	margin-top: 80px;
	color: #8a8a8a;
`;
const NameContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Name = styled.div`
	margin-top: 16px;
`;
const IntroducationTitle = styled.div`
	margin-top: 40px;
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
	ContentWrapper,
	ProfileWrapper,
	ProfileManagement,
	Line,
	ProfileImg,
	ProfileNickName,
	ProfileIntroduction,
	NickNameTitle,
	NickName,
	NameTitle,
	Name,
	IntroducationTitle,
	Introducation,
	ProfileImgContainer,
	ProfileIntroductionContainer,
	ProfileImgBtnContainer,
	NameContainer,
	NickNameContainer,
	IntroducationContainer,
	NavWrapper,
};
