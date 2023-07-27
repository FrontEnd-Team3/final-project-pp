import { productList } from "mocks/data/products/productsList";
import { rest } from "msw";

// 메인 상품 목록 조회
export const getProducts = rest.get("/product", async (req, res, ctx) => {
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

export const addProduct = rest.post("/products", async (req, res, ctx) => {
	let name;
	let date;
	let image;
	let location;
	let price;
	let category;
	let introduction;
	let user;
	let tags;

	await req.json().then(data => {
		name = data.name;
		date = data.date;
		image = data.image;
		location = data.location;
		category = data.category;
		price = data.price;
		introduction = data.introduction;
		user = data.user;
		tags = data.tags;
	});

	return res(
		ctx.status(200),
		ctx.json({
			id: Math.floor(Math.random() * 100000),
			name,
			date,
			image,
			location,
			category,
			price,
			introduction,
			user,
			bookmarkCount: 0,
			status: "판매중",
			chat: [],
			tags,
		}),
	);
});

// 물품 수정
export const updateProducts = rest.put(
	"/products/:id",
	async (req, res, ctx) => {
		const { id } = req.params;
		let name;
		let date;
		let image;
		let location;
		let price;
		let category;
		let introduction;
		let user;
		let tags;
		let bookmarkCount;
		let status;
		let chat;

		await req.json().then(data => {
			name = data.name;
			date = data.date;
			image = data.image;
			location = data.location;
			price = data.price;
			category = data.category;
			introduction = data.introduction;
			user = data.user;
			tags = data.tags;
			bookmarkCount = data.bookmarkCount;
			status = data.status;
			chat = data.chat;
		});

		return res(
			ctx.status(200),
			ctx.json({
				id: parseInt(id),
				name,
				date,
				image,
				location,
				category,
				price,
				introduction,
				user,
				bookmarkCount,
				status,
				chat,
				tags,
			}),
		);
	},
);

// 물품 판매 완료
export const updateProductStatus = rest.patch(
	"/products/:id",
	async (req, res, ctx) => {
		const { id } = req.params;
		let status;

		await req.json().then(data => {
			status = data.status;
		});

		return res(ctx.status(200), ctx.json({ id: parseInt(id), status }));
	},
);

// 물품 삭제
export const deleteProducts = rest.delete(
	"/products/:id",
	async (req, res, ctx) => {
		const { id } = req.params;
		return res(
			ctx.status(200),
			ctx.json({
				id: parseInt(id),
			}),
		);
	},
);

// 상품 상세
// 관심 상품 등록
// 관심 상품 해제

// 최근 본 상품 목록 조회
// 최근 본 상품 추가
// 최근 본 상품 삭제
