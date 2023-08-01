import axios from "axios";
import TokenRepository from "repositories/TokenRepository";

export const axiosInstance = axios.create({
	baseURL: "https://topdragon.co.kr/",
	headers: {
		Authorization: `Bearer ${TokenRepository.getToken()}`,
	},
	withCredentials: true, // 쿠키생성
});
