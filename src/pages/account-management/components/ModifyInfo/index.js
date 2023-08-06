import UserQueryApi from "apis/user.query.api";
import Nav from "pages/my-page/components/Nav";
import styled from "styled-components";
import ModifyInfoList from "./components/ModifyInfoList";

const AccountPrivacy = () => {
	const userInfo = UserQueryApi.getUserInfo();
	const userData = userInfo.data;

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
					<ModifyInfoList userData={userData} />
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
