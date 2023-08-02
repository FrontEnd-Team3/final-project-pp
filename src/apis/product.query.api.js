import useQueryData from "hooks/useQueryData";
import ProductApi from "./product.api";
import QueryConfig from "./queryConfig";
import useMutateData from "hooks/useMutateData";
import QueryKey from "consts/queryKey";

const ProductQueryApi = {
	getProductList: () =>
		useQueryData(
			[QueryKey.productData],
			ProductApi.getProductList,
			QueryConfig,
			{},
		),
	getProductDetail: id =>
		useQueryData(
			[QueryKey.productDetail, id],
			ProductApi.getProductDetail,
			QueryConfig,
			id,
		),
	deleteProduct: id =>
		useMutateData(
			() => ProductApi.deleteProduct(id),
			[QueryKey.productDetail, id],
		),
	updateProductStatus: id =>
		useMutateData(
			() => ProductApi.updateProductStatus(id),
			[QueryKey.productDetail, id],
		),
	updateLikeStatus: (id, params, successFn) =>
		useMutateData(
			() => ProductApi.updateLikeStatus(id, params),
			[QueryKey.productDetail, id],
			successFn,
		),
	updateProduct: successFn =>
		useMutateData(
			() => ProductApi.updateProduct,
			[QueryKey.productRegister],
			successFn,
		),
};

export default ProductQueryApi;
