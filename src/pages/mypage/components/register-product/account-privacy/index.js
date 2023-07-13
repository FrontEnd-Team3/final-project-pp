import styled from "styled-components";

const RegisterProduct = () => {
	return (
		<S.MasterWrapper>
			<S.PrivacyWrapper>
				<S.PrivacyCorrection>개인 정보 수정</S.PrivacyCorrection>
				<S.Line />
				<S.Account>내 계정</S.Account>
				<S.Email>s******1@naver.com</S.Email>
				<S.Line />
				<S.Password>●●●●●●●●●●</S.Password>
				<S.Line />
				<S.Privacy>개인정보</S.Privacy>
				<S.PhoneNumber>0103080098</S.PhoneNumber>
				<S.Line />
				<S.TrandingArea>서울 성수동</S.TrandingArea>
				<S.Line />
				<S.Withdrawal>회원탈퇴</S.Withdrawal>
			</S.PrivacyWrapper>
		</S.MasterWrapper>
	);
};

export default RegisterProduct;

const MasterWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	flex-direction: column;
`;
const PrivacyWrapper = styled.div`
	width: 860px;
	border: 2px solid #000;
	padding: 60px;
	margin: 100px 0;
`;
const PrivacyCorrection = styled.div``;
const Line = styled.div`
	width: 740px;
	background-color: #a9a9a9;
	height: 1px;
	margin: 14px 0;
`;
const Account = styled.div`
	margin-top: 80px;
`;
const Email = styled.div`
	margin-top: 30px;
`;
const Password = styled.div`
	margin-top: 40px;
`;
const Privacy = styled.div`
	margin-top: 80px;
`;
const PhoneNumber = styled.div`
	margin-top: 40px;
`;
const TrandingArea = styled.div`
	margin-top: 40px;
`;
const Withdrawal = styled.div`
	margin-top: 100px;
	border-bottom: 1px solid #a9a9a9;
	width: 64px;
`;
const MyAccountBtn = styled.div`
	width: 200px;
	height: 60px;
	border: 2px solid #000;
`;

const S = {
	PrivacyWrapper,
	MasterWrapper,
	PrivacyCorrection,
	Line,
	Account,
	Email,
	Password,
	Privacy,
	PhoneNumber,
	TrandingArea,
	Withdrawal,
	MyAccountBtn,
};
