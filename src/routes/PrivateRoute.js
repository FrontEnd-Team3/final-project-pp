import { Navigate, Outlet } from "react-router-dom";
import TokenRepository from "repositories/TokenRepository";

const PrivateRouter = () => {
	const accessToken = TokenRepository.getToken();

	return accessToken ? <Outlet /> : <Navigate to="/intro" />;
};

export default PrivateRouter;
