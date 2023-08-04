import QueryKey from "consts/queryKey";
import useQueryData from "hooks/useQueryData";
import AuthApi from "./auth.api";
import QueryConfig from "./queryConfig";

const UserQueryApi = {
	getUserInfo: () =>
		useQueryData([QueryKey.userData], AuthApi.userInfo, QueryConfig, {}),

	getUserdetail: () =>
		useQueryData(
			[QueryKey.userDetail],
			AuthApi.userMypageInfo,
			QueryConfig,
			{},
		),
};

export default UserQueryApi;
