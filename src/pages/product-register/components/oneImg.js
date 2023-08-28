import styled from "styled-components";
import { TiDelete } from "react-icons/ti";

const OneImg = ({ img }) => {
	return (
		<S.OneImage>
			<S.DeleteIcons>
				<TiDelete size={20} />
			</S.DeleteIcons>
			<S.Image src={img.image} />
		</S.OneImage>
	);
};

export default OneImg;

const OneImage = styled.div`
	position: relative;
`;

const Image = styled.img`
	width: 196px;
	height: 196px;
	border: 1px solid #ddd;
`;

const DeleteIcons = styled.p`
	font-size: 13px;
	padding: 4px;
	text-align: center;
	position: absolute;
	top: 6px;
	right: 6px;
	color: ${({ theme }) => theme.PALETTE.white};
	cursor: pointer;
	svg {
		color: #797979;
	}
`;

const S = {
	OneImage,
	Image,
	DeleteIcons,
};
