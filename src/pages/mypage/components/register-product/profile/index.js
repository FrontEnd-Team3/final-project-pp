import styled from "styled-components";

const MyProfile = () => {
	return (
		<S.ProfileMasterWrapper>
			<S.ProfileWrapper>
				<S.ProfileManagement>프로필 관리</S.ProfileManagement>
				<S.Line />
				<S.ProfileImg src={process.env.PUBLIC_URL + "./profile"} />
				<S.ProfileNickName>。그ㅣ염 등 ② 째원。님 </S.ProfileNickName>
				<S.Line />
				<S.ImgChangeBtn>이미지 변경</S.ImgChangeBtn>
				<S.ImgDeleteBtn>이미지 삭제</S.ImgDeleteBtn>
				<S.ProfileIntroduction>
					☆ *。 "*。ユcH에게 장 큰 `별′은 Lrol길 "*。 *。☆
				</S.ProfileIntroduction>
				<S.Line />
				<S.NickNameTitle>닉네임</S.NickNameTitle>
				<S.NickName>。그ㅣ염 등 ② 째원。</S.NickName>
				<S.NameTitle>이름</S.NameTitle>
				<S.Name>심재원</S.Name>
				<S.Line />
				<S.IntroducationTitle>소개</S.IntroducationTitle>
				<S.Introducation>
					☆ *。 "*。ユcH에게 장 큰 `별′은 Lrol길 "*。 *。☆
				</S.Introducation>
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
	border: 2px solid #000;
	padding: 60px;
	margin: 100px 0;
`;
const ProfileManagement = styled.div``;
const Line = styled.div`
	width: 740px;
	background-color: #a9a9a9;
	height: 1px;
	margin: 14px 0;
`;
const ProfileImg = styled.img``;
const ProfileNickName = styled.div``;
const ImgChangeBtn = styled.button``;
const ImgDeleteBtn = styled.button``;
const ProfileIntroduction = styled.div``;
const NickNameTitle = styled.div``;
const NickName = styled.div``;
const NameTitle = styled.div``;
const Name = styled.div``;
const IntroducationTitle = styled.div``;
const Introducation = styled.div``;

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
};
