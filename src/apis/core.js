import axios from "axios";
import TokenRepository from "repositories/TokenRepository";

export const axiosInstance = axios.create({
	baseURL: "https://topdragon.co.kr",
	withCredentials: true, // 쿠키생성
});

axiosInstance.interceptors.request.use(function (config) {
	const token = TokenRepository.getToken();
	config.headers.Authorization = token ? `Bearer ${token}` : "";
	return config;
});
