import axios from "axios";

const PATH = "/api/product";

const ProductApi = {
	getProductList: async () => await axios.get(PATH),
	getProductDetail: async id =>
		await axios.get(PATH + `/detail?prod_idx=${id}`),
	deleteProduct: async id => await axios.delete(PATH + `?prod_idx=${id}`),
	updateProductStatus: async id =>
		await axios.post(PATH + `/sale-complete?prod_idx=${id}`),
	updateLikeStatus: async (id, params) =>
		await axios.post(PATH + `/like??prod_idx=${id}`, (params = { ...params })),
	updateProduct: async productData => await axios.post(PATH, productData),
};

export default ProductApi;
// 지금 등록 하시는 거죠?네네
