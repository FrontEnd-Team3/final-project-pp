import styled from "styled-components";

const UserInfo = ({ user }) => {
	return (
		<S.Container>
			<div style={{ display: "flex" }}>
				<img src={user.profileImg} className="profileImg" />
				<div className="nickname">{user.nickname}</div>
			</div>
			<div style={{ display: "flex" }}>
				<div className="degree">매너온도: {user.degree}도</div>
				<div className="dealCount">(총 거래 건: {user.dealCount})</div>
			</div>
		</S.Container>
	);
};

export default UserInfo;

const Container = styled.div`
	padding-top: 20px;
	display: flex;
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
