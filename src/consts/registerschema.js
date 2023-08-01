import * as yup from "yup";
import { replacePrice } from "utils/phoneNum";

export const RegisterSchema = yup.object().shape({
	// 물품명 20자 제한
	title: yup
		.string()
		.required("물품명을 필수로 입력해 주세요")
		.min(5, "최소 5자 이상 입력해주세요")
		.max(40, "40자 이내로 입력해 주세요"),
	// 태그명은 6자 이하 > input에 입력
	// 입력한 태그명을 enter하면 실제 태그(버튼)으로 변한다.
	tag: yup.string().max(6, "6자 이하로 입력해 주세요."),
	// 설명 1000자 이하
	explan: yup
		.string()
		.required("물품 설명을 필수로 입력해 주세요")
		.max(1000, "1000자 이내로 입력해 주세요."),
	price: yup
		.string()
		.required("가격을 설정해 주세요.")
		// 세자리마다 콤마 찍어주기
		.transform(originPrice => {
			const price = replacePrice(originPrice);
			return price;
		})
		.test({
			// 글자 수가 10자 이상 넘어가면 1억 이상으로 판단하고, 에러 메세지 띄움
			message: "1억원 이상은 판매 불가합니다.",
			test: price => {
				if (price.length <= 10) return true;
				else {
					return false;
				}
			},
		})
		.test({
			message: "맨앞의 숫자 0을 지우고 입력해 주세요",
			test: price => {
				if (price[0] == 0) return false;
				else {
					return true;
				}
			},
		}),
});
