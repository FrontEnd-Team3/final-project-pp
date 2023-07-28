import axios from "axios";
import TokenRepository from "repositories/TokenRepository";

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	headers: {
		Authorization: `Bearer ${TokenRepository.getToken()}`,
	},
	withCredentials: true, // 쿠키생성
});
