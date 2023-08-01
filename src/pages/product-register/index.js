import styled from "styled-components";
import { flexCenter } from "styles/common";
import BasicButton from "components/Button";
import Map from "./components/map";
import { AiFillCamera } from "react-icons/ai";
import Inputs from "./components/inputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "consts/registerschema";
import { useEffect } from "react";

const ProductRegister = () => {
	const {
		handleSubmit,
		control,
		watch,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(RegisterSchema),
		mode: "onChange",
	});

	// 중고거래 선택되어 있는데 0원인 상태로 등록하기 누르면
	// 저절로 무료나눔으로 체크 변경하거나, 무료나눔으로 데이터 저장하기
	const onSubmit = data => {
		console.log("물품 등록하기", data);
	};
	useEffect(() => {
		localStorage.setItem("tag", JSON.stringify([]));
	}, []);

	return (
		<S.Wrapper>
			<S.Container>
				<form onSubmit={handleSubmit(onSubmit)}>
					<S.ImgRegister>
						<S.TitleAnother style={{ marginBottom: "20px" }}>
							상품 이미지 (0/5) <S.Essential>*</S.Essential>
						</S.TitleAnother>
						<S.MainImg>
							<AiFillCamera size={80} />
							<S.ImageBox>
								<S.RegisterLabel htmlFor="registerImg">
									이미지 등록
								</S.RegisterLabel>
								<S.RegisterInput
									type="file"
									multiple
									accept="image/*"
									id="registerImg"
								/>
							</S.ImageBox>
						</S.MainImg>
					</S.ImgRegister>
					<S.Images>
						{/* {registerImg.map((img, i) => (
							<OneImg key={i} img={img} />
						))} */}
						이미지 들어오는 곳
					</S.Images>
					<Inputs
						errors={errors}
						control={control}
						watch={watch}
						setValue={setValue}
					/>
					<S.MapBox>
						<S.TitleAnother>
							위치 설정 <S.Essential>*</S.Essential>
						</S.TitleAnother>
						<Map />
					</S.MapBox>
					<S.SubmitBtns>
						<BasicButton size={"medium"} color={"primary"}>
							등록하기
						</BasicButton>
						<BasicButton size={"medium"} color={"white"}>
							취소
						</BasicButton>
					</S.SubmitBtns>
				</form>
			</S.Container>
		</S.Wrapper>
	);
};

export default ProductRegister;

const Title = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.semimedium};
	font-weight: bold;
	position: absolute;
	top: 50px;
	z-index: 1;
	margin-left: 20px;
`;

const Essential = styled.span`
	color: ${({ theme }) => theme.PALETTE.primary};
`;

const Wrapper = styled.div`
	width: 100%;
`;

const Container = styled.div`
	margin: 50px auto;
	max-width: 900px;
`;

const ImgRegister = styled.div``;

const TitleAnother = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.semimedium};
	font-weight: bold;
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

const ImageBox = styled.div``;

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
	button {
		margin-left: 20px;
		font-weight: bold;
		transition: background 0.1s;
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	}
	button:hover {
		background: rgba(60, 179, 113, 0.9);
	}

	button:last-of-type {
		color: ${({ theme }) => theme.PALETTE.primary};
		transition: background 0.1s;
	}
	button:last-of-type:hover {
		background: transparent;
	}
`;

const MapBox = styled.div`
	margin: 30px 0;
`;

const MapAddress = styled.p`
	font-size: 12px;
	color: gray;
	margin: 12px 0 20px 0;
`;

const S = {
	Container,
	Wrapper,
	ImgRegister,
	Title,
	Essential,
	MainImg,
	ImageBox,
	RegisterLabel,
	RegisterInput,
	Images,
	SubmitBtns,
	MapBox,
	TitleAnother,
	MapAddress,
};
