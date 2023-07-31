import useQueryData from "hooks/useQueryData";
import ProductApi from "./product.api";
import QueryConfig from "./queryConfig";

const ProductQueryApi = {
	getProductList: () =>
		useQueryData(["productData"], ProductApi.getProductList, QueryConfig),
	getProductDetail: id =>
		useQueryData(
			["productDetail", id],
			ProductApi.getProductDetail,
			id,
			QueryConfig,
		),
};

export default ProductQueryApi;
