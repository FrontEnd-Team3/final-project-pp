import { useState } from "react";
import styled from "styled-components";
import { primaryFont } from "styles/common";
import { PiHeartDuotone, PiHeartLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const OneProduct = ({ product }) => {
	// console.log(product);
	const localPrice = product.price.toLocaleString("ko-KR");
	const ImageURL = product.image[0];

	// 하트 넣기
	const [isLiked, setIsLiked] = useState(false);

	// 상품 상세 페이지로 이동
	const navigate = useNavigate();
	const HandlePageMove = () => {
		navigate(`/product/${product.id}`);
	};
	return (
		<S.Container onClick={HandlePageMove}>
			<div>
				<S.Heart>
					{isLiked ? (
						<PiHeartDuotone
							color="red"
							size="20"
							onClick={() => setIsLiked(false)}
						/>
					) : (
						<PiHeartLight
							color="red"
							size="20"
							onClick={() => setIsLiked(true)}
						/>
					)}
				</S.Heart>
				<S.Image src={ImageURL}></S.Image>
			</div>
			<S.ProductInfo>
				<div className="infoTop">
					<p className="name">{product.name}</p>
				</div>
				<div className="infoMedium">
					<p className="location">{product.location}</p>
				</div>
				<div className="infoBottom">
					<p className="price">{localPrice} 원</p>
					<p className="date">{product.date}</p>
				</div>
			</S.ProductInfo>
		</S.Container>
	);
};

export default OneProduct;

const Container = styled.div`
	width: 194px;
	height: 270px;
	border-radius: 12px;
	border: 3px solid;
	border-color: ${({ theme }) => theme.PALETTE.black};
	${primaryFont}
	position: relative;
`;

const Heart = styled.p`
	position: absolute;
	top: 20px;
	left: 150px;
`;

const Image = styled.img`
	width: 170px;
	height: 180px;
	border-radius: 12px;
	border: 3px solid;
	background-color: ${({ theme }) => theme.PALETTE.white};
	margin: 10px 10px 7px 10px;
`;

const ProductInfo = styled.div`
	margin: 0 11px;
	.infoTop {
		display: flex;
		justify-content: space-between;
		.name {
			font-size: 14px;
			font-weight: 700;
			width: 140px;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
		.date {
			font-size: 10px;
		}
	}
	.infoMedium {
		margin-top: 10px;
		display: flex;
		font-size: 10px;
	}
	.infoBottom {
		margin-top: 10px;
		display: flex;
		font-size: 10px;
		justify-content: space-between;
		.location {
			margin-right: 5px;
		}
	}
`;

const S = { Container, Heart, Image, ProductInfo };
