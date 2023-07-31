import Images from "./images";
import FAKEPROFILE from "../fakeProfile.png";

export const productList = [
	{
		idx: 0,
		title: "BRUNELLO CUCINELLI",
		img_url: Images.product0[0],
		created_at: "2023-07-26T14:32:15.000Z",
		// 이미지 배열
		ProductImages: Images.product0,
		region: "서울시 성동구 성수동",
		category: true, // 무료나눔
		price: 0,
		description: "23FW 브루넬로 쿠치넬리 부츠 MZidxG2535C101 Black",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 5,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 2,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 1,
		title: "EMIS RINGER TEE",
		created_at: "2023-07-26T14:32:15.000Z",
		img_url: Images.product1[0],
		ProductImages: Images.product1,
		region: "서울시 성동구 성수동",
		category: false, // 중고거래
		price: 48000,
		description:
			"귀여운 색감의 컬러 배색이 들어간 링거티입니다. 크롭 기장감으로 트렌디한 연출을 할 수 있고 총 5가지 컬러로 출시되어 스타일에 포인트를 줄 수 있습니다. ",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 3,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 1,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 0,
				title: "BRUNELLO CUCINELLI",
				price: 0,
				img_url: Images.product0[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product0,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 2,
		title: "ADidxAS ADIFOM SUPERSTAR BO",
		img_url: Images.product2[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product2,
		region: "서울시 성동구 성수동",
		category: true,
		price: 0,
		description:
			"개성과 다양성을 상징하는 아디다스 슈퍼스타가 틀을 깨는 새로운 버전으로 돌아왔습니다. 과거에서 얻은 영감을 기반으로 모던한 스트리트웨어에 변화를 주도록 재구성된 아디폼 SST 부츠를 만나보세요. 지속 가능한 소재로 제작된 부츠 컷 디자인이 미래를 향해 진화하는 대담한 룩을 선사하고, 아이코닉한 쉘토가 슈퍼스타의 역사를 재조명합니다. 부드러운 폼 소재를 사용해 편안하고 기분 좋은 착화감을 제공합니다.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 2,
		status: "판매완료",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 2,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 3,
		title: "SALT WATER ORIGINALS - WHITE",
		img_url: Images.product3[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product3,
		region: "서울시 성동구 성수동",
		category: false,
		price: 54400,
		description:
			"Salt-Water®는 손바느질 된 미끄럼 방지 밑창과, 흠집에 강한 생활 방수 가죽으로 만들어졌습니다. 청소가 간편하고 녹슬지 않는 황동 버클이 장착되어있어, 물 안과 밖 어느 곳에서든 편하게 착용할 수 있습니다.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 4,
		status: "판매완료",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 3,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 4,
		title: "att. Strap Sandal Heel",
		img_url: Images.product4[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product4,
		region: "서울시 성동구 성수동",
		category: true,
		price: 0,
		description:
			"Triple buckle strap design gives uniqueness of this sandal heel.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 100,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 4,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 5,
		title: "SUECOMMA BONNIE Polygon quilting sandal",
		img_url: Images.product5[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product5,
		region: "서울시 성동구 성수동",
		category: false,
		price: 340200,
		description:
			"양가죽을 사용하여 부드러워 착화감이 좋으며, 창과 어퍼에 폴리곤 모양의 퀼팅 재봉으로 밋밋할수있는 샌들에 포인트를 주었다. 앤틱 버클장식을 적용하여 고급스러운 스타일.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 10,
		status: "판매완료",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 5,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 6,
		title: "SALOMON XT-6",
		img_url: Images.product6[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product6,
		region: "서울시 성동구 성수동",
		category: true,
		price: 0,
		description:
			"XT-6은 2013년 처음 출시된 이후 혹독한 조건을 이겨내고 장시간 러닝을 하는 세계적인 선수들이 선호하는 런닝슈즈로 자리매김했습니다. 최고의 쿠셔닝, 내구성, 컨트롤 능력은 그대로 유지하면서 컬러와 소재가 더욱 업그레이드 되었습니다.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 4,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 6,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 7,
		title: "MEDUS WOMENS SANDALS SUN",
		img_url: Images.product7[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product7,
		region: "서울시 성동구 성수동",
		category: false,
		price: 27000,
		description:
			"유럽 감성의 미니멀한 디자인과 아이들에게 즐거움을 주는 다양한 컬러가 특징이며, 부드러운 PVC 재질로 제작되어 어른, 아이 할 것 없이 편안한 착화감을 제공합니다.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 40,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 7,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
			{
				idx: 1,
				User: {
					nick_name: "bbb222",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 7,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
			{
				idx: 2,
				User: {
					nick_name: "ccc333",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 7,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 8,
		title: "APOA Pao Long Handle Bag",
		img_url: Images.product8[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product8,
		region: "서울시 성동구 성수동",
		category: true,
		price: 0,
		description:
			"표면 코팅 가공으로 생긴 주름이 특징으로 불규칙한 크랙의 텍스쳐가 돋보이는 가죽입니다. 스크래치에 강하고 빈티지한 느낌을 줍니다.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매완료",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 8,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 9,
		title: "W NIKE CORTEZ PRM",
		img_url: Images.product9[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product9,
		region: "서울시 성동구 성수동",
		category: false,
		price: 90300,
		description:
			"스트리트 컬쳐와 스포츠를 아우르는 디자인으로 나이키의 도전정신을 기념하다. 클래식 스타일을 과감하게 재해석하여, 시선을 사로잡는 나이키 뉴 컬렉션을 만나보세요.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 20,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 9,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 10,
		title: "NOTHING WRITTEN HT nylon shoulder bag",
		img_url: Images.product10[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product10,
		region: "서울시 성동구 성수동",
		price: 0,
		category: true,
		description:
			"나일론 재질의 라운드 호보 모양. 스트랩에 6개의 넉넉한 홀로 길이 조절 가능하여 크로스와 숄더로 착용 가능",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 10,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 11,
		title: "LEMEME Sac Micro Nouvelle",
		img_url: Images.product11[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product11,
		region: "서울시 성동구 성수동",
		price: 226100,
		category: false,
		description:
			"르메메 시그니처 누벨르의 마이크로 버전으로 누벨르의 클래식함과 마이크로 사이즈로 사랑스러운 이미지가 공존하는 스타일입니다.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매완료",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 11,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 12,
		title: "SSIL Ball Pendant",
		img_url: Images.product12[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product12,
		region: "서울시 성동구 성수동",
		price: 0,
		category: true,
		description:
			"롱한 기장의 참 목걸이. 도형적인 팬던트의 조화가 캐주얼하면서도 감각적인 제품",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 12,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 13,
		title: "COSMOSS RIBBON RUFFLE DRESS",
		img_url: Images.product13[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product13,
		region: "서울시 성동구 성수동",
		price: 398000,
		category: false,
		description:
			"어깨 라인 끈으로 원하는 스타일 연출 앞뒤 비대칭 기장 러플을 이용하여 볼륨감 있는 러블리한 디자인",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 13,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 14,
		title: "OPEN YY NEOPRENE PLATFORM MARY JANE",
		img_url: Images.product14[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product14,
		region: "서울시 성동구 성수동",
		price: 0,
		category: true,
		description:
			"소가죽, 네오프랜 소재, 컬러 배색 디자인, 벨크로 스트랩 디테일, 가벼운 플랫폼 굽",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매완료",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 14,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 15,
		title: "아페쎄 안드레 카드지갑",
		img_url: Images.product15[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product15,
		region: "서울시 성동구 성수동",
		price: 90000,
		category: false,
		description: "선물 받았는데 사용하지 않아 판매합니다.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 15,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 16,
		title: "23SS 아미 니트 스웨터",
		img_url: Images.product16[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product16,
		region: "서울시 성동구 성수동",
		price: 0,
		category: true,
		description:
			"레드 아미 드 꾀흐 가슴 자수 네크라인 뒷면의 비슷한 톤 아미 자수 포르투갈에서 사랑을 담아 제작한 상품입니다",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 16,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 17,
		title: "GANNI T-SHIRT",
		img_url: Images.product17[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product17,
		region: "서울시 성동구 성수동",
		price: 82500,
		category: false,
		description: "BASIC JERSEY BUTTERFLY RELAXED T-SHIRT T3357 LIGHT LILAC",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매완료",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 17,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 18,
		title: "인스탁스 스퀘어 SQ40 카메라",
		img_url: Images.product18[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product18,
		region: "서울시 성동구 성수동",
		price: 0,
		category: true,
		description: "진정한 '나'의 모습을 SQ40으로 담아보세요.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 18,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 19,
		title: "[Lawn Chair USA] 론체어 클래식 리플리",
		img_url: Images.product19[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product19,
		region: "서울시 성동구 성수동",
		price: 118750,
		category: false,
		description:
			"미국 플로리라두 현지에서 100% 수작업으로 완성되고 녹슬지 않는 초경량 알루미늄 프레임과 내구성이 뛰어난 UV 차단 퇴색방지 웨빙으로 제작되었습니다. 변하지 않는 탄탄한 소재와 본질을 보여주는 클래식함은 소장가치를 더해줍니다.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 19,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 20,
		title: "WILD DONKEY CONSTELLATION1 T SHIRT",
		img_url: Images.product20[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product20,
		region: "서울시 성동구 성수동",
		price: 0,
		category: true,
		description: "ARTWORK OF POPEYE, SHORT SLEEVES, ROUND NECK",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매완료",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 20,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 21,
		title: "SUNNYLiFE 3D 불가사리 비치볼",
		img_url: Images.product21[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product21,
		region: "서울시 성동구 성수동",
		category: false,
		price: 29700,
		description:
			"3D 불가사리 포인트의 써니라이프 비치볼. 가득 들어있는 홀로그램 글리터로 물 위에서 더욱 반짝반짝 빛이 나요. 써니라이프만의 무드와 함께 여름을 특별하게 보내보세요",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 21,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 22,
		title: "BALMAIN T-SHIRT",
		img_url: Images.product22[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product22,
		region: "서울시 성동구 성수동",
		category: false,
		price: 150000,
		description: "23FW 주니어 발망 티셔츠 BT8Q71 Z0116100NE",
		user: 9,
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 22,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 23,
		title: "RAIVE Rabbit Graphic Cropped T-shirt",
		img_url: Images.product23[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product23,
		region: "서울시 성동구 성수동",
		category: false,
		price: 58000,
		description:
			"키치한 무드가 느껴지는 레이브만의 오리지널 아트웍 티셔츠입니다. 모달과 스판이 섞인 코튼 원단으로 부드러운 촉감이 편안한 착용감을 줍니다.",
		user: 9,
		Liked: 0,
		status: "판매완료",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 23,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 24,
		title: "JOHNNY HATES JAZZ EMBROidxERY LAYERED COTTON DRESS",
		img_url: Images.product24[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product24,
		region: "서울시 성동구 성수동",
		category: true,
		price: 0,
		description:
			"브로더리 소재가 레이어드 된 코튼 원피스입니다. 뷔스티에 라인에 코튼 레이스가 매칭되어 있으며, 허리 밴딩과 옆 지퍼로 처리되어 있어 편하게 착용 가능합니다.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 24,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 25,
		title: "THE NORTH FACE 화이트라벨 필드 크루넥",
		img_url: Images.product25[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product25,
		region: "서울시 성동구 성수동",
		category: false,
		price: 102400,
		description:
			"신축성이 좋은 소재를 사용하여 활동하기 편안한 V-NECK LINE 우븐 MTM 입니다.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 25,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 26,
		title: "FLOW-ER Light Half Collar Knit",
		img_url: Images.product26[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product26,
		region: "서울시 성동구 성수동",
		category: true,
		price: 0,
		description:
			"하프 칼라 디테일이 매력적인 숏 슬리브 니트입니다. 여름에 입기 좋은 가볍고 부드러운 텍스처의 소재를 사용하였습니다.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매완료",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 26,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 27,
		title: "Lord John Grey standard denim pants",
		img_url: Images.product27[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product27,
		region: "서울시 성동구 성수동",
		category: false,
		price: 89100,
		description:
			"스탠다드 핏, 논 스트레치 데님, 5 포켓 스타일링, 올 브러쉬 워싱",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 27,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 28,
		title: "LOEUVRE Sheer Crop Cardigan",
		img_url: Images.product28[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product28,
		region: "서울시 성동구 성수동",
		category: true,
		price: 0,
		description:
			"가벼운 터치감의 쿠클사로 포인트를 준 니트 가디건입니다. 다양한 이너 및 원피스와 착용하기 좋은 베이직한 컬러감에 크롭한 기장감을 적용해 경쾌함을 살려주었습니다. 롱 슬리브로 겨울을 제외한 모든 시즌에 데일리하게 착용하지 좋은 활용성 높은 아이템입니다.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 28,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 29,
		title: "CONVERTIBLE COLLAR DOUBLE POCKET SHIRT",
		img_url: Images.product29[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product29,
		region: "서울시 성동구 성수동",
		category: false,
		price: 26730,
		description:
			"깔끔하게 떨어지는 세미-오버핏의 실루엣이 예술인 턴업-슬리브 셔츠입니다. 가슴 좌우 측에 있는 포켓 디테일로 구조적인 디자인을 주었고, 턴업 되어 있는 슬리브로 독특하면서도 세련된 느낌을 극대화하였습니다.",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매완료",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 29,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 30,
		title: "Chloe Perfume 우디백 스몰",
		img_url: Images.product30[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product30,
		region: "서울시 성동구 성수동",
		category: true,
		price: 0,
		description:
			"끌로에 여성 토트백. 브랜드 고유의 멋스러운 디자인으로 명품만의 디테일이 살아있어 더욱 고급스러운 매력적인 아이템",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 30,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
	{
		idx: 31,
		title: "JOY CRYSON 세렌디피티 크로스바디 캔버스 미디움",
		img_url: Images.product31[0],
		created_at: "2023-07-26T14:32:15.000Z",
		ProductImages: Images.product31,
		region: "서울시 성동구 성수동",
		category: false,
		price: 338000,
		description:
			"조이그라이슨의 새로운 락 하드웨어가 포인트인 세렌디피티 라인 둥근 새들 형태의 쉐입에 'J' 모티브의 푸쉬락 하드웨어, 장식과 백의 라인을 따라 연결된 가죽 트림으로 클래식하면서도 고급스러움을 강조",
		User: {
			nick_name: "aaa123",
			profile_url: FAKEPROFILE,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			Ondo: { ondo: 36.5 },
		},
		Liked: 0,
		status: "판매중",
		chat: [
			{
				idx: 0,
				User: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
				Product: {
					idx: 31,
					title: "testtest",
					price: 10000000,
					img_url: "123",
					User: {
						nick_name: "test123",
						profile_url: FAKEPROFILE,
					},
				},
				isRead: true,
				lastMessage: "감사합니다:)",
				lastMessageUser: {
					nick_name: "aaa111",
					socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
				},
			},
		], // length > 받은 채팅 개수
		ProductsTags: [
			{ idx: 1, Tag: { tag: "크록스" } },
			{ idx: 2, Tag: { tag: "신발" } },
			{ idx: 3, Tag: { tag: "화이트신발" } },
			{ idx: 4, Tag: { tag: "화이트크록스" } },
		],
		relatedProduct: [
			{
				idx: 1,
				title: "EMIS RINGER TEE",
				price: 48000,
				img_url: Images.product1[0],
				created_at: "2023-07-26T14:32:15.000Z",
				liked: 3,
				status: "판매중",
				ProductImages: Images.product1,
				ProductsTags: [
					{ idx: 1, Tag: { tag: "크록스" } },
					{ idx: 2, Tag: { tag: "신발" } },
					{ idx: 3, Tag: { tag: "화이트신발" } },
					{ idx: 4, Tag: { tag: "화이트크록스" } },
				],
			},
		],
	},
];
