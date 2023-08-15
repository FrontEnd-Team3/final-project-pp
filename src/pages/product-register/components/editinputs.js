import BasicButton from "components/Button";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { AiFillCaretDown } from "react-icons/ai";
import OneController from "./OneController";
import { replacePrice } from "utils/priceNum";
import useToggle from "hooks/useToggle";
import { tagCategory } from "mocks/data/products/category";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "consts/registerschema";
import Map from "./map";
import { useMutation, useQueryClient } from "react-query";
import ProductApi from "apis/product.api";
import AlertModal from "pages/product-detail/components/ProductInfo/Modals/alert";
import EditImages from "./editImages";
import { useNavigate } from "react-router-dom";
import { replace } from "lodash";
const EditInputs = prevData => {
	const {
		handleSubmit,
		control,
		watch,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(RegisterSchema),
		mode: "onChange",
		defaultValues: {
			title: prevData.prevData.searchProduct.title,
			price: replace(prevData.prevData.searchProduct.price),
		},
	});

	// 이전 데이터 불러와서 editData에 저장
	const editData = prevData.prevData.searchProduct;
	// 이미지 데이터 배열 만들기 => ProductImages에는 서브이미지, img_url에는 메인 이미지

	// const subImages = editData.ProductImages.map(v => v.img_url);
	// const imageDataList = [
	// 	editData.img_url,
	// 	...editData.ProductImages.map(v => v.img_url),
	// ];

	const subImages = [...editData.ProductImages.map(v => v.img_url)];
	const allDataList = [
		editData.img_url,
		...editData.ProductImages.map(v => v.img_url),
	];

	// console.log("서브 이미지", imageDataList.pop());
	const [imageArr, setImageArr] = useState(allDataList); // 이미지 담을 배열
	const [imageDBArr, setImageDBArr] = useState([]); // DB로 보낼 베열
	const [description, setDescription] = useState(editData.description);
	const [category, setCategory] = useState(editData.category);
	const queryClient = useQueryClient();
	const imagesContainerRef = useRef(null);

	// 태그 이전 데이터 가져와서 map 돌려줌 > 태그 데이터 형태 때문에
	const EditTagList = editData.ProductsTags;
	const EditTag = EditTagList.map(v => v.Tag.tag);
	const [taglist, setTaglist] = useState(EditTag);
	console.log(editData.price);
	const [price, setPrice] = useState("");
	const [address, setAddress] = useState(editData.region);
	const { isToggle, setIsToggle, Toggle } = useToggle();
	const [isMap, setIsMap] = useState(false);
	const [isOpened, setIsOpened] = useState(false);
	const navigate = useNavigate();
	const { mutate } = useMutation(data => ProductApi.updateProduct(data), {
		onSuccess: async data => {
			await queryClient.invalidateQueries(["registers"]);
			console.log("data", data);
		},
	});

	console.log("뭐야", subImages);
	console.log("메인이미지", editData.img_url);
	console.log("서브 이미지", subImages);
	console.log("제목", editData.title);
	console.log("description", editData.description);
	console.log("지역", editData.region);
	console.log("태그", EditTag);

	// 태그 유효성 검사
	const watchTag = watch("tag");

	// 입력값 enter로 태그 추가
	const handleKeyPress = e => {
		if (e.key === "Enter") {
			e.preventDefault();

			// 빈값 추가 막기
			if (e.target.value.trim() === "") return;

			// 중복값 막기
			const isDuplicate = taglist.some(
				tagItem => tagItem === e.target.value.trim(),
			);

			if (isDuplicate) return;

			if (taglist.length < 5) {
				setTaglist(prev => [...prev, e.target.value]);
			}
			setValue("tag", "");
		}
	};

	// 태그 카테고리 li 클릭 시 태그 추가
	const handleAddTaglist = content => {
		// 중복값 막기
		const isDuplicate = taglist.some(tagItem => tagItem === content);

		if (isDuplicate) {
			setIsToggle(false);
		}

		if (!isDuplicate) {
			setTaglist(prev => [...prev, content].slice(0, 5));
			setIsToggle(false);
		}
	};

	// 상품 설명 글자수
	const handleDescription = e => {
		const inputValue = e.target.value;
		// 엔터 두번 이상이면 무조건 한 번으로 인식하게 하는 로직(엔터 남발 방지)
		const enterEditValue = inputValue.replace(/\n{3,}/g, "\n\n");
		setDescription(enterEditValue);
	};

	// 태그 삭제 로직
	const handleDelete = tagItem => {
		// 갖고온 현재 idx의 값과 기존에 있는 taglist의 idx 값 비교
		const updateTags = taglist.filter(v => v !== tagItem);
		setTaglist(updateTags);
	};

	// 체크 여부
	const handleCheckedStatus = () => {
		setCategory(!category);
	};

	// 가격 유효성 검사
	const watchPrice = watch("price");
	useEffect(() => {
		if (category) {
			setValue("price", "0");
		} else if (!category) {
			const newWatchPrice = replacePrice(watchPrice);
			const priceValue = newWatchPrice === "0" ? "" : newWatchPrice; // 변환값이 0이면 빈값으로 초기화, 그렇지 않은 경우 입력값 사용(0,003원 이런식으로 입력되는 버그 수정해야함)
			setValue("price", priceValue);
			setPrice(priceValue);
		}
	}, [watchPrice, setValue, category]);

	const onSubmit = data => {
		try {
			const formData = new FormData();
			formData.append("idx", editData.idx);
			formData.append("title", data.title);
			formData.append(
				"price",
				category ? 0 : Number(price?.replace(",", "") || 0),
			);
			formData.append("description", description);
			formData.append("category", category ? 1 : 0);
			formData.append("region", address);
			formData.append("tag", taglist);
			// 데이터를 똑같은 형식으로 넘겨줘야 하는데 그러지 않아서 계속 오류가 남 => 중복 수정 해야됌
			formData.append("img_url", subImages);
			formData.append("main_url", editData.img_url);
			if (imageDBArr !== []) {
				for (let i = 0; i < imageDBArr.length; i++) {
					formData.append("images", imageDBArr[i]);
				}
			}
			//이미지 추가 안하고 수정
			else {
				formData.append("images", "");
			}

			mutate(formData);
			if (editData.img_url && address) {
				setIsOpened(true);
				setTimeout(() => {
					setIsOpened(false);
					navigate("/");
				}, 1500);
			}
		} catch (error) {
			console.error("데이터 저장에 실패했습니다:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<EditImages
				id="imagesSection"
				imagesContainerRef={imagesContainerRef}
				imageArr={imageArr}
				setImageArr={setImageArr}
				imageDBArr={imageDBArr}
				setImageDBArr={setImageDBArr}
			/>
			<S.InputBox>
				<OneController
					name="title"
					control={control}
					errors={errors}
					variant={"primary"}
					color={"primary"}
					size={"full"}
					style={{ padding: "60px 30px 40px 136px" }}
					maxLength={40}
					defaultValue={editData.title}
				/>
				<S.Title>
					물품명 <S.Essential>*</S.Essential>
				</S.Title>
			</S.InputBox>
			<S.InputBoxAnother>
				<S.Title style={{ position: "initial", margin: "0" }}>태그</S.Title>
				<S.InputTop>
					<OneController
						name="tag"
						control={control}
						errors={errors}
						variant={"bgBox"}
						color={"primary"}
						size={"primary"}
						style={{ padding: "18px", width: "100%", marginTop: "20px" }}
						placeholder="태그를 선택하거나 입력할 수 있습니다. 태그 개수 최대 5개까지 가능, 6자 이하로 작성해주세요"
						onKeyPress={handleKeyPress}
						maxLength={6}
					/>
					<S.ArrowDownIcon>
						<S.Icon onClick={Toggle} isopen={isToggle} />
					</S.ArrowDownIcon>
					{isToggle && (
						<S.TagCateroryUl>
							{tagCategory.map(onetag => (
								<li onClick={() => handleAddTaglist(onetag.content)}>
									{onetag.content}
								</li>
							))}
						</S.TagCateroryUl>
					)}
				</S.InputTop>
				<S.TagsBox>
					{taglist.map(tagItem => (
						<BasicButton key={tagItem.idx} color={"white"}>
							#{tagItem}
							<GrFormClose
								onClick={() => {
									handleDelete(tagItem);
								}}
								size={20}
							/>
						</BasicButton>
					))}
				</S.TagsBox>
			</S.InputBoxAnother>
			<S.DescBox>
				<S.Title style={{ position: "inherit", margin: "0" }}>상품설명</S.Title>
				<S.Textarea
					value={description}
					onChange={handleDescription}
					placeholder="신뢰할 수 있는 거래를 위해 상품 설명을 상세히 적어주세요"
					maxLength={1000}
				/>
				<span>{description.length}/1000</span>
			</S.DescBox>
			<S.InputBox>
				<S.Title style={{ top: "-4px" }}>
					구분 <S.Essential>*</S.Essential>
				</S.Title>
				<S.CheckContainer>
					<S.Checking>
						<S.Checkbox
							type="radio"
							id="freeCheckbox"
							name="radio"
							checked={category}
							onChange={handleCheckedStatus}
						/>
						<label htmlFor="freeCheckbox">무료나눔</label>
					</S.Checking>
					<S.Checking>
						<S.Checkbox
							type="radio"
							id="usedCheckbox"
							name="radio"
							checked={!category}
							onChange={handleCheckedStatus}
						/>
						<label htmlFor="usedCheckbox">중고거래</label>
					</S.Checking>
				</S.CheckContainer>
			</S.InputBox>
			<S.InputBox style={{ borderBottom: "1.3px solid #d9d9d9" }}>
				<OneController
					name="price"
					control={control}
					errors={errors}
					variant={"line"}
					color={"primary"}
					size={"primary"}
					maxLength={11}
					placeholder="숫자만 입력해주세요"
					type={"text"}
					style={{
						padding: "16px",
						height: "3rem",
						margin: "60px 10px 60px 130px",
						backgroundColor: category ? "#ddd" : "initial",
					}}
					defaultValue={editData.price}
				/>
				<S.Title style={{ top: "68px" }}>
					가격 <S.Essential>*</S.Essential>
					<S.Won>원</S.Won>
				</S.Title>
			</S.InputBox>
			<S.MapBox>
				<Map address={address} setAddress={setAddress} />
			</S.MapBox>
			<S.SubmitBtns>
				<BasicButton size={"medium"} color={"primary"}>
					수정하기
				</BasicButton>
				<BasicButton size={"medium"} color={"white"}>
					취소
				</BasicButton>
			</S.SubmitBtns>
			{isOpened && <AlertModal message={"물품 수정이 완료되었습니다."} />}
		</form>
	);
};

export default EditInputs;

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

const Won = styled.span`
	font-weight: 400;
	font-size: 16px;
	position: absolute;
	left: 360px;
	top: 10px;
`;

const TagsBox = styled.div`
	display: flex;
	margin-top: 20px;

	button {
		margin-right: 10px;
		padding: 10px;
		color: ${({ theme }) => theme.PALETTE.primary};
		display: flex;
		align-items: center;
		font-size: 16px;
		svg {
			margin-left: 20px;
		}
		path {
			stroke: ${({ theme }) => theme.PALETTE.primary};
		}
	}
`;

const InputBox = styled.div`
	position: relative;
	font-weight: bold;
`;

const InputBoxAnother = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1060px;
	padding: 60px 0px;
	border-bottom: 1.3px solid ${({ theme }) => theme.PALETTE.gray};
`;

const InputTop = styled.div`
	justify-content: space-between;
	align-items: center;
	position: relative;
`;

const ArrowDownIcon = styled.div`
	position: absolute;
	right: 0;
	top: 18px;
	cursor: pointer;
	padding: 20px 16px 10px;
`;

const Icon = styled(AiFillCaretDown)`
	transform: ${({ isopen }) => (isopen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const TagCateroryUl = styled.ul`
	background-color: #ddd;
	width: 900px;
	height: 170px;
	overflow: auto;
	position: absolute;
	z-index: 10;
	background-color: #f1f1f1;
	font-weight: 500;

	li {
		cursor: pointer;
		padding: 18px 0 9px 18px;
	}

	li:hover {
		color: ${({ theme }) => theme.PALETTE.primary};
		font-weight: bold;
		background-color: rgba(255, 255, 255, 1);
	}

	li:nth-child(even) {
		background-color: #f9f9f9;
	}

	li:nth-child(even):hover {
		background-color: rgba(255, 255, 255, 0.8);
	}
`;

const Title = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.semimedium};
	font-weight: bold;
	position: absolute;
	top: 50px;
	z-index: 1;
`;

const Essential = styled.span`
	color: ${({ theme }) => theme.PALETTE.primary};
`;

const DescBox = styled.div`
	margin: 60px 0;
	padding-bottom: 30px;
	border-bottom: 1.3px solid ${({ theme }) => theme.PALETTE.gray};

	& span {
		display: flex;
		justify-content: flex-end;
		margin-top: 8px;
	}
`;

const Textarea = styled.textarea`
	width: 100%;
	background-color: #f1f1f1;
	border: none;
	border-radius: 12px;
	padding: 40px 30px;
	margin-top: 30px;
`;

const CheckContainer = styled.div`
	display: flex;
	border-bottom: 1.3px solid ${({ theme }) => theme.PALETTE.gray};
	padding: 0 0 60px 90px;
`;

const Checking = styled.div`
	display: flex;
	align-items: center;
	margin-left: 40px;
	label {
		margin-left: 6px;
	}
`;

const Checkbox = styled.input`
	width: 16px;
	height: 16px;
	accent-color: ${({ theme }) => theme.PALETTE.darkPrimary};
`;

const S = {
	SubmitBtns,
	MapBox,
	TitleAnother,
	Won,
	InputBox,
	InputBoxAnother,
	InputTop,
	Title,
	Essential,
	DescBox,
	Textarea,
	CheckContainer,
	Checking,
	Checkbox,
	TagsBox,
	ArrowDownIcon,
	Icon,
	TagCateroryUl,
};
