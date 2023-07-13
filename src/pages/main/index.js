import RecentlyClicked from "components/RecentlyClicked/RecentlyClicked";
import FreeProduct from "./components/free-product/FreeProduct";
import UsedProduct from "./components/used-product/UsedProduct";
import Banner from "./components/banner/Banner";

const Main = () => {
	return (
		<>
			<Banner />
			<UsedProduct />
			<FreeProduct />
			<RecentlyClicked />
		</>
	);
};

export default Main;
