import styled from "styled-components";
import BookmarkBtn from "./bookmarkBtn";
import StartChatBtn from "./startChatBtn";

const ButtonsForBuyer = ({ bookmark, chat }) => {
	return (
		<>
			<ProductButtons>
				<BookmarkBtn bookmark={bookmark} />
				<StartChatBtn chat={chat} />
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
