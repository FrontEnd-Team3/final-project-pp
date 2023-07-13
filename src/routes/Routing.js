import Layout from "components/Layout";
import Main from "pages/main";
import RegisterProduct from "pages/mypage/components/register-product/account-privacy";
import MyProfile from "pages/mypage/components/register-product/profile";
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
		],
	},
]);

export default router;
