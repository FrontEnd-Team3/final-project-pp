import styled from "styled-components";
import { flexCenter, primaryFont } from "styles/common";
import OneImg from "./components/one-img";
import { registerImg } from "mock/registerImg";
import FormRegister from "./components/form-register";
import BasicButton from "components/Button";
import { AiFillCamera } from "react-icons/ai";

const ProductRegister = () => {
	const handleRegisterProduct = e => {
		e.preventDefault();
		console.log("물품 등록하기");
	};

	return (
		<S.Wrapper>
			<S.Container>
				<form onSubmit={handleRegisterProduct}>
					<S.ImgRegister>
						<S.Title>
							상품 이미지 (0/5) <S.Essential>*</S.Essential>
						</S.Title>
						<S.MainImg>
							<AiFillCamera size={80} />
							<S.RegisterForm>
								<S.RegisterLabel htmlFor="registerImg">
									이미지 등록
								</S.RegisterLabel>
								<S.RegisterInput
									type="file"
									multiple
									accept="image/*"
									id="registerImg"
									required
								/>
							</S.RegisterForm>
						</S.MainImg>
					</S.ImgRegister>
					<S.Images>
						{registerImg.map((img, i) => (
							<OneImg key={i} img={img} />
						))}
					</S.Images>
					<FormRegister />
					<S.SubmitBtns>
						<BasicButton size={"medium"} variant={"primary"}>
							등록하기
						</BasicButton>
						<BasicButton size={"medium"} variant={"white"}>
							취소
						</BasicButton>
					</S.SubmitBtns>
				</form>
			</S.Container>
		</S.Wrapper>
	);
};

export default ProductRegister;

const Wrapper = styled.div`
	width: 100%;
`;

const Container = styled.div`
	margin: 50px auto;
	max-width: 1060px;
	* {
		${primaryFont}
	}
`;

const ImgRegister = styled.div``;

const Title = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.semimedium};
	font-weight: bold;
	margin-bottom: 40px;
`;

const Essential = styled.span`
	color: ${({ theme }) => theme.PALETTE.primary};
`;

const MainImg = styled.div`
	${flexCenter}
	flex-direction: column;
	width: 412px;
	height: 412px;
	background-color: #fafafd;
	border: 1px solid #ddd;

	& svg {
		fill: ${({ theme }) => theme.PALETTE.gray};
	}
`;

const RegisterForm = styled.form``;

const RegisterLabel = styled.label`
	cursor: pointer;
	font-weight: bold;
	color: #9b99a9;
`;

const RegisterInput = styled.input`
	display: none;
`;

const Images = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 20px;
	margin: 20px 0;
`;

const SubmitBtns = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 0 20px;
	button {
		margin-left: 20px;
		font-weight: bold;
		transition: background 0.1s;
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	}
	button:hover {
		background: ${({ theme }) => theme.PALETTE.darkPrimary};
	}

	button:last-of-type {
		color: ${({ theme }) => theme.PALETTE.primary};
		transition: background 0.1s;
	}
	button:last-of-type:hover {
		background: transparent;
	}
`;

const S = {
	Container,
	Wrapper,
	ImgRegister,
	Title,
	Essential,
	MainImg,
	RegisterForm,
	RegisterLabel,
	RegisterInput,
	Images,
	SubmitBtns,
};
