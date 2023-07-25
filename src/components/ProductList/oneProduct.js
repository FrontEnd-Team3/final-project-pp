import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GoBookmark } from "react-icons/go";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const OneProduct = ({ product, grid }) => {
	// console.log(product);
	const localPrice = product.price?.toLocaleString("ko-KR");
	const ImageURL = product.image[0];

	// 날짜 구하는 로직
	const Today = new Date("2023-07-22");
	console.log("today", Today.getDate());

	// 상품 상세 페이지로 이동
	const navigate = useNavigate();
	const HandlePageMove = () => {
		navigate(`/product/${product.id}`);
	};
	return (
		<S.Container onClick={HandlePageMove} className={grid}>
			<div>
				<S.Image src={ImageURL}></S.Image>
			</div>
			<S.ProductInfo status={product.status}>
				<div className="infoTop">
					<p className="name">
						{product.name}&nbsp;&nbsp;
						<span className="status">{product.status}</span>
					</p>
				</div>
				<div className="infoMiddle">
					<p className="location">{product.location}</p>
					<p className="icons">
						<GoBookmark size="16" />
						{product.bookmarkCount}
						<HiOutlineChatBubbleLeftRight
							size="16"
							style={{ marginLeft: "10px" }}
						/>
						{product.chat.length}
					</p>
				</div>
				<div className="infoBottom">
					<p className="price">{localPrice} 원</p>
					<p className="date">1일 전</p> {/* new Date 관련 로직 만든 후 수정 */}
				</div>
			</S.ProductInfo>
		</S.Container>
	);
};

export default OneProduct;

const Container = styled.div`
	cursor: pointer;
	margin-bottom: 20px;
	position: relative;
	.box1 {
		grid-area: 1 / 1 / 2 / 2;
	}
	.box2 {
		grid-area: 1 / 2 / 2 / 3;
	}
	.box3 {
		grid-area: 1 / 3 / 2 / 4;
	}
	.box4 {
		grid-area: 1 / 4 / 2 / 5;
	}
	.box5 {
		grid-area: 2 / 1 / 3 / 2;
	}
	.box6 {
		grid-area: 2 / 2 / 3 / 3;
	}
	.box7 {
		grid-area: 2 / 3 / 3 / 4;
	}
	.box8 {
		grid-area: 2 / 4 / 3 / 5;
	}
`;

const Image = styled.img`
	width: 250px;
	height: 250px;
	border-radius: 4px;
`;

const ProductInfo = styled.div`
	width: 250px;
	.infoTop {
		.name {
			font-size: 16px;
			font-weight: 700;
			width: 250px;
			height: 40px;
			margin-top: 4px;
			span {
				display: inline-block;
				border-radius: 2px;
				background-color: ${({ theme, status }) => {
					if (status === "판매완료") return theme.PALETTE.gray;
					return theme.PALETTE.primary;
				}};
				font-size: 12px;
				font-weight: 500;
				color: ${({ theme }) => theme.PALETTE.white};
				padding: 5px 10px;
			}
		}
	}
	.infoMiddle {
		margin-top: 28px;
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		.location {
			margin-right: 5px;
			color: #788394;
		}
		.icons {
			display: inline-block;
			vertical-align: middle;
			svg {
				vertical-align: middle;
			}
		}
	}
	.infoBottom {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		.price {
			font-size: 16px;
			font-weight: 600;
		}
		.date {
			font-size: 12px;
		}
	}
`;

const S = { Container, Image, ProductInfo };
