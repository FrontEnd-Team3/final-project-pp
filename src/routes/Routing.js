import Layout from "components/Layout";
import Main from "pages/main";
import MarketPrice from "pages/market-price";
import ProductDetailPage from "pages/product-detail";
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
				path: "/MarketPrice",
				element: <MarketPrice />,
			},
		],
	},
]);

export default router;
