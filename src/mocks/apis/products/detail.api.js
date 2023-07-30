import { productList } from "mocks/data/products/productsList";
import { rest } from "msw";

// 물품 판매 완료
export const updateProductStatus = rest.post(
	"/api/product/sale-complete",
	async (req, res, ctx) => {
		const prod_idx = req.url.searchParams.get("prod_idx");

		const newProductList = [...productList];
		const targetIdx = newProductList.findIndex(
			product => product.idx === parseInt(prod_idx),
		);
		newProductList[targetIdx].status = "판매완료";

		return res(
			ctx.status(200),
			ctx.json({ message: "판매 완료 되었습니당💰", data: newProductList }),
		);
	},
);

// 물품 삭제
export const deleteProducts = rest.delete(
	"/api/product?prod_idx={prod_idx}",
	async (req, res, ctx) => {
		const { prod_idx } = req.params;
		return res(
			ctx.status(200),
			ctx.json({
				message: "delete 성공",
			}),
		);
	},
);

// 상품 상세
export const getProductDetail = rest.get(
	"/api/product/detail",
	async (req, res, ctx) => {
		const prod_idx = req.url.searchParams.get("prod_idx");

		const TargetProduct = productList.find(
			product => product.idx === parseInt(prod_idx),
		);

		if (TargetProduct)
			return res(
				ctx.status(200),
				ctx.json({
					searchProducts: {
						idx: parseInt(prod_idx),
						title: TargetProduct.title,
						price: TargetProduct.price,
						description: TargetProduct.description,
						category: TargetProduct.category,
						img_url: TargetProduct.img_url,
						createdAt: TargetProduct.created_at,
						status: TargetProduct.status,
						region: TargetProduct.region,
						liked: TargetProduct.Liked,
						ProductImages: TargetProduct.ProductImages,
						ProductsTags: TargetProduct.ProductsTags,
						User: TargetProduct.User,
					},
					relatedProduct: TargetProduct.relatedProduct,
					isSeller: false,
					chat: TargetProduct.chat,
				}),
			);
	},
);

export const LikeProductStatusReturnBoolean = rest.post(
	"/api/product/like",
	async (req, res, ctx) => {
		// req로 전달한 상품 id
		let prod_idx;
		let message;
		await req.json().then(data => {
			prod_idx = data.prod_idx;
			message = data.isBookmarked;
		});

		// const LikeProductList = userList[1].likeProducts;
		// const message = LikeProductList.some(
		// 	product => product.idx === parseInt(prod_idx),
		// ); // true, false

		const newProductList = [...productList];
		const targetIdx = newProductList.findIndex(
			product => product.idx === parseInt(prod_idx),
		);

		if (targetIdx !== -1) {
			message
				? (newProductList[targetIdx].Liked -= 1)
				: (newProductList[targetIdx].Liked += 1);
		} else {
			return res(
				ctx.status(404),
				ctx.json({ message: "Product not found", data: null }),
			);
		}
		return res(
			ctx.status(200),
			ctx.json({
				message: !message,
				data: newProductList[targetIdx].Liked,
			}),
		);
	},
);
