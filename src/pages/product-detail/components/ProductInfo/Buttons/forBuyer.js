import styled from "styled-components";
import BasicButton from "components/Button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userList } from "mocks/data/user/userList";
import ProductApi from "apis/product.api";
import { useMutation, useQueryClient } from "react-query";
import bookmarkFill from "./bookmarkfull.png";
import bookmarkEmpty from "./bookmark.png";

const ButtonsForBuyer = ({ bookmark }) => {
	// 처음 화면이 열렸을 때 찜한 개수는 상품 상세 정보, 북마크 되었는지 아이콘 표시는 유저 정보에서 받아와야 함

	const [isBookmarked, setIsBookmarked] = useState(true);
	const [likedCount, setLikedCount] = useState(bookmark);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const bool = userList.some(product => product.idx === parseInt(id));
		setIsBookmarked(bool);
	}, []);

	// 실제 좋아요 값 반영되도록 수정 필요

	// const likeProduct = () => {
	// 	if (isBookmarked) {
	// 		ProductApi.updateLikeStatus(id, { prod_idx: id, isBookmarked }).then(
	// 			res => {
	// 				console.log("Like", res?.data);
	// 				setLikedCount(res?.data?.data);
	// 				setIsBookmarked(res?.data?.message);
	// 			},
	// 		);
	// 	} else {
	// 		ProductApi.updateLikeStatus(id, { prod_idx: id, isBookmarked }).then(
	// 			res => {
	// 				console.log("Like", res?.data);
	// 				setLikedCount(res?.data?.data);
	// 				setIsBookmarked(res?.data?.message);
	// 			},
	// 		);
	// 	}
	// };

	const queryClient = useQueryClient();
	const bookmarkData = useMutation(
		() => ProductApi.updateLikeStatus(id, { prod_idx: id, isBookmarked }),
		{
			onSuccess: res => {
				console.log("성공!", res.data?.message);
				setLikedCount(res?.data?.data);
				setIsBookmarked(res?.data?.message);
				queryClient.invalidateQueries(["productDetail", id]);
			},
			onError: () => {
				console.error("error");
			},
			onSettled: () => {
				console.log("뭔가 실행됨");
			},
		},
	);

	const likeProduct = () => {
		bookmarkData.mutate();
	};

	return (
		<>
			<S.ProductButtons>
				<BasicButton
					color={"gray"}
					size={"xxsmall"}
					children={
						<>
							{isBookmarked ? (
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
									{likedCount}
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
