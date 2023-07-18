export const chatList = [
	{
		roomID: 0,
		prouductID: 23,
		seller: true, // 판매자 user id 1
		20230706: [
			{ user: 0, time: "20:36", content: "안녕하세요 문의 드립니다." },
			{
				user: 1,
				time: "20:37",
				content: "네. 어떤 문의일까요??????????????????????????????????",
			},
			{ user: 0, time: "20:38", content: " 이거 혹시 네고 가능한가요? " },
		],
		20230707: [
			{
				user: 1,
				time: "12:33",
				content:
					"소중히 다룬 아이라서요 딱 한번 메고 나갔는데 안될 거 같아요 ^^ 네고 사절 xxx",
			},
			{
				user: 0,
				time: "12:35",
				content:
					"생활기스가 이렇게 보이는데 뭐라고요 ? 한번 장난치시나 안사요~~",
			},
			{ user: 1, time: "12:44", content: "네~" },
		],
	},
	{
		roomID: 1,
		prouductID: 24,
		seller: false, // 구매자 user id 0
		20230706: [
			{ user: 0, time: "20:36", content: "안녕하세요 문의 드립니다." },
			{
				user: 1,
				time: "20:37",
				content: "네. 어떤 문의일까요??????????????????????????????????",
			},
			{ user: 0, time: "20:38", content: " 이거 혹시 네고 가능한가요? " },
		],
		20230707: [
			{
				user: 1,
				time: "12:33",
				content:
					"소중히 다룬 아이라서요 딱 한번 메고 나갔는데 안될 거 같아요 ^^ 네고 사절 xxx",
			},
			{
				user: 0,
				time: "12:35",
				content:
					"생활기스가 이렇게 보이는데 뭐라고요 ? 한번 장난치시나 안사요~~",
			},
			{ user: 1, time: "12:44", content: "네~" },
		],
	},
];

/*
필요 데이터
- 상품의 아이디..?
- 판매자 아이디
- 구매자 아이디
- 대화 내용 / 시간
*/
