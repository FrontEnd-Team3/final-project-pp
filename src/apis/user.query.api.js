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

	PurchasedProductList: ({ page, category }) =>
		useQueryData(
			[QueryKey.userPurchasedProduct, page, category],
			() => AuthApi.userPurchasedProduct({ page, category }),
			QueryConfig,
		),
	LikeProductList: ({ page }) =>
		useQueryData(
			[QueryKey.userLikeProduct, page],
			() => AuthApi.userLikeProduct({ page }),
			QueryConfig,
		),
	PayProductList: ({ page }) =>
		useQueryData(
			[QueryKey.PayProductList, page],
			() => AuthApi.userPayProduct({ page }),
			QueryConfig,
		),
	AccountBookList: ({ page, category, start, end }) =>
		useQueryData([QueryKey.AccountBookList, page, category, start, end], () =>
			AuthApi.userAccountBook({ page, category, start, end }),
		),
};
export default UserQueryApi;
