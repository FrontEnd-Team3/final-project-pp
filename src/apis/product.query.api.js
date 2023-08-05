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
	updateLikeStatus: (id, params) =>
		useMutateData(
			() => ProductApi.updateLikeStatus(params),
			[QueryKey.productDetail, id],
		),

	// 물품 등록
	addProduct: (product) => {
		useMutateData(
			() => ProductApi.addProduct(product),
			[QueryKey.productRegister],
		);
	},

	// 데이터 갱신
	updateProduct: (product, successFn, id) =>
		useMutateData(
			() => ProductApi.updateProduct(product),
			[QueryKey.productRegister, id],
			successFn,
		),

	// 데이터 수정 눌렀을 때 이전 데이터 조회
	// 추후 idx를 줄 예정
	getRegisterProduct: () =>
		useQueryData(
			[QueryKey.productRegister],
			ProductApi.getProductList,
			QueryConfig,
		),
};

export default ProductQueryApi;
