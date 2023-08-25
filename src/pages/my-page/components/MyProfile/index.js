import BasicButton from "components/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexRow } from "styles/common";
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
			<>
				<S.Container>
					<S.RowBox>
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
									<p>{userMypageData?.ondo}℃</p>
									<ProgressBar percentage={userMypageData?.ondo} />
								</S.RowBox>
							</div>
						</S.TextBox>
					</S.RowBox>
					<S.countBox>
						<BasicButton
							color={"primary"}
							size={"small"}
							children={"채팅하기"}
							style={{
								fontSize: "14px",
								height: "28px",
								borderRadius: "6px",
								fontWeight: "600",
							}}
							onClick={() => navigate("/Chat")}
						/>
					</S.countBox>
				</S.Container>
			</>
		);
	} else {
		return <></>;
	}
};
export default MyProfile;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 100px;
	margin-bottom: 100px;
	padding-top: 25px;
	transition: padding 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 0 40px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		padding: 0 60px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		padding: 0 80px;
	}
`;

const RowBox = styled.div`
	margin-bottom: 10px;
	p {
		margin-bottom: 10px;
	}
	${flexRow}
	transition: width 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		width: 100%;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 90%;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 80%;
	}
`;
const countBox = styled.div`
	p {
		margin-bottom: 16px;
	}
	transition: margin-right 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		margin-right: 10px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin-right: 20px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-right: 30px;
	}
`;

const MyImage = styled.div`
	margin: 0px 40px;
	img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		overflow: hidden;
	}
	transition: paddin margin 0.3s;
	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 0 10px;
		margin: 30px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		padding: 0 10px;
		margin: 0px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		padding: 5px;
		margin: 0px;
	}
`;

const TextBox = styled.div`
	margin-left: 45px;
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
	countBox,
};
