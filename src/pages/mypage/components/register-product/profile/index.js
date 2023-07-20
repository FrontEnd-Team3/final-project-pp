import styled from "styled-components";

const MyProfile = () => {
	return (
		<S.ProfileMasterWrapper>
			<S.ProfileWrapper>
				<S.ProfileManagement>프로필 관리</S.ProfileManagement>
				<S.Line />
				<S.ProfileImgContainer>
					<S.ProfileImg src="img/profile.png" />
					<S.ProfileIntroductionContainer>
						<S.ProfileNickName>Jaewon 님 </S.ProfileNickName>
						<S.ProfileIntroduction>
							자기소개 페이지입니다. 날 펙트로 정의 하자면 퍼펙트.
						</S.ProfileIntroduction>
						<S.ProfileImgBtnContainer>
							<S.ImgChangeBtn>이미지 변경</S.ImgChangeBtn>
							<S.ImgDeleteBtn>이미지 삭제</S.ImgDeleteBtn>
						</S.ProfileImgBtnContainer>
					</S.ProfileIntroductionContainer>
				</S.ProfileImgContainer>
				<S.Line />
				<S.NickNameTitle>닉네임</S.NickNameTitle>
				<S.NickNameContainer>
					<S.NickName>Jaewon</S.NickName>
					<ChangeBtn>변경</ChangeBtn>
				</S.NickNameContainer>

				<S.Line />
				<S.NameTitle>이름</S.NameTitle>
				<S.NameContainer>
					<S.Name>심재원</S.Name>
					<ChangeBtn>변경</ChangeBtn>
				</S.NameContainer>
				<S.Line />
				<S.IntroducationTitle>소개</S.IntroducationTitle>
				<S.IntroducationContainer>
					<S.Introducation>
						자기소개 페이지입니다. 날 펙트로 정의 하자면 퍼펙트.
					</S.Introducation>
					<ChangeBtn>변경</ChangeBtn>
				</S.IntroducationContainer>
				<S.Line />
			</S.ProfileWrapper>
		</S.ProfileMasterWrapper>
	);
};

export default MyProfile;

const ProfileMasterWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	flex-direction: column;
`;
const ProfileWrapper = styled.div`
	width: 860px;
	padding: 60px;
	margin: 80px 0px 200px 0;
`;
const ProfileManagement = styled.div`
	font-size: 22px;
	font-weight: 1000;
`;
const Line = styled.div`
	width: 740px;
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
	font-weight: 1000;
	margin-bottom: 14px;
`;
const ProfileImgBtnContainer = styled.div`
	display: flex;
	flex-direction: row;
	text-align: center;
`;
const ImgChangeBtn = styled.div`
	width: 140px;
	height: 40px;
	color: #fff;
	background-color: #222;
	padding-top: 8px;
	margin-right: 16px;
`;
const ImgDeleteBtn = styled.div`
	width: 140px;
	height: 40px;
	color: #fff;
	background-color: #222;
	padding-top: 8px;
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
	margin-top: 100px;
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
	margin-top: 100px;
	color: #8a8a8a;
`;
const IntroducationContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Introducation = styled.div`
	margin-top: 16px;
`;
const ChangeBtn = styled.div`
	width: 70px;
	height: 30px;
	border: 2px solid #000;
	text-align: center;
	font-size: 16px;
	color: white;
	background-color: #222;
	cursor: pointer;
`;

const S = {
	ProfileMasterWrapper,
	ProfileWrapper,
	ProfileManagement,
	Line,
	ProfileImg,
	ProfileNickName,
	ImgChangeBtn,
	ImgDeleteBtn,
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
	ChangeBtn,
	NameContainer,
	NickNameContainer,
	IntroducationContainer,
};
