import AlertMessage from "components/AlertMessege";
import ChatList from "components/Chat/chat-list";
import ConsumerChat from "components/Chat/consumer-chat";
import ProductList from "components/ProductList";
import RecentlyClicked from "components/RecentlyClicked/RecentlyClicked";

const Main = () => {
	return (
		<>
			<ProductList />
			<AlertMessage />
			<ChatList />
			<ConsumerChat />
			<RecentlyClicked />
		</>
	);
};

export default Main;
