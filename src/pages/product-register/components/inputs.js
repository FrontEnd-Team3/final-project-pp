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
import Images from "./Images";
import { useNavigate } from "react-router-dom";
import AlertModal from "pages/product-detail/components/ProductInfo/Modals/alert";
import { useLocation } from "react-router-dom";
import EditInputs from "./editinputs";
const Inputs = () => {
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

	const [imageArr, setImageArr] = useState([]); // 이미지 담을 배열
	const [imageDBArr, setImageDBArr] = useState([]); // DB로 보낼 베열
	const [description, setDescription] = useState("");
	const [taglist, setTaglist] = useState([]);
	const [price, setPrice] = useState("");
	const [address, setAddress] = useState("");
	const { isToggle, setIsToggle, Toggle } = useToggle();
	const {
		isToggle: category,
		setIsToggle: setCategory,
		Toggle: ToggleCategory,
	} = useToggle(true);
	const [isMap, setIsMap] = useState(false);
	const [isOpened, setIsOpened] = useState();
	const navigate = useNavigate();
	const [isImage, setIsImage] = useState(false);
	const imagesContainerRef = useRef(null);

	const location = useLocation();
	const prevData = location.state ? location.state.prevData : null;
	console.log("현재 불러온 데이터", prevData);
	const queryClient = useQueryClient();

	const { mutate } = useMutation(data => ProductApi.addProduct(data), {
		onSuccess: async () => {
			await queryClient.invalidateQueries(["registers"]);
		},
	});

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

	const watchTitle = watch("title");

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
			console.log("price", price);
		}
	}, [watchPrice, setValue, category]);

	useEffect(() => {
		if (imageDBArr.length > 0) {
			setIsImage(false);
		}
		if (address) {
			setIsMap(false);
		}
	}, [imageDBArr, address]);

	const onSubmit = data => {
		if (imageDBArr.length === 0 && address === "") {
			setIsImage(true);
			setIsMap(true);

			imagesContainerRef.current.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
			return;
		}

		if (imageDBArr.length === 0) {
			setIsImage(true);
		}

		if (address === "") {
			setIsMap(true);
		}

		try {
			const formData = new FormData();
			formData.append("title", data.title);
			formData.append("region", address);
			formData.append(
				"price",
				category ? 0 : Number(price?.replace(",", "") || 0),
			);
			formData.append("description", description);
			formData.append("category", category ? 1 : 0);
			formData.append("tag", taglist);
			for (let i = 0; i < imageDBArr.length; i++) {
				formData.append("images", imageDBArr[i]);
			}
			mutate(formData);
			if (imageDBArr.length && address) {
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

	const resetData = () => {
		setImageArr([]);
		setTaglist([]);
		setCategory(true);
		setDescription("");
		setAddress("");
		setValue("title", "");
	};
	if (prevData) {
		return <EditInputs prevData={prevData} />;
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Images
				id="imagesSection"
				imagesContainerRef={imagesContainerRef}
				imageArr={imageArr}
				setImageArr={setImageArr}
				imageDBArr={imageDBArr}
				setImageDBArr={setImageDBArr}
			/>
			{isImage && (
				<S.ErrorMessage>이미지는 한 장 이상 등록해주세요</S.ErrorMessage>
			)}
			<S.InputTitle>
				<S.Title>
					물품명 <S.Essential>*</S.Essential>
				</S.Title>
				<OneController
					name="title"
					control={control}
					errors={errors}
					variant={"primary"}
					color={"primary"}
					size={"full"}
					placeholder="물품 제목을 입력해주세요."
					maxLength={40}
				/>
			</S.InputTitle>
			<S.InputBoxAnother>
				<S.Title style={{ position: "initial", margin: "0" }}>
					태그{" "}
					<S.Essential style={{ fontSize: "14px" }}>
						(최대 5개, 6자 이하 작성)
					</S.Essential>
				</S.Title>
				<S.InputTop>
					<OneController
						name="tag"
						control={control}
						errors={errors}
						variant={"bgBox"}
						color={"primary"}
						size={"primary"}
						style={{ padding: "18px", width: "100%", marginTop: "20px" }}
						placeholder="태그를 선택하거나 입력할 수 있습니다."
						onKeyPress={handleKeyPress}
						maxLength={6}
					/>
					<S.ArrowDownIcon>
						<S.Icon onClick={Toggle} isopen={isToggle} />
					</S.ArrowDownIcon>
					<S.CategoryBox>
						{isToggle && (
							<S.TagCateroryUl>
								{tagCategory.map(onetag => (
									<li onClick={() => handleAddTaglist(onetag.content)}>
										{onetag.content}
									</li>
								))}
							</S.TagCateroryUl>
						)}
					</S.CategoryBox>
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
			<S.InputCheck>
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
							onChange={ToggleCategory}
						/>
						<label htmlFor="freeCheckbox">무료나눔</label>
					</S.Checking>
					<S.Checking>
						<S.Checkbox
							type="radio"
							id="usedCheckbox"
							name="radio"
							checked={!category}
							onChange={ToggleCategory}
						/>
						<label htmlFor="usedCheckbox">중고거래</label>
					</S.Checking>
				</S.CheckContainer>
			</S.InputCheck>
			<S.InputPrice>
				<S.Title style={{ top: "68px" }}>
					가격 <S.Essential>*</S.Essential>
					<S.Won>원</S.Won>
				</S.Title>
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
						backgroundColor: category ? "#ddd" : "initial",
					}}
				/>
			</S.InputPrice>
			<S.MapBox>
				{isMap && <S.ErrorMessage>위치를 설정해주세요</S.ErrorMessage>}
				<Map address={address} setAddress={setAddress} />
			</S.MapBox>
			<S.SubmitBtns>
				<BasicButton size={"medium"} color={"primary"}>
					등록하기
				</BasicButton>
				<BasicButton onClick={resetData} size={"medium"} color={"white"}>
					취소
				</BasicButton>
			</S.SubmitBtns>
			{isOpened && <AlertModal message={"물품 등록이 완료되었습니다."} />}
		</form>
	);
};

export default Inputs;

const InputCheck = styled.div`
	position: relative;
	font-weight: bold;

	@media ${({ theme }) => theme.DEVICE.pc} {
		border-bottom: 1.3px solid ${({ theme }) => theme.PALETTE.gray};
		display: flex;
	}

	@media ${({ theme }) => theme.DEVICE.tablet} {
		display: flex;
		padding-bottom: 30px;
	}
`;

const InputTitle = styled.div`
	position: relative;
	font-weight: bold;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		position: inherit;
	}

	input {
		padding: 60px 30px 40px 136px;

		@media ${({ theme }) => theme.DEVICE.tablet} {
			padding: 20px 0;
		}
	}
`;

const SubmitBtns = styled.div`
	display: flex;
	justify-content: flex-end;

	@media ${({ theme }) => theme.DEVICE.mobile} {
		justify-content: center;
	}

	button {
		margin-left: 20px;
		font-weight: bold;
		transition: background 0.1s;
		font-size: ${({ theme }) => theme.FONT_SIZE.small};

		@media ${({ theme }) => theme.DEVICE.mobile} {
			margin: 0;
		}
	}
	button:hover {
		background: rgba(60, 179, 113, 0.9);
	}

	button:last-of-type {
		color: ${({ theme }) => theme.PALETTE.primary};
		transition: background 0.1s;
		@media ${({ theme }) => theme.DEVICE.mobile} {
			margin-left: 20px;
		}
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

	@media ${({ theme }) => theme.DEVICE.pc} {
		position: inherit;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		position: relative;
		left: 266px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		position: relative;
		left: 230px;
	}
`;

const TagsBox = styled.div`
	display: flex;
	margin-top: 20px;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin: 0;
	}

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

const InputPrice = styled.div`
	position: relative;
	font-weight: bold;
	border-bottom: 1.3px solid #d9d9d9;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		position: inherit;
		display: flex;
		align-items: center;
		margin-top: 30px;
		padding-bottom: 30px;
	}

	input {
		padding: 16px;
		height: 3rem;
		margin: 60px 10px 60px 130px;

		@media ${({ theme }) => theme.DEVICE.tablet} {
			margin: 0 0 0 20px;
		}
		@media ${({ theme }) => theme.DEVICE.mobile} {
			margin: 0 0 0 6px;
			padding: 12px 0 12px 12px;
		}
	}
`;

const InputBoxAnother = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1060px;
	padding: 60px 0px;
	border-bottom: 1.3px solid ${({ theme }) => theme.PALETTE.gray};

	@media ${({ theme }) => theme.DEVICE.tablet} {
		padding: 30px 0px;
	}
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

const CategoryBox = styled.div`
	max-width: 900px;
	z-index: 10;
`;

const TagCateroryUl = styled.ul`
	background-color: #ddd;
	width: 100%;
	height: 170px;
	overflow: auto;
	position: absolute;
	background-color: #f1f1f1;
	font-weight: 500;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		height: 140px;
	}

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

	@media ${({ theme }) => theme.DEVICE.tablet} {
		position: inherit;
	}

	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: ${({ theme }) => theme.FONT_SIZE.xsmedium};
	}
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

	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin: 30px 0;
	}
`;

const Textarea = styled.textarea`
	width: 100%;
	background-color: #f1f1f1;
	border: none;
	border-radius: 12px;
	padding: 40px 30px;
	margin-top: 30px;

	@media ${({ theme }) => theme.DEVICE.mobile} {
		padding: 30px 30px 50px;
	}
`;

const CheckContainer = styled.div`
	display: flex;
	border-bottom: 1.3px solid ${({ theme }) => theme.PALETTE.gray};
	padding: 0 0 60px 90px;

	@media ${({ theme }) => theme.DEVICE.pc} {
		border: none;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		border: none;
		padding: 0;
	}
`;

const Checking = styled.div`
	display: flex;
	align-items: center;
	margin-left: 40px;
	label {
		margin-left: 6px;
	}

	@media ${({ theme }) => theme.DEVICE.mobile} {
		margin-left: 20px;
	}
`;

const Checkbox = styled.input`
	width: 16px;
	height: 16px;
	accent-color: ${({ theme }) => theme.PALETTE.darkPrimary};
`;

const ErrorMessage = styled.div`
	color: ${({ theme }) => theme.PALETTE.red};
	margin-bottom: 10px;
	font-weight: bold;
`;

const S = {
	InputCheck,
	InputTitle,
	SubmitBtns,
	MapBox,
	Won,
	InputPrice,
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
	CategoryBox,
	TagCateroryUl,
	ErrorMessage,
};
