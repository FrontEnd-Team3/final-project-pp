import BasicButton from "components/Button";
import bookmarkFill from "../@images/bookmarkfull.png";
import bookmarkEmpty from "../@images/bookmark.png";
import styled from "styled-components";
import { useState } from "react";
import ProductQueryApi from "apis/product.query.api";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import QueryKey from "consts/queryKey";

const BookmarkBtn = ({ bookmark }) => {
	const { id } = useParams();
	const [isBookmarked, setIsBookmarked] = useState(false);

	const queryClient = useQueryClient();
	const bookmarkData = ProductQueryApi.updateLikeStatus(
		id,
		{
			prod_idx: parseInt(id),
		},
		() => queryClient.invalidateQueries([QueryKey.productData]),
	);

	const likeProduct = () => {
		bookmarkData
			.mutateAsync()
			.then(res => {
				console.log("like", res);
				setIsBookmarked(res.data.message);
			})
			.catch(err => console.error(err));
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
