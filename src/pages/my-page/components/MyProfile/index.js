import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexRow, flexCenter, flexColumn } from "styles/common";
import ProgressBar from "./ProgressBar";
import UserQueryApi from "apis/user.query.api";

const MyProfile = () => {
	const navigate = useNavigate();

	const userInfo = UserQueryApi.getUserInfo();
	const userData = userInfo.data;

	const userMypage = UserQueryApi.getUserdetail();
	const userMypageData = userMypage.data;

	if (userData) {
		return (
			<S.Container>
				<S.MyProfileWrapper>
					<S.MyImage>
						{userData?.profile_url ? (
							<img src={userData?.profile_url} alt="User Profile" />
						) : (
							<img src="/img/defaultImg.png" alt="Default Profile" />
						)}
					</S.MyImage>
					<S.TextBox>
						<S.RowBox>
							<p>닉네임 </p>
							<TextP1>{userData?.nick_name} </TextP1>
						</S.RowBox>
						<S.RowBox>
							<p>활동 지역</p>
							<TextP2>{userData?.region}</TextP2>
						</S.RowBox>
						<div>
							<p>나의 온도</p>
							<S.RowBox>
								<p>{Math.min(userMypageData?.ondo, 100)}℃</p>
								<ProgressBar percentage={userMypageData?.ondo} />
							</S.RowBox>
						</div>
					</S.TextBox>
				</S.MyProfileWrapper>
			</S.Container>
		);
	} else {
		return <></>;
	}
};
export default MyProfile;

// const NavBtn = styled.div`
// 	display: hidden;
// 	@media ${({ theme }) => theme.DEVICE.tablet} {
// 	}
// 	@media ${({ theme }) => theme.DEVICE.mobile} {
// 		position: absolute;
// 		left: 20px;
// 		top: 10px;
// 	}
// `;
const Container = styled.div`
	max-width: 962px;
	display: flex;
	justify-content: space-between;
	${flexCenter}
	margin-top: 100px;
	margin-bottom: 100px;
	padding-top: 25px;
	transition: padding width 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
	}
`;

const MyProfileWrapper = styled.div`
	// width: 100%;
	gap: 20px;
	margin-bottom: 10px;
	p {
		margin-bottom: 10px;
	}
	${flexRow}
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		/* width: 100%; */
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		/* width: 90%; */
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		${flexColumn}
		${flexCenter}
	}
`;

const RowBox = styled.div`
	// width: 100%;
	margin-bottom: 10px;
	p {
		margin-bottom: 10px;
	}
	${flexRow}
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		/* width: 100%; */
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		/* width: 90%; */
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		/* width: 80%; */
	}
`;

const MyImage = styled.div`
	/* margin: 0px 40px; */

	width: 150px;
	height: 150px;
	@media ${({ theme }) => theme.DEVICE.mobile} {
	}
	img {
		border-radius: 50%;
		overflow: hidden;
		width: 100%;
		height: 100%;
		transition: width 0.3s;
		@media ${({ theme }) => theme.DEVICE.mobile} {
		}
		@media ${({ theme }) => theme.DEVICE.tablet} {
		}
	}
`;

const TextBox = styled.div`
	margin-left: 45px;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-top: 20px;
		margin-left: 0px;
	}
`;

const TextP1 = styled.p`
	margin-left: 43px;
`;
const TextP2 = styled.p`
	margin-left: 23px;
`;

const S = {
	Container,
	RowBox,
	MyImage,
	TextBox,
	TextP1,
	TextP2,
	MyProfileWrapper,
	// NavBtn,
};
