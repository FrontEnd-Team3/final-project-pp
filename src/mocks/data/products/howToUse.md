## 🌟 메인 상품 목록 조회 (/api/product)

```
{
    region: "서울시 성동구 성수동",
    usedProduct: [{
        idx: 0,
        title: "",
        price: 0,
        img_url: "",
        created_at: "",
        Liked: 0,
        status: "판매중",
        ProductImages: [
            {imgUrl: ""},
            {imgUrl: ""},
        ],
        ProductsTags: [
            {
                idx: 1,
                Tag: {
                    tag: "크록스"
                }
            },
        ]
    }],
    freeProduct: [{
        idx: 2,
        title: "",
        price: 0,
        img_url: "",
        created_at: "",
        Liked: 0,
        status: "판매중",
        ProductImages: [
            {imgUrl: ""},
            {imgUrl: ""},
        ],
        ProductsTags: [
            {
                idx: 2,
                Tag: {
                    tag: "신발"
                }
            },
        ]
    }]
}
```

- status 판매 중인 상품만 표시되게 하기

## 🌟 물품 검색 (/api/product/search?category={category}&keyword={keyword}&page={page})

```
{
    Product: [{
        idx: 0,
        title: "",
        price: 0,
        img_url: "",
        created_at: "",
        Liked: 0,
        status: "판매중",
        ProductImages: [
            {imgUrl: ""},
            {imgUrl: ""},
        ],
        ProductsTags: [
            {
                idx: 1,
                Tag: {
                    tag: "크록스"
                }
            },
        ]
    }]
}
```

## 🌟 상품 상세 (/api/product/detail?prod_idx={prod_idx})

```
{
    searchProducts: [{
        idx: 0,
        title: "",
        description: "",
	    category: true,
        img_url: "",
        created_at: "",
        liked: 0,
        status: "판매중",
        region: "",
        ProductImages: [
            {imgUrl: ""},
            {imgUrl: ""},
        ],
        ProductsTags: [
            {
                idx: 1,
                Tag: {
                    tag: "크록스"
                }
            },
        ],
        User: {
            nick_name: "",
            profile_url: "",
            socket: "",
            Ondo: {
                ondo: 0
            }
        }
    }],
    relatedProduct: [
        {
            idx: 0,
            title: "",
            price: 0,
            img_url: "",
            created_at: "",
            liked: 0,
            status: "판매중",
            ProductImages: [
                {imgUrl: ""},
                {imgUrl: ""},
            ],
            ProductsTags: [
                {
                    idx: 1,
                    Tag: {
                        tag: "크록스"
                    }
                },
            ],
        }
    ],
    isSeller: false,
    chat: [
        {
			idx: 0,
			User: {
				nick_name: "",
				socket: "",
			},
			Product: {
				idx: 2,
				title: "",
				price: 0,
				img_url: "",
				User: {
					nick_name: "",
					profile_url: "",
				},
			},
			isRead: true,
			lastMessage: "",
			lastMessageUser: {
				nick_name: "",
				socket: "",
			},
		}
    ]
}
```

- searchProducts는 검색 결과가 아닌 상품 상세..!
- 상품 상세에 가격이 없는건가,,?🤔
- 매너온도: Ondo[ondo]
- isSeller: 로그인된 사용자 정보랑 상품 상세 판매자 정보 대조

## 🌟 물품 시세 검색 (/api/product/quote?keyword={keyowrd}&start={start}&end={end})

```
{
    cumulativeAvgPrice: [
        {
            data: "날짜",
            avgPrice: 0, // cumulativeAvgPrice 반환값
        }
    ],
    products: [
        {
            idx: 0,
            title: "",
            price: 0,
            img_url: "",
            created_at: "",
            liked: 0,
            status: "판매중",
            ProductImages: [
                {imgUrl: ""},
                {imgUrl: ""},
            ],
            ProductsTags: [
                {
                    idx: 1,
                    Tag: {
                        tag: "크록스"
                    }
                },
            ],
        }
    ]
}
```

## 🌟 최근 본 상품 목록 조회 (/api/product/viewed-list)

```
{
    productList: [
        {
            idx: 0,
            Product: {
                idx: 1,
                title: "",
                price: 0,
                img_url: "",
                created_at: "",
                status: "판매중",
                }
        }
    ]
}
```
