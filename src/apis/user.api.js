import { userList } from "mock/userList";
import { rest } from "msw";

export const getUsers = rest.get("/users", async (req, res, ctx) => {
	return res(ctx.status(200), ctx.json(userList));
});

export const addUser = rest.post("/users:id", async (req, res, ctx) => {
	// 가입 시 받아와야 하는 정보들
	let email;
	let password;
	let nickname;
	let name;
	let phoneNum;
	let address;

	await req.json().then(data => {
		email = data.email;
		password = data.password;
		nickname = data.nickname;
		name = data.name;
		phoneNum = data.phoneNum;
		address = data.address;
	});

	return res(
		ctx.status(200),
		ctx.json({
			id: Math.floor(Math.random() * 100000),
			email,
			password,
			nickname,
			name,
			phoneNum,
			address,
			degree: 36.5,
			profileImg: null,
			aboutMe: "자신을 소개해주세요",
			registerProducts: [],
			boughtProducts: [],
			likeProducts: [],
		}),
	);
});

const updateUser = key => {
	rest.patch("/users/:id", async (req, res, ctx) => {
		const { id } = req.params;
		const editedData = { id: parseInt(id) };

		await req.json().then(data => {
			editedData[`${key}`] = data[`${key}`];
		});

		return res(ctx.status(200), ctx.json(editedData));
	});
};

export const updateUserEmail = updateUser("email");
export const updateUserPassword = updateUser("password");
export const updateUserNickname = updateUser("nickname");
export const updateUserName = updateUser("name");
export const updateUserPhoneNum = updateUser("phoneNum");
export const updateUserAddress = updateUser("address");
export const updateUserAboutMe = updateUser("aboutMe");
export const updateUserProfileImg = updateUser("profileImg");
