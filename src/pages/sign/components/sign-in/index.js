import BasicButton from "components/Button";
import BasicInput from "components/Input";
import SingupModal from "components/Modal/Signup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { color, flexCenter, flexColumn, primaryFont } from "styles/common";
const Signup = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const OpenwithClose = () => {
		setIsOpen(true);
		setTimeout(() => {
			setIsOpen(false);
			navigate("/");
		}, 3000);
	};
	return (
		<>
			<S.Container>
				<S.LogoWrapper>
					<S.LogoTitle
						onClick={() => {
							navigate(`/`);
						}}
					>
						TRIMM
					</S.LogoTitle>
					<S.SideTitle>Trade, Reuse, Innovate and Make your Moment</S.SideTitle>
					<S.LogoMent>지구를 위해 버리지 말고 중고 거래를 해보세요!</S.LogoMent>
				</S.LogoWrapper>
				<S.SignWrapper>
					<S.Wrapper>
						<S.Title>Email Address *</S.Title>
						<BasicInput
							placeholder="예) example@pyongpyong.com"
							size={"medium"}
							color={"primary"}
							variant={"primary"}
						></BasicInput>
						<S.Subtitle>이메일 형식에 맞게 입력해 주세요.</S.Subtitle>
					</S.Wrapper>
					<S.Wrapper>
						<S.Title>Password *</S.Title>
						<BasicInput
							placeholder="password"
							size={"medium"}
							color={"primary"}
							variant={"primary"}
						></BasicInput>
						<S.Subtitle>
							영문, 숫자, 특수문자를 조합해서 입력해 주세요. (8-16자)
						</S.Subtitle>
					</S.Wrapper>
					<S.Wrapper>
						<S.Title>Password Confirm*</S.Title>
						<BasicInput
							placeholder="PW CONFIRM"
							size={"medium"}
							color={"primary"}
							variant={"primary"}
						></BasicInput>
						<S.Subtitle>비밀번호가 맞지 않습니다.</S.Subtitle>
					</S.Wrapper>
					<S.Wrapper>
						<S.Title>Name</S.Title>
						<BasicInput
							placeholder="NAME"
							size={"medium"}
							color={"primary"}
							variant={"primary"}
						></BasicInput>
						<S.Subtitle>이름을 입력해 주세요.</S.Subtitle>
					</S.Wrapper>
					<S.Wrapper>
						<S.Title>Nick Name</S.Title>
						<BasicInput
							placeholder="NICK NAME"
							size={"medium"}
							color={"primary"}
							variant={"primary"}
						></BasicInput>
						<S.Subtitle>
							닉네임이 중복되었습니다. 입력 안했을 때 (영문, 한글, 숫자로 8자
							이내로 입력해 주세요.)
						</S.Subtitle>
					</S.Wrapper>
					<S.Wrapper>
						<S.Title>Address</S.Title>
						<S.Addresswrapper>
							<BasicInput
								placeholder="ADDRESS"
								size={"small"}
								color={"primary"}
								variant={"primary"}
							></BasicInput>
							<S.AddressSearchBtn>
								<BasicButton size={"small"} variant={"primary"} color={"gray"}>
									찾기
								</BasicButton>
							</S.AddressSearchBtn>
						</S.Addresswrapper>
					</S.Wrapper>
					<S.Wrapper>
						<S.Title>Phone</S.Title>
						<BasicInput
							placeholder="PHONE"
							size={"medium"}
							color={"primary"}
							variant={"primary"}
						></BasicInput>
					</S.Wrapper>
					<ButtonWrapper>
						<BasicButton
							size={"mediumfourth"}
							variant={"primary"}
							color={"darkBlack"}
							onClick={OpenwithClose}
						>
							회원가입
						</BasicButton>
					</ButtonWrapper>
				</S.SignWrapper>
			</S.Container>
			{isOpen && <SingupModal />}
		</>
	);
};
export default Signup;
const AddressSearchBtn = styled.div`
	margin-left: 15px;
	font-weight: bold;
`;
const Addresswrapper = styled.div`
	display: flex;
`;
const LogoMent = styled.div`
	position: relative;
	top: 30px;
	${primaryFont}
`;
const LogoWrapper = styled.div`
	margin-right: 80px;
	height: 150px;
	position: relative;
	bottom: 160px;
`;
const SideTitle = styled.div`
	${primaryFont}
	font-style: italic;
	font-weight: bold;
	font-size: 16px;
`;

const LogoTitle = styled.div`
	font-size: 55px;
	font-weight: bold;
	cursor: pointer;
	font-style: italic;
`;
const Ment = styled.div`
	${primaryFont};
	font-size: 13px;
	font-weight: bold;
	position: relative;
	top: 90px;
	cursor: pointer;
`;
const SignWrapper = styled.div`
	border: 1px solid #e8e8e8;
	border-radius: 8px;
	width: 450px;
	height: 840px;
	${flexColumn}
	align-items: center;
	position: relative;
`;

const Wrapper = styled.div`
	width: 370px;
	margin: 22px;
	position: relative;
	top: 25px;
`;
const ButtonWrapper = styled.div`
	position: relative;
	top: 30px;
	button {
		font-size: 15px;
		:hover {
			background-color: ${({ theme }) => theme.PALETTE.gray};
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
	top: 50px;
`;
const Title = styled.p`
	font-size: 13px;
	color: ${({ theme }) => theme.PALETTE.black};
	position: relative;
	bottom: 4px;
	font-weight: bold;
`;
const Subtitle = styled.p`
	position: relative;
	top: 6px;
	font-size: 11px;
	color: ${({ theme }) => theme.PALETTE.red};
`;

const Container = styled.div`
	margin: 0 auto;
	margin-bottom: 130px;
	margin-top: 200px;
	width: 100%;
	width: 1000px;
	height: 510px;
	${primaryFont}
	${flexCenter}
`;
const S = {
	Container,
	RealTitle,
	Title,
	Subtitle,
	Wrapper,
	SignWrapper,
	Ment,
	LogoTitle,
	SideTitle,
	LogoWrapper,
	LogoMent,
	Addresswrapper,
	AddressSearchBtn,
};
