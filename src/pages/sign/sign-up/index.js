import BasicButton from "components/Button";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as SCHEMA from "../../../consts/schema";
import styled from "styled-components";
import { LogoFont, color, flexCenter, flexColumn } from "styles/common";
import BasicModal from "components/Modal/WithoutButton";
import ValidateInput from "../components/OneValidate";
import AuthApi from "apis/auth.api";
import { replacePhone } from "utils/phoneNum";
import SearchAddress from "components/SearchAddress";

const Signup = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [address, setAddress] = useState("");
	const [addressOpen, setAddressOpen] = useState(false);
	// const OpenwithClose = () => {
	// 	setIsOpen(true);
	// 	if (data.status === 200) {
	// 		setTimeout(() => {
	// 			setIsOpen(false);
	// 			navigate("/Signin");
	// 		}, 3000);
	// 	}
	// };

	const { email, pw, pwCheck, nickName, region, phone } = SCHEMA;
	const schema = yup
		.object()
		.shape({ email, pw, pwCheck, nickName, region, phone });

	const {
		handleSubmit,
		control,
		formState: { errors },
		getValues,
		setValue, // useForm에서 setValue 메서드를 가져옵니다.
		watch,
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const phoneNumber = watch("phone");

	useEffect(() => {
		const newPhoneNumber = replacePhone(phoneNumber);
		setValue("phone", newPhoneNumber);
	}, [phoneNumber, setValue]);

	const onSubmitSignUp = handleSubmit(async data => {
		console.log("data", data);
		try {
			const response = await AuthApi.signup(
				data.email,
				data.pw,
				data.nickName,
				data.phone,
				data.region,
			);
			console.log("회원가입data", response);
			if (response && response.status === 200) {
				setIsOpen(true);
				setTimeout(() => {
					setIsOpen(false);
					navigate("/Signin");
				}, 3000);
			}
			return response;
		} catch (error) {
			console.error(error);
		}
		console.log(data);
	});

	const onEmailCheck = async () => {
		try {
			const email = getValues("email");
			console.log(email);
			const response = await AuthApi.emailCheck(email);
			if (response.status === 200) {
				alert("사용 가능한 이메일 입니다.");
			}
		} catch (error) {
			if (error.response.status === 400) {
				alert("중복된 이메일 입니다.");
				console.log(error);
				setValue("email", "");
			}
		}
	};

	const onNickNameCheck = async () => {
		try {
			const nickName = getValues("nickName");
			console.log(nickName);
			const response = await AuthApi.nickNameCheck(nickName);
			if (response.status === 200) {
				alert("사용 가능한 닉네임 입니다.");
			}
		} catch (error) {
			if (error.response.status === 400) {
				alert("중복된 닉네임 입니다.");
				console.log(error);
				setValue("nickName", "");
			}
		}
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
				<S.SignWrapper onSubmit={onSubmitSignUp}>
					<S.CheckBtnWrapper>
						<ValidateInput
							control={control}
							name={"email"}
							label={"Email"}
							placeholder={"예) example@trimm.com"}
							errors={errors}
							type={"text"}
						/>
						<BasicButton
							color={"black"}
							size={"account"}
							children={"중복 검사"}
							type={"button"}
							style={{
								position: "absolute",
								right: "0px",
								top: "4px",
								fontSize: "12px",
								fontWeight: "500",
								marginRight: "16px",
							}}
							onClick={onEmailCheck}
							disabled={errors.email || !getValues("email")}
						/>
					</S.CheckBtnWrapper>

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
					<S.CheckBtnWrapper>
						<ValidateInput
							control={control}
							name={"nickName"}
							label={"Nick Name"}
							placeholder={"Nick Name"}
							errors={errors}
							type={"text"}
						/>
						<BasicButton
							color={"black"}
							size={"account"}
							children={"중복 검사"}
							type={"button"}
							style={{
								position: "absolute",
								right: "0px",
								top: "4px",
								fontSize: "12px",
								fontWeight: "500",
								marginRight: "16px",
							}}
							onClick={onNickNameCheck}
							disabled={errors.nickName || !getValues("nickName")}
						/>
					</S.CheckBtnWrapper>

					<ValidateInput
						control={control}
						name={"region"}
						label={"Address"}
						placeholder={"주소창을 클릭해주세요"}
						errors={errors}
						type={"text"}
						address={address}
						onClick={() => setAddressOpen(true)}
					/>

					{addressOpen && (
						<SearchAddress
							setAddress={setAddress}
							setIsOpen={setAddressOpen}
							setValue={setValue}
						/>
					)}

					<ValidateInput
						control={control}
						name={"phone"}
						label={"Phone"}
						placeholder={"010-0000-0000"}
						errors={errors}
						type={"text"}
					/>
					<S.ButtonWrapper>
						<BasicButton
							size={"mediumfourth"}
							variant={"primary"}
							color={"darkBlack"}
							// onClick={OpenwithClose}
						>
							회원가입
						</BasicButton>
					</S.ButtonWrapper>
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
`;
const LogoWrapper = styled.div`
	margin-right: 80px;
	height: 150px;
	position: relative;
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
	padding: 40px;
`;

const Wrapper = styled.div`
	width: 370px;
	margin: 22px;
	position: relative;
	top: 25px;
`;

const CheckBtnWrapper = styled.div`
	position: relative;
`;

const ButtonWrapper = styled.div`
	margin-top: 20px;
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
	ButtonWrapper,
	CheckBtnWrapper,
};
