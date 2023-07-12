import Layout from "components/Layout";
import Main from "pages/main";
import ProductRegister from "pages/product-register";
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
				path: "/productRegister",
				element: <ProductRegister />,
			},
		],
	},
]);

export default router;
