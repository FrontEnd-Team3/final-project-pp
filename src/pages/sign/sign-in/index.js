import BasicButton from "components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import * as yup from "yup";
import * as SCHEMA from "../../../consts/schema";
import { LogoFont, color, flexCenter, flexColumn } from "styles/common";
import ValidateInput from "../components/OneValidate";
import AuthApi from "apis/auth.api";
import { useAuth } from "context/auth.ctx";
import { useChatData } from "context/chatData.ctx";

const SignIn = () => {
	const navigate = useNavigate();
	const { email, pw } = SCHEMA;
	const schema = yup.object().shape({ email, pw });
	const { login } = useAuth();

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const { setSocketID } = useChatData();
	const onSubmitSignin = handleSubmit(async data => {
		try {
			const response = await AuthApi.login(data.email, data.pw);
			setSocketID(response.data.user.token);
			login(response.data.tokenForHeader);
			navigate("/");
			// signInSocket.disconnect();
		} catch {
			alert("이메일과 비밀번호를 확인해주세요");
		}
	});

	return (
		<S.Container>
			<S.LogoWrapper>
				<S.LogoTitle>TRIMM</S.LogoTitle>
				<S.SideTitle>Trade, Reuse, Innovate and Make your Moment</S.SideTitle>
				<S.LogoMent>지구를 위해 버리지 말고 중고 거래를 해보세요!</S.LogoMent>
			</S.LogoWrapper>
			<S.SignWrapper onSubmit={onSubmitSignin}>
				<ValidateInput
					control={control}
					name={"email"}
					label={"Email"}
					placeholder={"예) example@trimm.com"}
					errors={errors}
					type={"text"}
				/>
				<ValidateInput
					control={control}
					name={"pw"}
					label={"Password"}
					placeholder={"password"}
					errors={errors}
					type={"password"}
				/>
				<S.ButtonWrapper>
					<BasicButton
						size={"mediumfourth"}
						variant={"primary"}
						color={"darkBlack"}
						type={"submit"}
					>
						로그인
					</BasicButton>
				</S.ButtonWrapper>
				<S.Ment
					onClick={() => {
						navigate("/Signup");
					}}
				>
					회원가입 하기
				</S.Ment>
			</S.SignWrapper>
		</S.Container>
	);
};

export default SignIn;
const LogoMent = styled.div`
	position: relative;
	top: 30px;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		top: 20px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		top: 16px;
		font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	}
`;
const LogoWrapper = styled.div`
	margin-right: 80px;
	height: 150px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin: 0 0 30px 0;
		text-align: center;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin: 0;
	}
`;
const SideTitle = styled.div`
	font-style: italic;
	font-weight: bold;
	font-size: 16px;
	${LogoFont}

	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	}
`;

const LogoTitle = styled.div`
	font-size: 55px;
	font-weight: bold;
	cursor: pointer;
	font-style: italic;
	${LogoFont}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: 42px;
	}
`;
const Ment = styled.div`
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;

	@media ${({ theme }) => theme.DEVICE.mobile} {
		text-align: center;
	}
`;
const SignWrapper = styled.form`
	border: 1px solid #e8e8e8;
	border-radius: 8px;
	width: 450px;
	${flexColumn}
	align-items: center;
	position: relative;
	padding: 40px;

	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: calc(100% - 40px);
	}

	div {
		@media ${({ theme }) => theme.DEVICE.mobile} {
			width: 100%;
		}

		input {
			@media ${({ theme }) => theme.DEVICE.mobile} {
				width: 100%;
			}
		}
	}
`;

const Wrapper = styled.div`
	width: 370px;
	margin: 25px;
	position: relative;
	top: 35px;
`;
const ButtonWrapper = styled.div`
	margin-bottom: 30px;
	button {
		font-size: 15px;
		font-weight: 600;
		@media ${({ theme }) => theme.DEVICE.mobile} {
			width: 100%;
		}
		:hover {
			background-color: ${({ theme }) => theme.PALETTE.gray};
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
	max-width: 1000px;
	height: 100vh;
	border-radius: 12px;
	${flexCenter}
	justify-content: space-between;

	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 0 20px;
	}

	@media ${({ theme }) => theme.DEVICE.tablet} {
		flex-direction: column;
		justify-content: center;
	}
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
	ButtonWrapper,
};
