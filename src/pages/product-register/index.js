import styled from "styled-components";
import BasicButton from "components/Button";
import Map from "./components/map";
import Inputs from "./components/inputs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "consts/registerschema";
import Images from "./components/Images";
import { useState } from "react";
import ProductApi from "apis/product.api";
import { useMutation, useQueryClient } from "react-query";
import QueryKey from "consts/queryKey";
import { axiosInstance } from "apis/core";
// import { useQueryClient } from "react-query";

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

	const [product, setProduct] = useState([]);
	const formData = new FormData();

	const queryClient = useQueryClient();

	const { mutate } = useMutation(formData => ProductApi.addProduct(formData), {
		onSuccess: async () => {
			await queryClient.invalidateQueries([QueryKey.productRegister]);
		},
	});

	const handleImageChange = imgArr => {
		setProduct({ ProductImages: imgArr });
	};

	const handleRegionChange = address => {
		setProduct(prevState => ({
			...prevState,
			region: address,
		}));
	};

	// 이미지 데이터가 제대로 안들어가고 있음
	const handleInputValues = inputValues => {
		setProduct(prevState => ({
			...prevState,
			inputValues,
		}));
	};

	const config = {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	};

	const onSubmit = data => {
		// console.log("물품 등록하기", data);
		// console.log("등록", product);	formData.append("title", product.title);
		formData.append("images", product.ProductImages);
		formData.append("title", product.inputValues.title);
		formData.append("category", product.inputValues.category);
		formData.append("description", product.inputValues.description);
		formData.append("price", product.inputValues.price);
		formData.append("tag", product.inputValues.tag);
		formData.append("region", product.region);
		for (let i = 0; i < product.ProductImages.length; i++) {
			formData.append("images", product.ProductImages[i].file);
		}
		axiosInstance
			.post("/api/product", formData, config)
			.then(response => {
				console.log("성공", response);
			})
			.catch(error => {
				if (error.response && error.response.data) {
					console.log("에러", error.response.data); // 서버에서 전달한 상세 에러 메시지 출력
				} else {
					console.error("에러", error); // 그 외의 에러인 경우 에러 객체 전체 출력
				}
			});
		console.log(product);
	};

	return (
		<S.Wrapper>
			<S.Container>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Images onImageChange={handleImageChange} />
					<Inputs
						errors={errors}
						control={control}
						watch={watch}
						setValue={setValue}
						onInputValuesChange={handleInputValues}
						// imageArr={product.ProductImages}
					/>
					<S.MapBox>
						<S.TitleAnother>
							위치 설정 <S.Essential>*</S.Essential>
						</S.TitleAnother>
						<Map onRegionChange={handleRegionChange} />
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

const TitleAnother = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.semimedium};
	font-weight: bold;
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
	Title,
	Essential,
	SubmitBtns,
	MapBox,
	TitleAnother,
	MapAddress,
};
