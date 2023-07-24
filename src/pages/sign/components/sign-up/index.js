import BasicButton from "components/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as SCHEMA from "../consts/schema";
import styled from "styled-components";
import { color, flexCenter, flexColumn, primaryFont } from "styles/common";
import ValidateInput from "../one-validate/OneValidate";
import BasicModal from "components/Modal/withoutbuttonmodal/index";
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

	const { email, pw, pwCheck, nickName, name, phone } = SCHEMA;
	const schema = yup
		.object()
		.shape({ email, pw, pwCheck, nickName, name, phone });

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const onSubmitSignUp = handleSubmit(data => {
		console.log(data);
	});
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
				<S.SignWrapper onSubmit={onSubmitSignUp}>
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
					<ValidateInput
						control={control}
						name={"pwCheck"}
						label={"Password Confirm"}
						placeholder={"Password Confirm"}
						errors={errors}
						type={"password"}
					/>
					<ValidateInput
						control={control}
						name={"nickName"}
						label={"Nick Name"}
						placeholder={"Nick Name"}
						errors={errors}
						type={"text"}
					/>
					<ValidateInput
						control={control}
						name={"name"}
						label={"Name"}
						placeholder={"Name"}
						errors={errors}
						type={"text"}
					/>
					{/* 주소창 수정예정 */}
					<ValidateInput
						control={control}
						name={"address"}
						label={"Address"}
						placeholder={"Address"}
						errors={errors}
						type={"text"}
					/>
					<ValidateInput
						control={control}
						name={"phone"}
						label={"Phone"}
						placeholder={"010-0000-0000"}
						errors={errors}
						type={"text"}
					/>
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
			{isOpen && (
				<BasicModal
					background={"gray"}
					subtitle={"primary"}
					title={"primary"}
					container={"primary"}
					position={"primary"}
					titlement={"Welcome to TRIMM!"}
					subtitlement={"회원가입이 완료되었습니다"}
				/>
			)}
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
	margin-top: 120px;
	width: 100%;
	width: 1000px;

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
