import styled from "styled-components";
import { flexCenter } from "styles/common";
import { AiFillCamera } from "react-icons/ai";
import { useRef } from "react";
import { TiDelete } from "react-icons/ti";
import imageCompression from "browser-image-compression";
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
		const files = e.target.files;
		// const files = Array.from(e.target.files);

		const updatedImages = [...imageArr];
		const updatedDBImages = [...imageDBArr];

		const options = {
			maxSizeMB: 1,
			maxWidthOrHeight: 1920,
			useWebWorker: true,
		};

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			try {
				const compressedFile = await imageCompression(file, options);
				await updatedImages.push(URL.createObjectURL(compressedFile)); // 미리보기
				await updatedDBImages.push(compressedFile); // DB용
				console.log(compressedFile);
			} catch (error) {
				console.log(error);
			}
		}

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
					<S.Title>
						상품 이미지 ({imageArr.length}/5) <S.Essential>*</S.Essential>
					</S.Title>
					<S.EssentialDesc>*필수 기입 사항</S.EssentialDesc>
				</S.TopBox>
				<S.ImageContainer>
					<S.MainImg>
						<AiFillCamera size={80} />
						<div>
							<S.RegisterLabel htmlFor="registerImg">
								이미지 등록
							</S.RegisterLabel>
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
					<S.ImageDesc>
						<p>* 상품 이미지는 600x600에 최적화 되어 있습니다.</p>
						<p>- 이미지는 최대 5장까지 등록할 수 있습니다.</p>
					</S.ImageDesc>
				</S.ImageContainer>
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

const ImageContainer = styled.div`
	display: flex;
	align-items: flex-end;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		align-items: center;
		flex-direction: column;
	}
`;

const ImageDesc = styled.div`
	margin-left: 20px;

	@media ${({ theme }) => theme.DEVICE.pc} {
		margin-left: 16px;
	}

	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin: 0;
	}

	p:first-of-type {
		font-weight: 700;
	}

	p {
		color: ${({ theme }) => theme.PALETTE.primary};
		margin-top: 4px;

		@media ${({ theme }) => theme.DEVICE.pc} {
			font-size: 15px;
		}
		@media ${({ theme }) => theme.DEVICE.mobile} {
			margin: 0;
			padding: 2px;
			font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
		}
	}
`;

const MainLabel = styled.div`
	position: absolute;
	padding: 4px;
	font-weight: 500;
	font-size: ${({ theme }) => theme.FONT_SIZE.xxsmall};
	color: #fff;
	background-color: ${({ theme }) => theme.PALETTE.primary};

	@media ${({ theme }) => theme.DEVICE.mobile} {
		padding: 2px;
		font-size: ${({ theme }) => theme.FONT_SIZE.xxxsmall};
		bottom: 0;
	}
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

const Title = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.semimedium};
	font-weight: bold;
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: ${({ theme }) => theme.FONT_SIZE.xsmedium};
	}
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

	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 260px;
		height: 260px;
		margin: 30px 0;
	}

	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 200px;
		height: 200px;
		margin: 16px 0;
	}
`;

const RegisterLabel = styled.label`
	cursor: pointer;
	font-weight: bold;
	color: #9b99a9;
`;

const RegisterInput = styled.input`
	display: none;
`;

const RealImageBox = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 20px;
	margin: 20px 0;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		grid-gap: 16px;
	}

	@media ${({ theme }) => theme.DEVICE.mobile} {
		grid-gap: 8px;
	}
`;

const OneImage = styled.div`
	position: relative;
	width: 100%;
	aspect-ratio: 1;
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

	@media ${({ theme }) => theme.DEVICE.tablet} {
		padding: 0;
	}

	cursor: pointer;
	svg {
		color: #797979;
	}
`;

const S = {
	ImageDesc,
	ImageContainer,
	MainLabel,
	TopBox,
	EssentialDesc,
	Title,
	Essential,
	MainImg,
	RegisterLabel,
	RegisterInput,
	RealImageBox,
	OneImage,
	DeleteIcons,
};
