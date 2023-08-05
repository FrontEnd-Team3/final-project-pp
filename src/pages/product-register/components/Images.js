import styled from "styled-components";
import { flexCenter } from "styles/common";
import { AiFillCamera } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { TiDelete } from "react-icons/ti";
const Images = ({ onImageChange }) => {
	const fileInput = useRef(null); // ref로 input 태그 참조
	const [imageArr, setImageArr] = useState([]); // 이미지 담을 배열

	useEffect(() => {
		console.log(imageArr);
		onImageChange(imageArr);
	}, [imageArr]);

	// 이미지 상대 경로 저장
	const onChangeImage = e => {
		// console.log(e.target.files[0]);
		const files = e.target.files; // input에 file 선택, e.target.files 파일 선택목록 가져오는 로직, files에 저장

		// 각 파일의 URL을 배열로 만드는 작업
		const newImages = Array.from(files).map(imgFile => ({
			img_url: URL.createObjectURL(imgFile), // URL.createObjectURL 해당 파일 url 생성하는 메서드
		}));

		// 이미지 배열에 추가, 최대 5개까지 가능
		const updatedImages = [...imageArr, ...newImages].slice(0, 5);

		setImageArr(updatedImages);
		onImageChange(updatedImages);
	};

	// 개별 이미지 삭제 로직
	const onDeleteImage = id => {
		const _imageArr = imageArr.filter((_, idx) => idx !== id);
		setImageArr(_imageArr);
	};

	return (
		<>
			<div>
				<S.TitleAnother style={{ marginBottom: "20px" }}>
					상품 이미지 (0/5) <S.Essential>*</S.Essential>
				</S.TitleAnother>
				<S.MainImg>
					<AiFillCamera size={80} />
					<div>
						<S.RegisterLabel htmlFor="registerImg">이미지 등록</S.RegisterLabel>
						<S.RegisterInput
							ref={fileInput}
							onChange={onChangeImage}
							type="file"
							accept="image/*"
							multiple
							id="registerImg"
							// required
						/>
					</div>
				</S.MainImg>
			</div>
			<S.RealImageBox>
				{imageArr.map((imageUrl, i) => (
					<S.OneImage key={i} imageUrl={imageUrl.img_url}>
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
`;

const RegisterInput = styled.input`
	display: none;
`;

const RealImageBox = styled.div`
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
	TitleAnother,
	Essential,
	MainImg,
	RegisterLabel,
	RegisterInput,
	RealImageBox,
	OneImage,
	DeleteIcons,
};
