import { axiosInstance } from "./core";
const PATH = "/api/user";

const AuthApi = {
	signup: async (email, pw, nickName, phone, region) => {
		try {
			const response = await axiosInstance.post(PATH, {
				email,
				pw,
				nickName,
				phone,
				region,
			});
			console.log("회원가입", response);
			if (response.status === 200) {
				console.log(" 회원가입 성공");
			} else {
				console.log(" 회원가입 실패 ");
			}
		} catch (error) {
			console.error(error);
		}
	},
	login: async (email, pw) => {
		return await axiosInstance.post(PATH + "/login", {
			email,
			pw,
		});
	},
	logout: async () => {
		return await axiosInstance.get(PATH + "/logout");
	},
};

export default AuthApi;
