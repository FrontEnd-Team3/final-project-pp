import AlertMessage from "components/AlertMessege";
import ChatList from "components/Chat/chat-list";
import ConsumerChat from "components/Chat/consumer-chat";
import SellerChat from "components/Chat/seller-chat";

const Main = () => {
	return (
		<>
			{/* <ProductList /> */}
			<AlertMessage />
			<ChatList />
			<ConsumerChat />
			<SellerChat />
			{/* <RecentlyClicked /> */}
		</>
	);
};

export default Main;
