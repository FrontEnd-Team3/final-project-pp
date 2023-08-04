import styled from "styled-components";
import Nav from "pages/my-page/components/Nav";
import BasicButton from "components/Button";
import UserQueryApi from "apis/user.query.api";

const MyProfile = () => {
	const userInfo = UserQueryApi.getUserInfo();
	const userData = userInfo.data;

	if (userData) {
		return (
			<S.ContentWrapper>
				<S.NavWrapper>
					<Nav />
				</S.NavWrapper>
				<S.ProfileWrapper>
					<S.ProfileManagement>프로필 관리</S.ProfileManagement>
					<S.Line />
					<S.ProfileImgContainer>
						{userData?.profile_url ? (
							<S.ProfileImg src={userData?.profile_url} alt="User Profile" />
						) : (
							<S.ProfileImg src="img/profile.png" alt="Default Profile" />
						)}
						<S.ProfileIntroductionContainer>
							<S.ProfileNickName>{userData?.nick_name}님 </S.ProfileNickName>
							<S.ProfileIntroduction>
								자기소개 페이지입니다. 날 펙트로 정의 하자면 퍼펙트.
							</S.ProfileIntroduction>
							<S.ProfileImgBtnContainer>
								<BasicButton
									size={"medium"}
									color={"darkBlack"}
									children={"이미지 변경"}
								/>
								<BasicButton
									size={"medium"}
									color={"darkBlack"}
									children={"이미지 삭제"}
								/>
							</S.ProfileImgBtnContainer>
						</S.ProfileIntroductionContainer>
					</S.ProfileImgContainer>
					<S.Line />
					<S.NickNameTitle>닉네임</S.NickNameTitle>
					<S.NickNameContainer>
						<S.NickName>{userData?.nick_name}</S.NickName>
						<BasicButton
							size={"account"}
							color={"darkBlack"}
							children={"변경"}
						/>
					</S.NickNameContainer>
					<S.Line />
					{/* <S.NameTitle>이름</S.NameTitle>
				<S.NameContainer>
					<S.Name>심재원</S.Name>
					<BasicButton size={"account"} color={"darkBlack"} children={"변경"} />
				</S.NameContainer> */}
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
				</S.ProfileWrapper>
			</S.ContentWrapper>
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
