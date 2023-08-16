import { axiosInstance } from "./core";

const PATH = "/api/product";

const ProductApi = {
	// 메인 물품 목록 조회
	getProductList: async () => await axiosInstance.get(PATH),
	// 물품 상세 조회
	getProductDetail: async id =>
		await axiosInstance.get(PATH + `/detail?prod_idx=${id}`),
	// 물품 삭제
	deleteProduct: async id =>
		await axiosInstance.delete(PATH + `?prod_idx=${id}`),
	// 물품 판매 완료
	updateProductStatus: async params =>
		await axiosInstance.post(PATH + `/sale-complete`, (params = { ...params })),
	// 관심상품 등록/해제
	updateLikeStatus: async params =>
		await axiosInstance.post(PATH + `/like`, (params = { ...params })),
	// 최근 본 상품 조회
	getRecentlyViewedProducts: async () =>
		await axiosInstance.get(PATH + "/viewed-list"),
	// 최근 본 상품 추가
	addRecentlyViewedProducts: async params =>
		await axiosInstance.post(PATH + "/viewed-list", (params = { ...params })),
	// 최근 본 상품 삭제
	deleteRecentlyViewedProducts: async prod_idx =>
		await axiosInstance.delete(PATH + `/viewed-list?prod_idx=${prod_idx}`),
	// 물품 추가
	addProduct: async productData =>
		await axiosInstance.post(PATH, productData, {
			headers: { "Content-Type": "multipart/form-data" },
		}),
	// 물품 수정
	updateProduct: async productData =>
		await axiosInstance.patch(PATH, productData, {
			headers: { "Content-Type": "multipart/form-data" },
		}),

	// 물품 검색
	searchProduct: async ({ keyword, page, filter = "등록순" }) =>
		await axiosInstance.get(PATH + `/search`, {
			params: { keyword, page, filter },
		}),

	// 물품 시세 검색
	searchPriceProduct: async ({ keyword, start, end }) =>
		await axiosInstance.get(PATH + `/quote`, {
			params: { keyword, start, end },
		}),
};

export default ProductApi;
