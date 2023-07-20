import BasicButton from "components/Button";
import BasicInput from "components/Input";
import styled from "styled-components";
import { color, flexColumn, primaryFont } from "styles/common";

const Signup = () => {
	return (
		<S.Container>
			<S.RealTitle>PPYONG PPYONG</S.RealTitle>
			<S.Wrapper>
				<S.Title>이메일 주소</S.Title>
				<BasicInput
					placeholder="EX) example@pyongpyong.com"
					size={"medium"}
					color={"primary"}
					variant={"primary"}
				></BasicInput>
				<S.Subtitle>이메일 형식에 맞게 입력해 주세요.</S.Subtitle>
			</S.Wrapper>
			<S.Wrapper>
				<S.Title>비밀번호</S.Title>
				<BasicInput
					placeholder="PW"
					size={"medium"}
					color={"primary"}
					variant={"primary"}
				></BasicInput>
				<S.Subtitle>
					영문, 숫자, 특수문자를 조합해서 입력해 주세요. (8-16자)
				</S.Subtitle>
			</S.Wrapper>
			<ButtonWrapper>
				<BasicButton size={"large"} variant={"primary"} shape={"primary"}>
					로그인
				</BasicButton>
			</ButtonWrapper>
		</S.Container>
	);
};
export default Signup;

const ButtonWrapper = styled.div`
	width: 500px;
	position: relative;
	top: 185px;
	button {
		border: none;
		${primaryFont}
		font-size: 15px;
		background-color: #e6e6e6;
		color: white;
		:hover {
			background-color: #8490c8;
		}
		/* :disabled {
			background-color: #e6e6e6;
		} */
	}
`;
const RealTitle = styled.div`
	font-size: 38px;
	font-weight: 900;
	word-spacing: -10px;
	${color}
	-webkit-text-stroke: 0.1px black;
	position: relative;
	top: 50px;
`;
const Title = styled.p`
	font-size: 14px;
	color: #404040;
	position: relative;
	bottom: 10px;
`;
const Subtitle = styled.p`
	position: relative;
	top: 6px;
	font-size: 12px;
	color: #db5a48;
`;
const Wrapper = styled.div`
	margin: 25px;
	position: relative;
	top: 120px;
`;

const Container = styled.div`
	margin: 0 auto;
	margin-bottom: 130px;
	margin-top: 90px;
	width: 640px;
	height: 612px;
	border: 2px solid #404040;
	border-radius: 12px;
	${flexColumn}
	${primaryFont}
	align-items: center;
	div:nth-child(3) {
		margin-top: 50px;
	}
`;
const S = {
	Container,
	RealTitle,
	Title,
	Subtitle,
	Wrapper,
};
