import BasicButton from "components/Button";
import styled from "styled-components";

const MyProfileInfo = ({ userData }) => {
	return (
		<>
			<S.NickNameTitle>닉네임</S.NickNameTitle>
			<S.NickNameContainer>
				<S.NickName>{userData?.nick_name}</S.NickName>
				<BasicButton size={"account"} color={"darkBlack"} children={"변경"} />
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
				<BasicButton size={"account"} color={"darkBlack"} children={"변경"} />
			</S.IntroducationContainer>
		</>
	);
};

export default MyProfileInfo;

const Line = styled.div`
	width: 950px;
	background-color: #dddddd;
	height: 2px;
	margin: 14px 0;
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
	Line,
	NickNameTitle,
	NickNameContainer,
	NickName,
	IntroducationTitle,
	IntroducationContainer,
	Introducation,
};
