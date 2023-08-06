import { createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout";
import Main from "pages/main";
import MakeScrollToTop from "components/MakeScrollToTop";
import SignIn from "pages/sign/sign-in";
import Signup from "pages/sign/sign-up";
import ProductDetailPage from "pages/product-detail";
import MarketPrice from "pages/market-price";
import ProductRegister from "pages/product-register";
import UsedTransaction from "pages/transaction/used-transaction";
import FreeTransaction from "pages/transaction/free-transaction";
import Chat from "components/Chat";
import SearchPage from "pages/search-page";
import MypageLayout from "pages/my-page/layout/mypage-layout";
import RegisterProduct from "pages/my-page/components/RegisterProducts";
import HouseKeeping from "pages/my-page/components/HousekeepingBook";
import PurchasedItem from "pages/my-page/components/PurchasedItem";
import InterestProduct from "pages/my-page/components/InterestProduct";
import Review from "pages/my-page/components/Review";
import AccountManagement from "pages/account-management";

const router = createBrowserRouter([
	{
		element: (
			<>
				<Layout />
				<MakeScrollToTop />
			</>
		),
		children: [
			{
				path: "/",
				element: <Main />,
			},
			{
				path: "/account",
				element: <AccountManagement />,
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
