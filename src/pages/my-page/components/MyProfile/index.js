import BasicButton from "components/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexRow, primaryFont } from "styles/common";
import ProgressBar from "./ProgressBar";

const MyProfile = ({ userList }) => {
	const navigate = useNavigate();
	if (userList) {
		return (
			<>
				{userList.map(user => (
					<S.Container key={user.id}>
						<S.RowBox>
							<S.MyImage>
								<img src={user.profileImg} />
							</S.MyImage>
							<S.TextBox>
								<S.RowBox>
									<p>닉네임 </p>
									<TextP1>{user.nickname} </TextP1>
								</S.RowBox>
								<S.RowBox>
									<p>활동 지역</p>
									<TextP2>{user.address}</TextP2>
								</S.RowBox>
								<div>
									<p>나의 온도</p>
									<S.RowBox>
										<p>{user.degree}℃</p>
										<ProgressBar percentage={user.degree} />
									</S.RowBox>
								</div>
							</S.TextBox>
						</S.RowBox>
						<S.countBox>
							<p>등록물품 {user.registerProducts.length}개</p>
							<p>관심상품 {user.likeProducts.length}개</p>
							<BasicButton
								variant={"primary"}
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
				))}
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
	${primaryFont}
`;

const RowBox = styled.div`
	margin-bottom: 10px;
	p {
		margin-bottom: 10px;
	}
	${flexRow}
`;
const countBox = styled.div`
	p {
		margin-bottom: 16px;
	}
`;

const MyImage = styled.div`
	margin: 0 auto;
	img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		overflow: hidden;
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
