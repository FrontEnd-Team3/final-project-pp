import ChatList from "components/Chat/chat-list";
import Layout from "components/Layout";
import Main from "pages/main";
import ProductDetailPage from "pages/product-detail";
import ProductRegister from "pages/product-register";
import SearchPage from "pages/search-page";
import Signin from "pages/sign/components/sign-in";
import Signup from "pages/sign/components/sign-up";
import FreeTransaction from "pages/transaction/free-transaction";
import UsedTransaction from "pages/transaction/used-transaction";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Main />,
			},
			{
				path: "/Signin",
				element: <Signin />,
			},
			{
				path: "/Signup",
				element: <Signup />,
			},
			{
				path: "/product/:id",
				element: <ProductDetailPage />,
			},
			{
				path: "/productRegister",
				element: <ProductRegister />,
			},
			{
				path: "/used-transaction",
				element: <UsedTransaction />,
			},
			{
				path: "/free-transaction",
				element: <FreeTransaction />,
			},
			{
				path: "/Chat",
				element: <ChatList />,
			},
			{
				path: "/search",
				element: <SearchPage />,
			},
		],
	},
]);

export default router;
