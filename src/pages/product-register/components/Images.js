import styled from "styled-components";
import { flexCenter } from "styles/common";
import { AiFillCamera } from "react-icons/ai";
import { useRef } from "react";
import { TiDelete } from "react-icons/ti";
const Images = ({
	imageArr,
	setImageArr,
	imageDBArr,
	setImageDBArr,
	imagesContainerRef,
}) => {
	const fileInput = useRef(null); // ref로 input 태그 참조

	// 이미지 상대 경로 저장
	const onChangeImage = async e => {
		const files = e.target.files; // input에 file 선택, e.target.files 파일 선택목록 가져오는 로직, files에 저장

		const updatedImages = [...imageArr];
		const updatedDBImages = [...imageDBArr];

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			updatedImages.push(URL.createObjectURL(file)); // 미리보기
			updatedDBImages.push(file); // DB용
		}
		console.log("test", updatedDBImages);

		setImageArr(updatedImages.slice(0, 5));
		setImageDBArr(updatedDBImages.slice(0, 5));
	};

	// 개별 이미지 삭제 로직
	const onDeleteImage = id => {
		const _imageArr = imageArr.filter((_, idx) => idx !== id);
		setImageArr(_imageArr);
		const _setImageDBArr = imageDBArr.filter((_, idx) => idx !== id);
		setImageDBArr(_setImageDBArr);
	};

	return (
		<>
			<div ref={imagesContainerRef}>
				<S.TopBox>
					<S.TitleAnother>
						상품 이미지 ({imageArr.length}/5) <S.Essential>*</S.Essential>
					</S.TitleAnother>
					<S.EssentialDesc>*필수 기입 사항</S.EssentialDesc>
				</S.TopBox>
				<S.MainImg>
					<AiFillCamera size={80} />
					<div>
						<S.RegisterLabel htmlFor="registerImg">이미지 등록</S.RegisterLabel>
						<S.RegisterInput
							ref={fileInput}
							onChange={e => onChangeImage(e)}
							type="file"
							accept="image/*"
							multiple
							id="registerImg"
						/>
					</div>
				</S.MainImg>
			</div>
			<S.RealImageBox>
				{imageArr.map((imageUrl, i) => (
					<S.OneImage key={i} imageUrl={imageUrl}>
						{i === 0 && <S.MainLabel>대표이미지</S.MainLabel>}
						<S.DeleteIcons onClick={() => onDeleteImage(i)}>
							<TiDelete size={20} />
						</S.DeleteIcons>
					</S.OneImage>
				))}
			</S.RealImageBox>
		</>
	);
};
export default Images;

const MainLabel = styled.div`
	position: absolute;
	padding: 4px;
	font-weight: 500;
	font-size: ${({ theme }) => theme.FONT_SIZE.xxsmall};
	color: #fff;
	background-color: ${({ theme }) => theme.PALETTE.primary};
`;

const TopBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
`;

const EssentialDesc = styled.p`
	font-weight: 700;
	color: ${({ theme }) => theme.PALETTE.red};
`;

const TitleAnother = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.semimedium};
	font-weight: bold;
`;

const Essential = styled.span`
	color: ${({ theme }) => theme.PALETTE.primary};
`;

const MainImg = styled.div`
	${flexCenter}
	flex-direction: column;
	width: 348px;
	height: 348px;
	background-color: #fafafd;
	border: 1px solid #ddd;

	& svg {
		fill: ${({ theme }) => theme.PALETTE.gray};
	}
`;

const RegisterLabel = styled.label`
	cursor: pointer;
	font-weight: bold;
	color: #9b99a9;
	padding: 202px 136px 124px;
`;

const RegisterInput = styled.input`
	display: none;
`;

const RealImageBox = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 20px;
	margin: 20px 0;
`;

const OneImage = styled.div`
	position: relative;
	width: 164px;
	height: 164px;
	border: 1px solid #ddd;
	background: url(${props => props.imageUrl}) no-repeat center center / contain;
`;

const DeleteIcons = styled.p`
	font-size: 13px;
	padding: 4px;
	text-align: center;
	position: absolute;
	right: 0;
	color: ${({ theme }) => theme.PALETTE.white};
	cursor: pointer;
	svg {
		color: #797979;
	}
`;

const S = {
	MainLabel,
	TopBox,
	EssentialDesc,
	TitleAnother,
	Essential,
	MainImg,
	RegisterLabel,
	RegisterInput,
	RealImageBox,
	OneImage,
	DeleteIcons,
};
