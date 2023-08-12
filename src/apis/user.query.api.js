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
	getUserProductInfo: () =>
		useQueryData(
			[QueryKey.userProductData],
			AuthApi.userProductInfo,
			QueryConfig,
			{},
		),
	searchProductList: (page, category) =>
		useQueryData(
			[QueryKey.userPurchasedProduct, category, page],
			() => AuthApi.userPurchasedProduct(page, category),
			QueryConfig,
		),
};

export default UserQueryApi;
