import BasicButton from "components/Button";
import bookmarkFill from "../@images/bookmarkfull.png";
import bookmarkEmpty from "../@images/bookmark.png";
import styled from "styled-components";
import { useEffect, useState } from "react";
import ProductQueryApi from "apis/product.query.api";
import { useParams } from "react-router-dom";
const BOOKMARK_KEY = "bookmarkedProducts";

const BookmarkBtn = ({ bookmark }) => {
	const { id } = useParams();
	const [isBookmarked, setIsBookmarked] = useState(false);
	const { refetch } = ProductQueryApi.getProductDetail(id);

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

	return (
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
	);
};

export default BookmarkBtn;

const BookmarkIcon = styled.img`
	width: 20px;
	height: 20px;
`;

const S = { BookmarkIcon };
