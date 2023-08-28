import BasicButton from "components/Button";
import styled from "styled-components";
import { useState } from "react";
import ProductQueryApi from "apis/product.query.api";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import QueryKey from "consts/queryKey";
import { RxBookmarkFilled, RxBookmark } from "react-icons/rx";

const BookmarkBtn = ({ bookmark }) => {
	const { id } = useParams();
	const [isBookmarked, setIsBookmarked] = useState(!!bookmark);

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
				setIsBookmarked(res.data.message);
			})
			.catch(err => console.error(err));
	};

	return (
		<BasicButton
			color={"gray"}
			size={"bookmark"}
			children={
				<>
					{isBookmarked ? (
						<RxBookmarkFilled size={24} style={{ color: "#333" }} />
					) : (
						<RxBookmark size={24} style={{ color: "#333" }} />
					)}
				</>
			}
			onClick={() => {
				likeProduct();
			}}
			style={{
				display: "flex",
				alignItems: "center",
				padding: "0 22px",
				justifyContent: "center",
			}}
		/>
	);
};

export default BookmarkBtn;

const BookmarkIcon = styled.img`
	width: 20px;
	height: 20px;
`;

const S = { BookmarkIcon };
