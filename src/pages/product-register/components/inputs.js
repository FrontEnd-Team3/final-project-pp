import BasicButton from "components/Button";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { AiFillCaretDown } from "react-icons/ai";
import OneController from "./OneController";
import { replacePrice } from "utils/priceNum";
import useToggle from "hooks/useToggle";
import { tagCategory } from "mocks/data/products/category";
const Inputs = ({
	control,
	errors,
	watch,
	setValue,
	onInputValuesChange,
	imageArr,
}) => {
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState(true);
	const [taglist, setTaglist] = useState([]);
	const [price, setPrice] = useState("");
	const { isToggle, setIsToggle, Toggle } = useToggle();

	useEffect(() => {
		const inputValues = {
			title: watch("title"),
			description,
			price: category ? 0 : Number(price?.replace(",", "") || 0),
			region: "서울시 성동구 성수동1가",
			category,
			tag: taglist,
			images: imageArr,
		};
		onInputValuesChange(inputValues);
	}, [watch, description, price, category, taglist]);


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
				tagItem => tagItem.Tag.tag === e.target.value.trim(),
			);

			if (isDuplicate) return;

			const tag = {
				idx: Math.floor(Math.random() * 100000),
				Tag: {
					tag: e.target.value,
				},
			};
			if (taglist.length < 5) {
				setTaglist(prev => [...prev, tag]);
			}
			setValue("tag", "");
		}
	};

	// 태그 카테고리 li 클릭 시 태그 추가
	const handleAddTaglist = content => {
		// 중복값 막기
		const isDuplicate = taglist.some(tagItem => tagItem.Tag.tag === content);

		const tag = {
			idx: Math.floor(Math.random() * 100000),
			Tag: {
				tag: content,
			},
		};

		if (isDuplicate) {
			setIsToggle(false);
		}

		if (!isDuplicate) {
			setTaglist(prev => [...prev, tag].slice(0, 5));
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
			console.log("price", price);
		}
	}, [watchPrice, setValue, category]);

	// 태그 삭제 로직
	const handleDelete = idx => {
		// 갖고온 현재 idx의 값과 기존에 있는 taglist의 idx 값 비교
		const updateTags = taglist.filter(v => v.idx !== idx);
		setTaglist(updateTags);
	};

	return (
		<div>
			<S.InputBox>
				<OneController
					name="title"
					control={control}
					errors={errors}
					variant={"primary"}
					color={"primary"}
					size={"full"}
					style={{ padding: "60px 30px 40px 136px" }}
					placeholder="물품 제목을 입력해주세요."
					maxLength={40}
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
							#{tagItem.Tag.tag}
							<GrFormClose
								onClick={() => {
									handleDelete(tagItem.idx);
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
				/>
				<S.Title style={{ top: "68px" }}>
					가격 <S.Essential>*</S.Essential>
					<S.Won>원</S.Won>
				</S.Title>
			</S.InputBox>
		</div>
	);
};

export default Inputs;

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
