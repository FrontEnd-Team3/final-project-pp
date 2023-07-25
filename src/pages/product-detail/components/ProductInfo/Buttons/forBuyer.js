import styled from "styled-components";
import BasicButton from "components/Button";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ButtonsForBuyer = ({ bookmark }) => {
	// 실제 좋아요 값 반영되도록 수정 필요
	const [isBookmarked, setIsBookmarked] = useState(false);
	const handleBookmark = () => {
		setIsBookmarked(prev => !prev);
	};

	const navigate = useNavigate();

	console.log(bookmark);

	return (
		<>
			<S.ProductButtons>
				<BasicButton
					color={"gray"}
					size={"xxsmall"}
					children={
						<>
							{isBookmarked ? (
								<GoBookmarkFill size="27" />
							) : (
								<GoBookmark size="27" />
							)}
							{
								<span style={{ fontSize: "27px", marginLeft: "5px" }}>
									{bookmark}
								</span>
							}
						</>
					}
					onClick={handleBookmark}
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

const S = { ProductButtons };
