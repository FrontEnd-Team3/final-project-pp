import ButtonsForBuyer from "./Buyer";
import ButtonsForSeller from "./Seller";

const ButtonContainer = ({ isSeller, bookmark, status, chat }) => {
	if (isSeller) return <ButtonsForSeller status={status} chat={chat} />;
	return <ButtonsForBuyer bookmark={bookmark} chat={chat} status={status} />;
};

export default ButtonContainer;
