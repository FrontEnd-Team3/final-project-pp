import FAKEPROFILE from "../../images/fakeProfile.png";
import styled from "styled-components";

const UserInfo = () => {
	return (
		<S.Container>
			<div style={{ display: "flex" }}>
				<img src={FAKEPROFILE} className="profileImg" />
				<div className="nickname">。그ㅣ염 둥 ② 째원。</div>
			</div>
			<div>
				<div className="degree">매너온도: 36도</div>
				<div className="dealCount">(총 거래 건: 10)</div>
			</div>
		</S.Container>
	);
};

export default UserInfo;

const Container = styled.div`
	padding-top: 20px;
	display: flex;
	justify-content: space-between;
	.profileImg {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.nickname {
		font-size: 14px;
		line-height: 35px;
	}
	.degree {
		font-size: 16px;
	}
	.dealCount {
		font-size: 14px;
	}
`;

const S = { Container };
