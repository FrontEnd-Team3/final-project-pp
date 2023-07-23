import BasicButton from "components/Button";
import styled from "styled-components";
import { useState } from "react";
import BasicInput from "components/Input";
import { GrFormClose } from "react-icons/gr";
import { AiFillCaretDown } from "react-icons/ai";

const FormRegister = () => {
	const [content, setContent] = useState("");
	const [check, setCheck] = useState(true);

	const handleCheckedStatus = () => {
		setCheck(!check);
		console.log(check);
	};

	const mockTags = [
		"중고",
		"가전제품",
		"제습기",
		"제습기팔아요",
		"여섯글자제한",
	];
	return (
		<div>
			<S.InputBox>
				<BasicInput
					variant={"primary"}
					color={"primary"}
					size={"full"}
					style={{ padding: "60px 30px 40px 136px" }}
					placeholder="물품 제목을 입력해주세요."
					required
				/>
				<S.Title>
					물품명 <S.Essential>*</S.Essential>
				</S.Title>
			</S.InputBox>
			<S.InputBoxAnother>
				<S.InputTop>
					<S.Title style={{ position: "initial", margin: "0" }}>
						태그 <S.Essential>*</S.Essential>
					</S.Title>
					<BasicInput
						variant={"bgBox"}
						color={"primary"}
						size={"primary"}
						style={{ padding: "18px", width: "908px" }}
						placeholder="태그를 선택하거나 입력할 수 있습니다.(태그 개수 최대 5개까지 가능, 6자 이하로 작성해주세요) / 추후에 form으로 감싸거나 enter 이벤트 줘야함!"
						required
					/>
					<S.ArrowDownIcon>
						<AiFillCaretDown />
					</S.ArrowDownIcon>
				</S.InputTop>
				<S.TagsBox>
					{mockTags.map(tag => (
						<BasicButton color={"white"}>
							#{tag}
							<GrFormClose size={20} onClick={() => console.log("삭제")} />
						</BasicButton>
					))}
				</S.TagsBox>
			</S.InputBoxAnother>
			<S.DescBox>
				<S.Title style={{ position: "inherit", margin: "0" }}>상품설명</S.Title>
				<S.Textarea
					value={content}
					onChange={e => setContent(e.target.value)}
					placeholder="신뢰할 수 있는 거래를 위해 상품 설명을 상세히 적어주세요"
				/>
				<span>{content.length}/1000</span>
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
							checked={check}
							onChange={handleCheckedStatus}
						/>
						<label htmlFor="freeCheckbox">무료나눔</label>
					</S.Checking>
					<S.Checking>
						<S.Checkbox type="radio" id="usedCheckbox" name="radio" />
						<label htmlFor="usedCheckbox">중고거래</label>
					</S.Checking>
				</S.CheckContainer>
			</S.InputBox>
			<S.InputBox style={{ borderBottom: "1.3px solid #d9d9d9" }}>
				<BasicInput
					placeholder="숫자만 입력해주세요"
					variant={"line"}
					style={{
						padding: "16px",
						height: "3rem",
						margin: "60px 10px 60px 130px",
					}}
				/>
				<S.Title style={{ top: "68px" }}>
					가격 <S.Essential>*</S.Essential>
				</S.Title>
				<span>원</span>
			</S.InputBox>
		</div>
	);
};

export default FormRegister;

const TagsBox = styled.div`
	display: flex;
	margin: 20px 0 0 112px;

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
	padding: 60px 20px;
	border-bottom: 1.3px solid ${({ theme }) => theme.PALETTE.gray};
`;

const InputTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
`;

const ArrowDownIcon = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	cursor: pointer;
	padding: 20px 16px 10px;
	svg {
	}
`;

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

const DescBox = styled.div`
	margin: 60px 0;
	padding: 0 20px 30px 20px;
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
};
