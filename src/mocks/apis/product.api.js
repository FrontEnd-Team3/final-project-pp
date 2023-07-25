import { productList } from "../data/productsList";
import { rest } from "msw";

export const getProducts = rest.get("/products", async (req, res, ctx) => {
	return res(ctx.status(200), ctx.json(productList));
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
