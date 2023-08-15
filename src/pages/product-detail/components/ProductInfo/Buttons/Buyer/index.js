import styled from "styled-components";
import BookmarkBtn from "./bookmarkBtn";
import StartChatBtn from "./startChatBtn";
import BasicButton from "components/Button";

const ButtonsForBuyer = ({ bookmark, chat, status }) => {
	return (
		<>
			{status !== "판매완료" ? (
				<ProductButtons>
					<BookmarkBtn bookmark={bookmark} />
					<StartChatBtn chat={chat} />
				</ProductButtons>
			) : (
				<BasicButton
					size={"large"}
					children={"판매완료"}
					style={{
						fontSize: "20px",
						fontWeight: "bold",
						width: "432px",
						marginTop: "20px",
					}}
					disabled
				/>
			)}
		</>
	);
};

export default ButtonsForBuyer;

const ProductButtons = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 30px 0;
`;
