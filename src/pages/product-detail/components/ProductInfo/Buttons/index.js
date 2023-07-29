import ButtonsForBuyer from "./forBuyer";
import ButtonsForSeller from "./forSeller";

const ButtonContainer = ({ isSeller, bookmark, chat }) => {
	if (isSeller) return <ButtonsForSeller chat={chat} />;
	return <ButtonsForBuyer bookmark={bookmark} />;
};

export default ButtonContainer;
