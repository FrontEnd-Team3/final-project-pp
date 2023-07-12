import ProductList from "components/ProductList";
import RecentlyClicked from "components/RecentlyClicked/RecentlyClicked";
import { productList } from "mock/products";

const Main = () => {
	return (
		<>
			<ProductList productList={productList} />
			{/* <AlertMessage />
			<ChatList />
			<ConsumerChat /> */}
			<RecentlyClicked />
		</>
	);
};

export default Main;
