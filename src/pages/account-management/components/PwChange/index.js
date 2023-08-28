import styled from "styled-components";
import { LogoFont, color, flexCenter, flexColumn } from "styles/common";
import BasicButton from "components/Button";
import AuthApi from "apis/auth.api";
import * as SCHEMA from "../../../../consts/schema";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ValidateInput from "pages/sign/components/OneValidate";

const PwChange = () => {
	const { pw, pwCheck } = SCHEMA;
	const schema = yup.object().shape({ pw, pwCheck });
	const {
		handleSubmit,
		control,
		formState: { errors, isValid },
		getValues,
		watch,
	} = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
	});

	const handleSave = handleSubmit(async data => {
		const isConfirmed = window.confirm("변경된 비밀번호로 저장하시겠습니까?");
		if (!isConfirmed) {
			return alert("비밀번호가 변경 취소 되었습니다.");
		}
		try {
			const response = await AuthApi.userPasswordInfo(data.pw);
			console.log("개인정보 수정사항 저장 성공:", response);
			if (response?.status === 200) {
				alert("비밀번호가 변경 되었습니다.");
			}
			window.location.reload();
		} catch (error) {
			alert("양식을 지켜 변경할 비밀번호를 완성해 주세요");
			console.log("password 저장 실패:", error);
		}
	});

	return (
		<S.Container>
			<S.LogoWrapper>
				<S.LogoTitle>TRIMM</S.LogoTitle>
				<S.SideTitle>Trade, Reuse, Innovate and Make your Moment</S.SideTitle>
			</S.LogoWrapper>
			<S.SignWrapper onSubmit={handleSave}>
				<S.Text>비밀번호 변경</S.Text>
				<ValidateInput
					control={control}
					name={"pw"}
					label={"새 비밀번호"}
					placeholder={"password"}
					errors={errors}
					type={"password"}
				/>
				<ValidateInput
					control={control}
					name={"pwCheck"}
					label={"새 비밀번호 확인"}
					placeholder={"password"}
					errors={errors}
					type={"password"}
				/>
				<S.ButtonWrapper>
					<BasicButton
						size={"medium"}
						color={"darkBlack"}
						children={"변경사항 저장"}
						type={"submit"}
						style={{
							width: "100%",
							marginTop: "20px",
						}}
					/>
				</S.ButtonWrapper>
			</S.SignWrapper>
		</S.Container>
	);
};

export default PwChange;

const Text = styled.div`
	font-weight: bold;
	margin-bottom: 40px;
`;

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
	height: 150px;
	${flexCenter}
	${flexColumn}
	text-align: center;
	@media ${({ theme }) => theme.DEVICE.tablet} {
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
		padding: 35px 30px;
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
	width: 100%;
	button {
		font-size: 15px;
		font-weight: 600;
		@media ${({ theme }) => theme.DEVICE.mobile} {
			width: 100%;
			font-size: 13px;
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
	max-width: 600px;
	height: 100vh;
	border-radius: 12px;
	${flexCenter}
	flex-direction: column;
	justify-content: center;

	@media ${({ theme }) => theme.DEVICE.pc} {
		flex-direction: column;
		justify-content: center;
		padding: 0 20px;
	}

	@media ${({ theme }) => theme.DEVICE.tablet} {
		flex-direction: column;
		justify-content: center;
	}
`;
const S = {
	Text,
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
