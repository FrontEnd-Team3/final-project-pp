import Layout from "components/Layout";
import Main from "pages/main";
import ProductDetailPage from "pages/product-detail";
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
				path: "/product/:id",
				element: <ProductDetailPage />,
			},
		],
	},
]);

export default router;
