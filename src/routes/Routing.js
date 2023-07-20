import Layout from "components/Layout";
import Main from "pages/main";
import RegisterProduct from "pages/mypage/components/register-product/account-privacy";
import MyProfile from "pages/mypage/components/register-product/profile";
import ProductDetailPage from "pages/product-detail";
import ProductRegister from "pages/product-register";
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
				path: "/privacy",
				element: <RegisterProduct />,
			},
			{
				path: "/profile",
				element: <MyProfile />,
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
		],
	},
]);

export default router;
