import { productList } from "mocks/data/products/productsList";
import { rest } from "msw";

// 물품 판매 완료
export const updateProductStatus = rest.patch(
	"/api/product/sale-complete",
	async (req, res, ctx) => {
		const { prod_idx } = req.params;
		let status;

		await req.json().then(data => {
			status = data.status;
			socket = "b46d1db6-5733-4726-a405-195b2f9a8c19";
		});

		return res(ctx.status(200), ctx.json({ id: parseInt(prod_idx), status }));
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
				id: parseInt(prod_idx),
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

// 관심 상품 등록
// 관심 상품 해제
