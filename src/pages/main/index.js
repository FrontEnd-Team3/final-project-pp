import ProductList from "components/ProductList";
import RecentlyClicked from "components/RecentlyClicked/RecentlyClicked";

const Main = () => {
	return (
		<>
			<ProductList />
			{/* <AlertMessage />
			<ChatList />
			<ConsumerChat /> */}
			<RecentlyClicked />
		</>
	);
};

export default Main;
