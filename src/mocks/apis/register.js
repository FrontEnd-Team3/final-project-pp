// 충돌 방지 위해 물품 등록, 수정 로직 파일 분리
// -> 추후 product.api.js로 추가 예정
import { rest } from "msw";

export const addProduct = rest.post("/api/product", async (req, res, ctx) => {
	let title;
	let price;
	let description;
	let region;
	let category;
	let ProductsTags;
	let ProductImages;

	await req.json().then(data => {
		title = data.title;
		price = data.price;
		description = data.description;
		region = data.region;
		category = data.category;
		ProductsTags = data.ProductsTags;
		ProductImages = data.ProductImages;
	});

	return res(
		ctx.status(200),
		ctx.json({
			idx: Math.floor(Math.random() * 100000),
			title,
			price,
			description,
			region,
			category,
			ProductsTags,
			ProductImages,
			created_at: new Date(),
			img_url: ProductImages[0],
			Liked: 0,
			status: "판매중",
			User: {},
			chat: [],
		}),
	);
});

export const updateProducts = rest.patch(
	"/api/product",
	async (req, res, ctx) => {
		let idx;
		let title;
		let price;
		let description;
		let category;
		let region;
		let ProductsTags;
		let img_url;
		let ProductImages;

		await req.json().then(data => {
			idx = data.idx;
			title = data.title;
			image = data.image;
			price = data.price;
			description = data.description;
			category = data.category;
			region = data.region;
			user = data.user;
			ProductsTags = data.ProductsTags;
			img_url = data.img_url;
			ProductImages = data.ProductImages;
		});

		return res(
			ctx.status(200),
			ctx.json({
				idx,
				title,
				price,
				description,
				category,
				region,
				ProductsTags,
				img_url,
				ProductImages,
			}),
		);
	},
);
