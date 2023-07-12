import BasicButton from "components/Button";
import BasicInput from "components/Input";
import styled from "styled-components";
import { color, flexColumn, primaryFont } from "styles/common";

const Signin = () => {
	return (
		<S.Container>
			<S.RealTitle>PPYONG PPYONG</S.RealTitle>
			<S.Wrapper>
				<S.Title>이름</S.Title>
				<BasicInput
					placeholder="NAME"
					size={"medium"}
					color={"primary"}
					variant={"primary"}
				></BasicInput>
				<S.Subtitle>실명을 입력해 주세요. </S.Subtitle>
			</S.Wrapper>
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
			<S.Wrapper>
				<S.Title>비밀번호 확인</S.Title>
				<BasicInput
					placeholder="PW CONFIRM"
					size={"medium"}
					color={"primary"}
					variant={"primary"}
				></BasicInput>
				<S.Subtitle>비밀번호가 맞지 않습니다.</S.Subtitle>
			</S.Wrapper>
			<S.Wrapper>
				<S.Title>닉네임</S.Title>
				<BasicInput
					placeholder="NICK NAME"
					size={"medium"}
					color={"primary"}
					variant={"primary"}
				></BasicInput>
				<S.Subtitle>닉네임이 중복되었습니다.</S.Subtitle>
			</S.Wrapper>
			<S.Wrapper>
				<S.Title>주소</S.Title>
				<div>
					<BasicInput
						placeholder="ADDRESS"
						size={"medium"}
						color={"primary"}
						variant={"primary"}
					></BasicInput>
					<BasicButton size={"small"} variant={"primary"} shape={"primary"}>
						찾기
					</BasicButton>
				</div>
			</S.Wrapper>
			<S.Wrapper>
				<S.Title>휴대전화</S.Title>
				<BasicInput
					placeholder="PHONE"
					size={"medium"}
					color={"primary"}
					variant={"primary"}
				></BasicInput>
			</S.Wrapper>
			<S.ButtonWrapper>
				<BasicButton size={"large"} variant={"primary"} shape={"primary"}>
					회원가입
				</BasicButton>
			</S.ButtonWrapper>
		</S.Container>
	);
};

export default Signin;
const ButtonWrapper = styled.div`
	width: 500px;
	position: relative;
	top: 115px;
	height: 140px;
	button {
		border: none;
		${primaryFont}
		font-size: 15px;
		color: white;
		background-color: #e6e6e6;
		:hover {
			background-color: #8490c8;
		}
		:disabled {
			background-color: #e6e6e6;
		}
	}
`;
const RealTitle = styled.div`
	font-size: 38px;
	font-weight: 900;
	word-spacing: -10px;
	${color}
	-webkit-text-stroke: 0.1px black;
	position: relative;
	top: 40px;
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
	top: 90px;
`;

const Container = styled.div`
	margin: 0 auto;
	margin-bottom: 60px;
	width: 640px;
	height: 998px;
	border: 2px solid #404040;
	border-radius: 12px;
	${flexColumn}
	${primaryFont}
	align-items: center;
	margin-top: 40px;

	div:nth-child(7) {
		position: relative;
		right: 8px;

		p {
			position: relative;
			top: 0.1px;
		}
		input {
			position: relative;
			top: 7px;
			width: 410px;
		}
		button {
			position: relative;
			left: 12px;
			top: 5px;
			${primaryFont}
			font-size: 14px;
			border: none;
			color: white;
		}
	}
`;

const S = {
	Container,
	Wrapper,
	Title,
	Subtitle,
	RealTitle,
	ButtonWrapper,
};
