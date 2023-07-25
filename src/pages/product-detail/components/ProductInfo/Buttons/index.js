import ButtonsForBuyer from "./forBuyer";
import ButtonsForSeller from "./forSeller";

const ButtonContainer = ({ isSeller, bookmark }) => {
	// 현재 찜하기 개수에 대한 props drilling이 발생하고 있는데 어떻게 해결할 수 있을지 고민해볼 것
	if (isSeller) return <ButtonsForSeller />;
	return <ButtonsForBuyer bookmark={bookmark} />;
};

export default ButtonContainer;
