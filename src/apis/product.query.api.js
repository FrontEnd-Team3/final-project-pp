import useQueryData from "hooks/useQueryData";
import ProductApi from "./product.api";

const ProductQueryApi = {
	getProductList: () =>
		useQueryData(["productData"], ProductApi.getProductList),
	getProductDetail: id =>
		useQueryData(["productDetail", id], ProductApi.getProductDetail, id),
};

export default ProductQueryApi;
