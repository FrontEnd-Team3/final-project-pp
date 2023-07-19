import BasicButton from "components/Button";
import styled from "styled-components";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import { useState } from "react";

const ButtonContainer = () => {
	const [isBookmarked, setIsBookmarked] = useState(false);
	const handleBookmark = () => {
		setIsBookmarked(prev => !prev);
	};
	return (
		<>
			<S.ProductButtons>
				<BasicButton
					variant={"gray"}
					size={"xxsmall"}
					children={
						isBookmarked ? (
							<GoBookmarkFill size="27" />
						) : (
							<GoBookmark size="27" />
						)
					}
					onClick={handleBookmark}
				/>
				<BasicButton
					variant={"black"}
					size={"mediumThird"}
					children={"채팅하기"}
					style={{
						fontSize: "22px",
						letterSpacing: "5px",
						height: "50px",
					}}
				/>
			</S.ProductButtons>
		</>
	);
};

export default ButtonContainer;

const ProductButtons = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 30px 0;
`;

const S = { ProductButtons };
