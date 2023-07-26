import ADMINSELL from "../adminsell.jpg";
import ADMINBUY from "../adminbuy.jpg";
import BASICIMG from "../basicimg.png";
import Images from "../products/images";

export const chatList = [
	{
		idx: 0,
		createdAt: "2023-07-26T14:32:15.000Z",
		product: {
			idx: 0,
			title: "TRIMM",
			price: 0,
			img_url: ADMINBUY,
		},
		isRead: true,
		lastMessage:
			"안녕하세요 TRIMM입니다 :) <TRIMM 채팅 거래시 안내사항> <사기 거래 주의사항>",
		lastMessageCreatedAt: "2023-07-26T14:32:15.000Z",
		User: {
			nick_name: "TRIMM",
			profile_url: ADMINBUY,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
		},
		lastMessageUser: {
			nick_name: "TRIMM",
			profile_url: ADMINBUY,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
		},
		move: false,
	},
	{
		idx: 1,
		createdAt: "2023-07-26T14:32:15.000Z",
		product: {
			idx: 1,
			title: "TRIMM",
			price: 0,
			img_url: ADMINSELL,
		},
		isRead: true,
		lastMessage: "어서오세요 당신의 첫 판매를 응원합니다. Recycling start!",
		lastMessageCreatedAt: "2023-07-26T14:32:15.000Z",
		User: {
			nick_name: "TRIMM",
			profile_url: ADMINSELL,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
		},
		lastMessageUser: {
			nick_name: "TRIMM",
			profile_url: ADMINSELL,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
		},
		move: false,
	},
	{
		idx: 2,
		createdAt: "2023-07-26T14:32:15.000Z",
		product: {
			idx: 17,
			title: "23SS 아미 니트 스웨터",
			price: 20000,
			img_url: Images.product16[0],
		},
		isRead: true,
		lastMessage:
			"생활기스가 이렇게 보이는데 뭐라고요 ? 한번 장난치시나 안사요~~",
		lastMessageCreatedAt: "2023-07-27T14:32:15.000Z",
		User: {
			nick_name: "lululala",
			profile_url: BASICIMG,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
		},
		lastMessageUser: {
			idx: 2,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			nick_name: "lululala",
		},
		move: true,
	},
	{
		idx: 3,
		createdAt: "2023-07-26T14:32:15.000Z",
		product: {
			idx: 20,
			title: "WILD DONKEY CONSTELLATION1 T SHIRT",
			price: 0,
			img_url: Images.product20[0],
		},
		isRead: true,
		lastMessage: "응 안팔아~",
		lastMessageCreatedAt: "2023-07-28T14:55:15.000Z",
		User: {
			nick_name: "lululala",
			profile_url: BASICIMG,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
		},
		lastMessageUser: {
			idx: 3,
			socket: "b46d1db6-5733-4726-a405-195b2f9a8c19",
			nick_name: "lululala",
		},
		move: true,
	},
];

/*
필요 데이터
- 상품의 아이디..?
- 판매자 아이디
- 구매자 아이디
- 대화 내용 / 시간
*/

// 판매내역: seller false user가 보낸 것이 왼쪽, se
