import { productList } from "mocks/data/products/productsList";
import { rest } from "msw";

// 메인 상품 목록 조회
export const getProducts = rest.get("/api/product", async (req, res, ctx) => {
	// usedProduct
	const USED = productList.filter(product => !product.category);
	const usedProduct = USED.map(product => {
		return {
			idx: product.idx,
			title: product.title,
			price: product.price,
			img_url: product.img_url,
			created_at: product.created_at,
			Liked: product.liked,
			status: product.status,
			ProductImages: product.ProductImages,
			ProductsTags: product.ProductsTags,
		};
	});

	// freeProduct
	const FREE = productList.filter(product => product.category);
	const freeProduct = FREE.map(product => {
		return {
			idx: product.idx,
			title: product.title,
			price: product.price,
			img_url: product.img_url,
			created_at: product.created_at,
			Liked: product.liked,
			status: product.status,
			ProductImages: product.ProductImages,
			ProductsTags: product.ProductsTags,
		};
	});

	return res(
		ctx.status(200),
		ctx.json({
			region: "서울시 성동구 성수동",
			usedProduct,
			freeProduct,
		}),
	);
});
