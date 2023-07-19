import BasicButton from "components/Button";
import styled from "styled-components";
import { flexRow, primaryFont } from "styles/common";
import ProgressBar from "./components/ProgressBar";

const MyProfile = () => {
	return (
		<S.Container>
			<S.RowBox>
				<S.MyImage>
					<img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/268603692_1079647486200861_7234371429734502581_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wWRMloMNrDAAX8ro7XI&_nc_ht=scontent-ssn1-1.xx&oh=00_AfAzoaUyV9Zr7fMfj3YwJ4ah0DuB_4bgBW-uQxZzqZCsDg&oe=64BD3C88" />
				</S.MyImage>
				<S.TextBox>
					<S.RowBox>
						<p>닉네임 </p>
						<TextP1>응애나는아가뚱이 </TextP1>
					</S.RowBox>
					<S.RowBox>
						<p>활동 지역</p>
						<TextP2>서울시 성동구 성수동</TextP2>
					</S.RowBox>
					<div>
						<p>나의 온도</p>
						<S.RowBox>
							<p>36도</p>
							<ProgressBar percentage={36} />
						</S.RowBox>
					</div>
				</S.TextBox>
			</S.RowBox>
			<div>
				<p>등록물품 9개</p>
				<p>관심상품 12개</p>
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
				/>
			</div>
		</S.Container>
	);
};
export default MyProfile;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 100px;
	padding-top: 25px;
	${primaryFont}
`;

const RowBox = styled.div`
	${flexRow}
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
};
