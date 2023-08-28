import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useChatData } from "context/chatData.ctx";

const Layout = () => {
	const { socket } = useChatData();

	return (
		<>
			<Header socket={socket} />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
