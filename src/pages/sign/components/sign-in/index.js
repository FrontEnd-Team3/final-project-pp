import BasicButton from "components/Button";
import BasicInput from "components/Input";
import styled from "styled-components";
import { color, flexColumn, primaryFont } from "styles/common";
/* <BasicInput

></BasicInput> */
const Signin = () => {
	return (
		<S.Container>
			<S.RealTitle>PYONG PYONG</S.RealTitle>
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
					placeholder="EX) pyongpyong@naver.com"
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
					<BasicButton
						size={"small"}
						variant={"primary"}
						shape={"primary"}
					></BasicButton>
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
		</S.Container>
	);
};

export default Signin;

const RealTitle = styled.div`
	font-size: 35px;
	font-weight: 900;
	word-spacing: -10px;
	${color}
	-webkit-text-stroke: 0.1px black;
	position: relative;
	top: 30px;
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
	top: 80px;
`;

const Container = styled.div`
	margin: 0 auto;
	width: 640px;
	height: 998px;
	border: 2px solid #404040;
	border-radius: 12px;
	${flexColumn}
	${primaryFont}
	align-items: center;
	margin-top: 50px;
`;

const S = {
	Container,
	Wrapper,
	Title,
	Subtitle,
	RealTitle,
};
