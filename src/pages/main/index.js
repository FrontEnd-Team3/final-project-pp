import AlertMessage from "components/AlertMessege";
import ChatList from "components/Chat/chat-list";
import ConsumerChat from "components/Chat/consumer-chat";

const Main = () => {
	return (
		<>
			{/* <ProductList /> */}
			<AlertMessage />
			<ChatList />
			<ConsumerChat />
			{/* <RecentlyClicked /> */}
		</>
	);
};

export default Main;
