import Layout from "components/Layout";
import Main from "pages/main";
import RegisterProduct from "../pages/mypage/components/register-product/index";
import MyProfile from "pages/mypage/components/register-product/profile";
import ProductDetailPage from "pages/product-detail";
import Signup from "pages/sign/components/sign-up";
import ProductRegister from "pages/product-register";
import SearchPage from "pages/search-page";
import FreeTransaction from "pages/transaction/free-transaction";
import UsedTransaction from "pages/transaction/used-transaction";
import { createBrowserRouter } from "react-router-dom";
import MarketPrice from "pages/market-price";
import Chat from "components/Chat";
import SignIn from "pages/sign/components/sign-in";
import HouseKeeping from "pages/mypage/components/housekeeping-book";
import PurchasedItem from "../pages/mypage/components/purchased-item/index";
import InterestProduct from "../pages/mypage/components/interest-product/index";
import MypageLayout from "pages/mypage/Layout/mypage-layout";
import AccountPrivacy from "pages/mypage/components/register-product/account-privacy";
import Review from "pages/mypage/components/review";

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
				element: <AccountPrivacy />,
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
				element: <MypageLayout />,
				children: [
					{
						path: "",
						element: <RegisterProduct />,
					},
					{
						path: "house-keeping",
						element: <HouseKeeping />,
					},
					{
						path: "purchased-item",
						element: <PurchasedItem />,
					},
					{
						path: "interest-product",
						element: <InterestProduct />,
					},
					{
						path: "review",
						element: <Review />,
					},
				],
			},
		],
	},
]);

export default router;
