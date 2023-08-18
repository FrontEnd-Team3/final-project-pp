import Layout from "components/Layout";
import { Navigate } from "react-router-dom";
import TokenRepository from "repositories/TokenRepository";

const PrivateRouter = () => {
	const accessToken = TokenRepository.getToken();

	return accessToken ? <Layout /> : <Navigate to="/intro" />;
};

export default PrivateRouter;
