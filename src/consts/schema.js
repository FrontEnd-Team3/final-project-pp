import * as yup from "yup";
import { REGEX } from "./regex";
import { replacePhone } from "utils/phoneNum";

export const email = yup
	.string()
	.matches(REGEX.email, {
		message: "이메일 형식에 맞지 않습니다.",
		excludeEmptyString: true,
	})
	.required("이메일을 입력해주세요.");

export const pw = yup
	.string()
	.min(8, "8자 이상 입력해주세요.")
	.max(16, "16자 이하로 입력해주세요.")
	.matches(REGEX.password, {
		message: "영문, 숫자, 특수문자를 조합해서 입력해주세요.",
	})
	.required("비밀번호를 입력해주세요");

export const pwCheck = yup
	.string()
	.min(8, "8자 이상 입력해주세요.")
	.max(16, "16자 이하로 입력해주세요.")
	.matches(REGEX.password, {
		message: "비밀번호가 일치하지 않습니다.",
	})
	.required("비밀번호를 입력해주세요")
	.oneOf([yup.ref("pw"), null], "비밀번호가 일치하지 않습니다.");

// .matches2(null, "영문, 한글, 숫자로 8자 이내로 입력해주세요."),
/**중복검사 필요 */
export const nickName = yup
	.string()
	.min(2, "2자 이상 입력해주세요.")
	.max(12, "12자 미만 입력해주세요.")
	.required("닉네임을 입력해주세요.")
	.matches(REGEX.nickName, {
		message: "닉네임을 입력해주세요.",
	});

export const name = yup
	.string()
	.min(2, "2자 이상 입력해주세요")
	.max(12, "12자 미만 입력해주세요")
	.required("이름을 입력해주세요.")
	.matches(REGEX.name, {
		message: "이름을 입력해주세요.",
	});
export const region = yup
	.string()
	.required("주소를 입력해주세요.")
	.matches(REGEX.region, {
		message: "주소를 입력해주세요.",
	});

export const phone = yup
	.string()
	.required("핸드폰 번호를 입력해주세요.")
	.matches(REGEX.phone, {
		message: "010-0000-0000 형식의 핸드폰 번호를 입력해주세요.",
	})
	.transform((value, originalValue) => {
		if (!originalValue) {
			return value; // value가 없으면(즉, 입력이 없으면) 기본값 사용
		}
		const newPhoneNumber = replacePhone(originalValue);
		return newPhoneNumber;
	})
	.test(
		"is-correct-length",
		"010-0000-0000 형식의 핸드폰 번호를 입력해주세요.",
		value => {
			if (!value) return true; // 입력이 없으면 검사를 통과시킵니다.
			return value.length === 13; // 전화번호의 길이가 13자리인지 확인합니다.
		},
	)
	.default(""); // 입력이 없을 때 사용할 기본값
