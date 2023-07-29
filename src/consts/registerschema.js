import * as yup from "yup";

export const RegisterSchema = yup.object().shape({
    // 물품명 20자 제한 
	title: yup
		.string()
		.required("물품명을 필수로 입력해 주세요")
		.max(40, "40자 이내로 입력해 주세요"),
	// 태그명은 6자 이하 > input에 입력
	// 입력한 태그명을 enter하면 실제 태그(버튼)으로 변한다.
	tag: yup
		.string()
		.required("태그명을 필수로 입력해 주세요")
		.max(6, "6자 이하로 입력해 주세요."),
	// 태그 수 5개 이하
	taglist: yup.array().max(5).of(yup.string()),
	// 설명 1000자 이하
	explan: yup
		.string()
		.required("물품 설명을 필수로 입력해 주세요")
		.max(1000, "1000자 이내로 입력해 주세요."),

	division: yup.mixed().oneOf([true, false]).required(),
	price: yup
		.number()
		.required("가격은 필수로 입력해 주세요")
		.max(100000000, "1억 이상은 안대용"),
});
