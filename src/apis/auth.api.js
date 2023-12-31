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
			return response;
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
	nickNameDoubleCheck: async nickname => {
		return await axiosInstance.get(
			`${PATH}/check/nickname?nickname=${nickname}`,
		);
	},
	emailDoubleCheck: async email => {
		return await axiosInstance.get(`${PATH}/check/email?email=${email}`);
	},
	userInfo: async () => {
		return await axiosInstance.get(`${PATH}/info`);
	},
	userMypageInfo: async () => {
		return await axiosInstance.get(`${PATH}/my-page`);
	},
	userProductInfo: async (page, category) => {
		return await axiosInstance.get(`${PATH}/my-page/product-list`);
	},

	userProfileImage: async image => {
		try {
			// 'Content-Type' 헤더를 별도로 추가해야 함
			const config = {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			};

			// FormData 객체 생성 및 이미지 추가
			const formData = new FormData();
			formData.append("image", image);

			// PATCH 요청을 사용하여 프로필 이미지 업데이트
			const response = await axiosInstance.patch(
				"/api/user/profile",
				formData,
				config,
			);

			return response;
		} catch (error) {
			console.error(error);
		}
	},
	userProfileInfo: async newValue => {
		try {
			const response = await axiosInstance.patch("/api/user", {
				...newValue,
			});
			return response;
		} catch (error) {
			console.error(error);
		}
	},

	userPasswordInfo: async pw => {
		try {
			const response = await axiosInstance.patch("/api/user/password", {
				pw,
			});
			return response;
		} catch (error) {
			console.error(error);
		}
	},
	userPurchasedProduct: async ({ page, category }) => {
		try {
			const response = await axiosInstance.get(PATH + "/my-page/product-list", {
				params: { page, category },
			});
			return response;
		} catch (error) {
			console.error(error);
		}
	},
	userLikeProduct: async ({ page }) => {
		try {
			const response = await axiosInstance.get(
				PATH + "/my-page/like-product-list",
				{
					params: { page },
				},
			);
			return response;
		} catch (error) {
			console.error(error);
		}
	},
	userPayProduct: async ({ page }) => {
		try {
			const response = await axiosInstance.get("/api/review", {
				params: { page },
			});
			return response;
		} catch (error) {
			console.error(error);
		}
	},
	userReview: async (payList_idx, newValue) => {
		try {
			const response = await axiosInstance.post(
				`/api/review?payList_idx=${payList_idx}`,
				newValue,
				{
					headers: { "Content-Type": "multipart/form-data" },
				},
			);
			return response;
		} catch (error) {
			console.error(error);
		}
	},
	userAccountBook: async ({ page, category, start, end }) => {
		try {
			const response = await axiosInstance.get(
				PATH +
					`/my-page/account-book?page=${page}&category=${category}&start=${start}&end=${end}`,
			);
			return response;
		} catch (error) {
			console.error(error);
		}
	},
};

export default AuthApi;
