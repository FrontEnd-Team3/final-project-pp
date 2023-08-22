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
	deleteProduct: (id, successFn) =>
		useMutateData(
			() => ProductApi.deleteProduct(id),
			[QueryKey.productDetail, id],
			successFn,
		),
	updateProductStatus: (params, id, successFn) =>
		useMutateData(
			() => ProductApi.updateProductStatus(params),
			[QueryKey.productDetail, id],
			successFn,
		),
	updateLikeStatus: (id, params, successFn) =>
		useMutateData(
			() => ProductApi.updateLikeStatus(params),
			[QueryKey.productDetail, id],
			successFn,
		),
	getRecentlyViewedProducts: () =>
		useQueryData(
			[QueryKey.recentlyViewed],
			ProductApi.getRecentlyViewedProducts,
			QueryConfig,
		),
	addRecentlyViewedProducts: successFn =>
		useMutateData(
			() => ProductApi.addRecentlyViewedProducts,
			[QueryKey.recentlyViewed],
			successFn,
		),
	deleteRecentlyViewedProducts: successFn =>
		useMutateData(
			() => ProductApi.deleteRecentlyViewedProducts,
			[QueryKey.recentlyViewed],
			successFn,
		),
	// 물품 등록
	addProduct: product => {
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

	// 검색 결과
	searchProductList: (keyword, page, filter, status) =>
		useQueryData(
			[QueryKey.searchData, keyword, page, filter],
			() => ProductApi.searchProduct(keyword, page, filter, status),
			QueryConfig,
		),

	// 시세 검색
	searchMarketPriceList: (keyword, start, end) =>
		useQueryData([QueryKey.marketPrice, keyword, start, end], () =>
			ProductApi.searchPriceProduct(keyword, start, end),
		),

	// 중고물품
	getUsedProduct: (category, page, status) =>
		useQueryData(
			[QueryKey.usedProduct, page],
			() => ProductApi.getUsedProduct(category, page, status),
			QueryConfig,
		),
	// 무료나눔
	getFreeProduct: (category, page, status) =>
		useQueryData(
			[QueryKey.freeProduct, page],
			() => ProductApi.getFreeProduct(category, page, status),
			QueryConfig,
		),
};

export default ProductQueryApi;
