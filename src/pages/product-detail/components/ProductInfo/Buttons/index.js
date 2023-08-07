import ButtonsForBuyer from "./Buyer";
import ButtonsForSeller from "./Seller";

const ButtonContainer = ({ isSeller, bookmark, chat, status }) => {
	if (isSeller) return <ButtonsForSeller chat={chat} status={status} />;
	return <ButtonsForBuyer bookmark={bookmark} chat={chat} />;
};

export default ButtonContainer;
