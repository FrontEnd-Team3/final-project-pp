import styled from "styled-components";

const OneImg = ({ img }) => {
	console.log(img.image);
	return (
		<S.OneImage>
			<S.DeleteIcons>X</S.DeleteIcons>
			<S.Image src={img.image} />
		</S.OneImage>
	);
};

export default OneImg;

const OneImage = styled.div`
	position: relative;
`;

const Image = styled.img`
	width: 160px;
	height: 160px;
`;

const DeleteIcons = styled.p`
	font-size: 13px;
	padding: 2px 0px 1px 1px;
	text-align: center;
	background-color: #797979;
	border-radius: 50%;
	width: 16px;
	height: 16px;
	position: absolute;
	top: 6px;
	right: 6px;
	color: ${({ theme }) => theme.PALETTE.white};
	cursor: pointer;
`;

const S = {
	OneImage,
	Image,
	DeleteIcons,
};
