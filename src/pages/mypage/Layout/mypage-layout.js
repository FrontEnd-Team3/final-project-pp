import { Outlet } from "react-router-dom";
import Mypage from "..";

const MypageLayout = () => {
	return (
		<>
			<Mypage />
			<Outlet />
		</>
	);
};

export default MypageLayout;
