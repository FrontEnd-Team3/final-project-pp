import ButtonsForBuyer from "./forBuyer";
import ButtonsForSeller from "./forSeller";

const ButtonContainer = ({ isSeller, bookmark, chat, status }) => {
	if (isSeller) return <ButtonsForSeller chat={chat} status={status} />;
	return <ButtonsForBuyer bookmark={bookmark} />;
};

export default ButtonContainer;
