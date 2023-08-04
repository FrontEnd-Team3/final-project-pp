import styled from "styled-components";
import BasicButton from "components/Button";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import bookmarkFill from "./bookmarkfull.png";
import bookmarkEmpty from "./bookmark.png";
import ProductQueryApi from "apis/product.query.api";

const ButtonsForBuyer = ({ bookmark }) => {
	// 처음 화면이 열렸을 때 찜한 개수는 상품 상세 정보, 북마크 되었는지 아이콘 표시는 유저 정보에서 받아와야 함

	const isBookmarked = useRef(false);
	const { id } = useParams();
	const navigate = useNavigate();

	const { refetch } = ProductQueryApi.getProductDetail(id);
	const successFn = res => {
		isBookmarked.current = res?.data?.message;
		refetch();
	};

	const bookmarkData = ProductQueryApi.updateLikeStatus(id, {
		prod_idx: parseInt(id),
	});

	const likeProduct = async () => {
		try {
			const res = await bookmarkData.mutateAsync();
			console.log("찜하기", res);
			successFn(res);
		} catch (error) {
			console.error("찜하기 오류:", error);
		}
	};

	return (
		<>
			<S.ProductButtons>
				<BasicButton
					color={"gray"}
					size={"xxsmall"}
					children={
						<>
							{isBookmarked.current ? (
								<S.BookmarkIcon src={bookmarkFill} />
							) : (
								<S.BookmarkIcon src={bookmarkEmpty} />
							)}
							{
								<span
									style={{
										fontSize: "25px",
										marginLeft: "5px",
										fontWeight: "bold",
									}}
								>
									{bookmark}
								</span>
							}
						</>
					}
					onClick={() => {
						likeProduct();
					}}
					style={{ display: "flex", alignItems: "center", padding: "0 22px" }}
				/>
				<BasicButton
					color={"black"}
					size={"mediumThird"}
					children={"채팅하기"}
					style={{
						fontSize: "22px",
						letterSpacing: "5px",
						height: "50px",
						fontWeight: "bold",
					}}
					onClick={() => navigate("/Chat")}
				/>
			</S.ProductButtons>
		</>
	);
};

export default ButtonsForBuyer;

const ProductButtons = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 30px 0;
`;

const BookmarkIcon = styled.img`
	width: 20px;
	height: 20px;
`;

const S = { ProductButtons, BookmarkIcon };
