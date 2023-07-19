import FAKEPROFILE from "./fakeProfile.png";

export const userList = [
	{
		id: 1,
		email: "example@naver.com",
		password: "1234",
		nickname: "aaa",
		name: "심재원",
		phoneNum: "010-1111-1111",
		address: "서울시 성동구 성수동",
		degree: 36.5,
		profileImg: FAKEPROFILE,
		aboutMe: "자기소개 페이지입니다. 날 펙트로 정의 하자면 퍼펙트.",
		registerProducts: [
			{
				id: 0,
			},
		],
		boughtProducts: [
			{
				id: 11,
			},
		],
		likeProducts: [
			{
				id: 22,
			},
		],
	},
	{
		id: 0,
		email: "test@naver.com",
		password: "1234",
		nickname: "응애!나아가재원",
		name: "테스트",
		phoneNum: "010-1234-1234",
		address: "서울시 성동구 성수동",
		degree: 36.5,
		profileImg: FAKEPROFILE,
		aboutMe: "자기소개 페이지입니다. 날 펙트로 정의 하자면 퍼펙트.",
		registerProducts: [],
		likeProducts: [],
		boughtProducts: [],
	},
];
