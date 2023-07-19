import { setupWorker } from "msw";
import * as productApi from "../apis/product.api";
import * as chatApi from "../apis/chat.api.js";
import * as userApi from "../apis/user.api.js";

const handlers = [
	...Object.values(productApi),
	...Object.values(chatApi),
	...Object.values(userApi),
];
export const worker = setupWorker(...handlers);
