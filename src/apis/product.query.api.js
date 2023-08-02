import useQueryData from "hooks/useQueryData";
import ProductApi from "./product.api";
import QueryConfig from "./queryConfig";
import useMutateData from "hooks/useMutateData";

const ProductQueryApi = {
	getProductList: () =>
		useQueryData(["productData"], ProductApi.getProductList, QueryConfig),
	getProductDetail: id =>
		useQueryData(
			["productDetail", id],
			ProductApi.getProductDetail,
			QueryConfig,
			id,
		),
	deleteProduct: id =>
		useMutateData(() => ProductApi.deleteProduct(id), ["productDetail", id]),
	updateProductStatus: id =>
		useMutateData(
			() => ProductApi.updateProductStatus(id),
			["productDetail", id],
		),
	updateLikeStatus: (id, params, successFn) =>
		useMutateData(
			() => ProductApi.updateLikeStatus(id, params),
			["productDetail", id],
			successFn,
		),
	updateProduct: productData =>
		useMutateData(() => ProductApi.updateProduct(productData), ["productData"]),
};

export default ProductQueryApi;
