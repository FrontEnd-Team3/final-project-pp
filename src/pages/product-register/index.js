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

	// const productData = ProductQueryApi.addProduct(product);

	const queryClient = useQueryClient();

	const { mutate } = useMutation(formData => ProductApi.addProduct(formData), {
		onSuccess: async () => {
			await queryClient.invalidateQueries([QueryKey.productRegister]);
		},
	});

	const handleInputValues = inputValues => {
		setProduct(inputValues);
	};

	const handleImageChange = imgArr => {
		setProduct(prevState => ({
			...prevState,
			ProductImages: imgArr,
		}));
	};

	const handleRegionChange = address => {
		setProduct(prevState => ({
			...prevState,
			region: address,
		}));
	};
	// const headers = { "Content-Type": "application/json" };
	// async function saveProduct(product) {
	// 	try {
	// 		const response = await axiosInstance.post("/api/product", product, {
	// 			headers,
	// 		});
	// 		console.log("성공적으로 데이터를 저장했습니다:", response.data);
	// 	} catch (error) {
	// 		console.error("데이터 저장에 실패했습니다:", error);
	// 	}
	// }
	// 중고거래 선택되어 있는데 0원인 상태로 등록하기 누르면
	// 저절로 무료나눔으로 체크 변경하거나, 무료나눔으로 데이터 저장하기

	const onSubmit = data => {
		console.log("물품 등록하기", data);
		console.log("등록", product);
		// ProductApi.updateProduct(product);
		//
		formData.append("title", product.title);
		formData.append("region", product.region);
		formData.append("price", product.price);
		formData.append("description", product.discription);
		formData.append("images", product.images);
		formData.append("tag", product.tag);

		mutate(product);
		// product =
		// saveProduct(product);
		// AddProduct();
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
						imageArr={product.ProductImages}
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
