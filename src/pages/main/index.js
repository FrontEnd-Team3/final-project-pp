import ChatList from "components/Chat/chat-list";
import Banner from "./components/banner/Banner";
import UsedProduct from "./components/used-product/UsedProduct";
import FreeProduct from "./components/free-product/FreeProduct";
import RecentlyClicked from "components/RecentlyClicked/RecentlyClicked";
import SearchPage from "pages/search-page";

const Main = () => {
	return (
		<>
			<Banner />
			<UsedProduct />
			<FreeProduct />
			<RecentlyClicked />
			<SearchPage />
			<ChatList />
		</>
	);
};

export default Main;
