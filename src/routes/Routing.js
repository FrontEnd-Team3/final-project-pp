import Layout from "components/Layout";
import Main from "pages/main";
import ProductDetailPage from "pages/product-detail";
import ProductRegister from "pages/product-register";
import Signin from "pages/sign/components/sign-in";
import Signup from "pages/sign/components/sign-up";
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
		],
	},
]);

export default router;
