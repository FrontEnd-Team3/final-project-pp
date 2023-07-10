import Layout from "components/Layout";
import Main from "pages/main";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Main />,
			},
		],
	},
]);

export default router;
