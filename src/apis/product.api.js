import { productList } from "mock/productsList";
import { rest } from "msw";

export const getProducts = rest.get("/products", async (req, res, ctx) => {
	return res(ctx.status(200), ctx.json(productList));
});
