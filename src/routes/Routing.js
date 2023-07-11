import Layout from "components/Layout";
import Main from "pages/main";
import Signin from "pages/sign/components/sign-in";
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
		],
	},
]);

export default router;
