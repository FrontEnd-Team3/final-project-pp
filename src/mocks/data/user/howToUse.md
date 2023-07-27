## 🌟 로그인 (/api/user/login)

```
{
    user: {
        socket: "",
        nickName: "",
        profileUrl: "",
        email: "",
        region: "",
    },
    tokenForHeader: ""
}
```

- user 안에 로그인한 유저의 socket, nickName, profileUrl, email, region 정보 보내줌
- tokenForHear 안에 로그인으로 생성된 토큰 값 담아서 보내줌

## 🌟 유저 정보 조회 (/api/user/info)

```
{
	email: "",
	nick_name: "",
	phone: "",
	region: "",
	x: "",
	y: "",
	profile_url" ""
}
```

- 이메일, 닉네임, 전화번호, 주소(위도, 경도 값 포함), 프로필 이미지 보내줌
- 로그인과 유저 정보 조회 시 닉네임 키 값이 다른 것으로 보아 API에서 다르게 보내주는 듯..?🤔

## 🌟 마이페이지 메인 (/api/user/my-page)

```
{
    User: {
        nickName: "",
        profileUrl: ""
    }
    productsCount: 0,
    likeCount: 0,
    chatCount: 0,
    ondo: 0
}
```

- 등록상품/관심상품/채팅 개수/온도는 User 객체 안에 담겨있지 않음

## 🌟 마이페이지 내 등록 물품 조회 (/api/user/my-page/product-list&page={page}?category={category})

```
{
    Product: [{
        idx: 0,
        title: "",
        price: 0,
        img_url: "",
        createdAt: "",
        region: "",
        status: "",
    },]
    count: 1 // 총 물품 수
}
```

- 상품 id, 상품명, 가격, 상품 이미지, 등록 일자, 지역, 판매중/판매완료

## 🌟 마이페이지 내 관심 물품 조회 (/api/user/my-page/product-list&page={page})

```
{
    Product: [{
        idx: 0,
        title: "",
        price: 0,
        img_url: "",
        createdAt: "",
        region: "",
        status: "",
        category: true,
        liked: 0
    },]
    count: 1 // 총 물품 수
}
```

- 상품 id, 상품명, 가격, 상품 이미지, 등록 일자, 지역, 판매중/판매완료, 카테고리(중고/무료), 좋아요 개수

## 🌟 마이페이지 내 가계부 조회 (/api/user/my-page/account-book?page={page}&category={category}&start={start}&end={end})

```
{
    amount: [
        totalSaleAmount: "",
        totalPurchaseAmount: "",
        thisMonthSaleAmount: "",
        thisMonthPurchaseAmount: ""
    ],
    PayList: [
        {
            idx: 0,
            createdAt: "",
            Product: {
                idx: 0,
                createdAt: "",
                price: 0,
                img_url: "",
            }
        },
        {
            idx: 1,
            createdAt: "",
            Product: {
                idx: 13,
                createdAt: "",
                price: 0,
             img_url: "",
            }
        }
    ],
    count: 2
}
```

- 구매 상품 목록은 오는데 판매 상품 목록은 없는 것으로 보아 등록 상품에서 status로 가져오는 것으로 보임
- 가계부의 판매/구매 총액(amount)은 string..!

## 🤔 고민 사항

- user data에 name, aboutMe가 없음..!
