import Images from "../products/images";
import FAKEPROFILE from "../fakeProfile.png";

export const userList = [
	{
		id: "admin",
	},
	{
		id: 1,
		socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
		email: "example@naver.com",
		pw: "1234",
		nickName: "aaa",
		name: "심재원",
		phone: "010-1111-1111",
		region: "서울시 성동구 성수동",
		// 성수동 위도 경도
		x: "127.0411420343",
		y: "37.546912668813",
		ondo: 36.5,
		profile_url: FAKEPROFILE,
		aboutMe: "자기소개 페이지입니다. 날 펙트로 정의 하자면 퍼펙트.",
		registerProducts: [
			{
				idx: 0,
				title: "BRUNELLO CUCINELLI",
				price: 0,
				img_url: Images.product0[0],
				createdAt: "2023-07-26T14:32:15.000Z",
				region: "서울시 성동구 성수동",
				status: "판매완료",
			},
		],
		likeProducts: [
			{
				idx: 3,
				title: "SALT WATER ORIGINALS - WHITE",
				price: 0,
				img_url: Images.product3[0],
				createdAt: "2023-07-25T14:32:15.000Z",
				region: "서울시 성동구 성수동",
				status: "판매중",
				category: true,
				liked: 0,
			},
		],
		accountBook: {
			amount: {
				totalSaleAmount: "0",
				totalPurchaseAmount: "0",
				thisMonthSaleAmount: "0",
				thisMonthPurchaseAmount: "0",
			},
			PayList: [
				{
					idx: 7,
					title: "MEDUS WOMENS SANDALS SUN",
					price: 0,
					img_url: Images.product7[0],
					createdAt: "2023-07-25T14:32:15.000Z",
					region: "서울시 성동구 성수동",
					status: "판매완료",
					category: true,
					liked: 0,
				},
			],
			count: 1,
		},
		chat: [
			{
				id: 33,
			},
		],
	},
	{
		id: 1,
		socket: "b46d1db6-5733-4726-a405-195b2f9a8c11",
		email: "test@naver.com",
		pw: "1234",
		nickName: "응애!나아가재원",
		name: "테스트",
		phone: "010-1234-1234",
		region: "서울시 성동구 성수동",
		x: "127.0411420343",
		y: "37.546912668813",
		ondo: 36.5,
		profile_url: FAKEPROFILE,
		aboutMe: "자기소개 페이지입니다. 날 펙트로 정의 하자면 퍼펙트.",
		registerProducts: [
			{
				idx: 1,
				title: "",
				price: 0,
				img_url: "",
				createdAt: "",
				region: "",
				status: "",
			},
		],
		likeProducts: [
			{
				idx: 4,
				title: "",
				price: 0,
				img_url: "",
				createdAt: "",
				region: "",
				status: "",
				category: true,
				liked: 0,
			},
		],
		accountBook: {
			amount: {
				totalSaleAmount: "0",
				totalPurchaseAmount: "0",
				thisMonthSaleAmount: "0",
				thisMonthPurchaseAmount: "0",
			},
			PayList: [],
			count: 0,
		},
		chat: [
			{
				id: 33,
			},
		],
	},
];
