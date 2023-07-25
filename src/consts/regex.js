export const REGEX = {
	email: /^[a-z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$/i,
	password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,30}$/,
	nickName: /^[ㄱ-ㅎ가-힣0-9a-zA-Z]+$/,
	name: /^[가-힣a-zA-Z]+$/,
	phone: /^010-?[0-9]{4}-?[0-9]{4}$/,
};
