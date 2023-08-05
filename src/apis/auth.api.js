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
	emailCheck: async email => {
		return await axiosInstance.get(`${PATH}/check/email?email=${email}`);
	},
	nickNameCheck: async nickName => {
		return await axiosInstance.get(
			`${PATH}/check/nickName?nickName=${nickName}`,
		);
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
			console.log("개인정보 수정:", response);
			if (response.status === 200) {
				console.log(" 개인정보 수정 성공");
			} else {
				console.log(" 개인정보 수정 실패 ");
			}
			return response;
		} catch (error) {
			console.error(error);
		}
	},
};

export default AuthApi;
