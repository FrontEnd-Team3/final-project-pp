import UserQueryApi from "apis/user.query.api";

const getUserData = () => {
	const { data } = UserQueryApi.getUserInfo();
	console.log("user", data);

	if (data) {
		const { email, nick_name, phone, region, x, y } = data;
		return { email, nick_name, phone, region, x, y };
	}
};

export default getUserData;
