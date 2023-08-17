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
import { io } from "socket.io-client";

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

	const onSubmitSignin = handleSubmit(async data => {
		try {
			const response = await AuthApi.login(data.email, data.pw);
			console.log("로그인", response.data.user.token);
			const signInSocket = io("https://topdragon.co.kr");
			signInSocket.emit(`connect-user`, { socket: response.data.user.token });
			login(response.data.tokenForHeader);
			navigate("/");
			signInSocket.disconnect();
		} catch {
			alert("이메일과 비밀번호를 확인해주세요");
		}
	});

	return (
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
				<ButtonWrapper>
					<BasicButton
						size={"mediumfourth"}
						variant={"primary"}
						color={"darkBlack"}
						type={"submit"}
					>
						로그인
					</BasicButton>
				</ButtonWrapper>
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
`;
const LogoWrapper = styled.div`
	margin-right: 80px;
	height: 150px;
`;
const SideTitle = styled.div`
	font-style: italic;
	font-weight: bold;
	font-size: 16px;
	${LogoFont}
`;

const LogoTitle = styled.div`
	font-size: 55px;
	font-weight: bold;
	cursor: pointer;
	font-style: italic;
	${LogoFont}
`;
const Ment = styled.div`
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
`;
const SignWrapper = styled.form`
	border: 1px solid #e8e8e8;
	border-radius: 8px;
	width: 450px;
	${flexColumn}
	align-items: center;
	position: relative;
	padding: 40px;
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
};
