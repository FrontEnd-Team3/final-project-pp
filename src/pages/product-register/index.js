import styled from "styled-components";
import { flexCenter, primaryFont } from "styles/common";
import OneImg from "./components/one-img";
import { registerImg } from "mock/registerImg";
import FormRegister from "./components/form-register";
import BasicButton from "components/Button";

const ProductRegister = () => {
	return (
		<S.Container>
			<S.Wrapper>
				<S.ImgRegister>
					<S.Title>
						상품 이미지 (0/5) <S.Essential>*</S.Essential>
					</S.Title>
					<S.MainImg>
						<S.Icons src={process.env.PUBLIC_URL + "/ico.camera.png"} />
						<S.RegisterForm>
							<S.RegisterLabel htmlFor="registerImg">
								이미지 등록
							</S.RegisterLabel>
							<S.RegisterInput
								type="file"
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
					<BasicButton size="medium" shape="medium" variant="light">
						등록하기
					</BasicButton>
					<BasicButton size="medium" shape="medium" variant="secondary">
						리셋
					</BasicButton>
				</S.SubmitBtns>
			</S.Wrapper>
		</S.Container>
	);
};

export default ProductRegister;

const Container = styled.div`
	margin: 50px auto;
	max-width: 860px;
	* {
		${primaryFont}
	}
`;

const Wrapper = styled.div`
	width: 100%;
`;

const ImgRegister = styled.div``;

const Title = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.medium};
	margin-bottom: 40px;
`;

const Essential = styled.span`
	color: ${({ theme }) => theme.PALETTE.primary.dark};
`;

const MainImg = styled.div`
	${flexCenter}
	flex-direction: column;
	width: 450px;
	height: 450px;
	background-color: ${({ theme }) => theme.PALETTE.primary.light};
`;

const Icons = styled.img`
	width: 80px;
	height: 80px;
	margin-bottom: 20px;
`;

const RegisterForm = styled.form``;

const RegisterLabel = styled.label`
	cursor: pointer;
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
	& button {
		margin-left: 20px;
	}
`;

const S = {
	Container,
	Wrapper,
	ImgRegister,
	Title,
	Essential,
	MainImg,
	Icons,
	RegisterForm,
	RegisterLabel,
	RegisterInput,
	Images,
	SubmitBtns,
};
