import { rest } from "msw";
export const handlers = [
	rest.get("/users", async (req, res, ctx) => {
		return res(ctx.json());
	}),
];
