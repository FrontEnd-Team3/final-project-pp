import Layout from "components/Layout";
import LayoutwithoutHeader from "components/Layoutwithoutheader";
import Main from "pages/main";
import Mypage from "pages/mypage";
import RegisterProduct from "pages/mypage/components/register-product/account-privacy";
import MyProfile from "pages/mypage/components/register-product/profile";
import ProductDetailPage from "pages/product-detail";
import Signin from "pages/sign/components/sign-in";
import Signup from "pages/sign/components/sign-up";
import ProductRegister from "pages/product-register";
import SearchPage from "pages/search-page";
import FreeTransaction from "pages/transaction/free-transaction";
import UsedTransaction from "pages/transaction/used-transaction";
import { createBrowserRouter } from "react-router-dom";
import MarketPrice from "pages/market-price";
import Chat from "components/Chat";
import SignIn from "pages/sign/components/sign-in";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Main />,
			},
			{
				path: "/privacy",
				element: <RegisterProduct />,
			},
			{
				path: "/profile",
				element: <MyProfile />,
			},
			{
				path: "/Signin",
				element: <SignIn />,
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
				path: "/MarketPrice",
				element: <MarketPrice />,
			},
			{ path: "/productRegister", element: <ProductRegister /> },
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
				element: <Chat />,
			},
			{
				path: "/search",
				element: <SearchPage />,
			},
			{
				path: "/mypage",
				element: <Mypage />,
			},
		],
	},
	{
		element: <LayoutwithoutHeader />,
		children: [
			{
				path: "/Signin",
				element: <Signin />,
			},
			{
				path: "/Signup",
				element: <Signup />,
			},
		],
	},
]);

export default router;
