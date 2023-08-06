import styled from "styled-components";
import BasicButton from "components/Button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import bookmarkFill from "./bookmarkfull.png";
import bookmarkEmpty from "./bookmark.png";
import ProductQueryApi from "apis/product.query.api";
import getUserData from "utils/getUserData";
import ChatApi from "apis/chat.api";

const BOOKMARK_KEY = "bookmarkedProducts";

const ButtonsForBuyer = ({ bookmark, chat }) => {
	const [isBookmarked, setIsBookmarked] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();
	const { refetch } = ProductQueryApi.getProductDetail(id);

	const DATA = getUserData();
	let nick_name;
	if (DATA) nick_name = DATA.nick_name;

	useEffect(() => {
		// Check if the product is bookmarked in local storage on component mount
		const bookmarkedProducts =
			JSON.parse(localStorage.getItem(BOOKMARK_KEY)) || [];
		setIsBookmarked(bookmarkedProducts.includes(id));
	}, [id]);

	const successFn = res => {
		setIsBookmarked(res?.data?.message);
		refetch();
	};

	const bookmarkData = ProductQueryApi.updateLikeStatus(id, {
		prod_idx: parseInt(id),
	});

	const likeProduct = async () => {
		try {
			const res = await bookmarkData.mutateAsync();
			// console.log("Wish", res);
			successFn(res);
			const bookmarkedProducts =
				JSON.parse(localStorage.getItem(BOOKMARK_KEY)) || [];
			if (isBookmarked) {
				localStorage.setItem(
					BOOKMARK_KEY,
					JSON.stringify(
						bookmarkedProducts.filter(productId => productId !== id),
					),
				);
			} else {
				localStorage.setItem(
					BOOKMARK_KEY,
					JSON.stringify([...bookmarkedProducts, id]),
				);
			}
		} catch (error) {
			console.error("Save Error:", error);
		}
	};

	const startChat = () => {
		const bool = chat.some(el => {
			console.log("닉네임", el.User.nick_name, nick_name);
			return el.User.nick_name !== nick_name;
		});
		console.log("chatlength", chat.length);
		console.log("bool", bool);
		if (!chat.length && !bool) {
			console.log("hi");
			try {
				ChatApi.createChatRoom(parseInt(id)).then(res => {
					console.log("start", res);
					ChatApi.saveMessages({
						room_idx: res.data?.idx,
						message: "너 나한테 물건을 팔아라!",
					});
				});
			} catch (err) {
				console.error("error", err);
			}
		}
		navigate("/Chat");
	};

	return (
		<>
			<ProductButtons>
				<BasicButton
					color={"gray"}
					size={"xxsmall"}
					children={
						<>
							{isBookmarked ? (
								<BookmarkIcon src={bookmarkFill} />
							) : (
								<BookmarkIcon src={bookmarkEmpty} />
							)}
							<span
								style={{
									fontSize: "25px",
									marginLeft: "5px",
									fontWeight: "bold",
								}}
							>
								{bookmark}
							</span>
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
					onClick={startChat}
				/>
			</ProductButtons>
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
