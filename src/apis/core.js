import axios from "axios";
import TokenRepository from "repositories/TokenRepository";

export const axiosInstance = axios.create({
	// baseURL: process.env.REACT_APP_BACKEND_URL,
	baseURL: process.env.REACT_APP_BACKEND_URL,
	withCredentials: true, // 쿠키생성
});

axiosInstance.interceptors.request.use(function (config) {
	const token = TokenRepository.getToken();
	config.headers.Authorization = token ? `Bearer ${token}` : "";
	return config;
});
