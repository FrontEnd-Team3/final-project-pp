import { REGEX } from "consts/REGEX";
import * as yup from "yup";

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
	.max(16, "16자 이상 입력해주세요.")
	.matches(REGEX.password, {
		message: "영문, 숫자, 특수문자를 조합해서 입력해주세요.",
	})
	.required("비밀번호를 입력해주세요");

export const pwCheck = yup
	.string()
	.min(8, "8자 이상 입력해주세요.")
	.max(16, "16자 미만 입력해주세요.")
	.matches(REGEX.password, {
		message: "비밀번호가 일치하지 않습니다.",
	})
	.required("비밀번호를 입력해주세요")
	.oneOf([yup.ref("pw"), null], "비밀번호가 일치하지 않습니다.");

// .matches2(null, "영문, 한글, 숫자로 8자 이내로 입력해주세요."),
/**중복검사 필요 */
export const nickName = yup
	.string()
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

export const phone = yup
	.string()
	.required("핸드폰 번호를 입력해주세요.")
	.matches(REGEX.phone, {
		message: "010-0000-0000 형식의 핸드폰 번호를 입력해주세요.",
	});

export const signUpValidation = yup.object({
	email: yup
		.string()
		.required("이메일 형식에 맞게 입력해주세요.")
		.matches("[a-z0-9]+@[a-z]+.[a-z]{2,3}", "이메일 형식에 맞게 입력해주세요."),
	pw: yup
		.string()
		.required("영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)")
		.matches(
			"^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,30}$",
			"영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)",
		),
	pwCheck: yup
		.string()
		.required("비밀번호를 한번 더 입력해주세요")
		.oneOf([yup.ref("pw"), null], "비밀번호가 일치하지 않습니다."),
	nickName: yup
		.string()
		.required("닉네임을 입력해 주세요.")
		.matches("^[ㄱ-ㅎ가-힣0-9a-zA-Z]+$", "닉네임이 중복되었습니다."),
	// .matches2(null, "영문, 한글, 숫자로 8자 이내로 입력해주세요."),
	/**중복검사 필요 */
	name: yup
		.string()
		.required("이름을 입력해 주세요.")
		.matches("^[가-힣a-zA-Z]+$", "영문 또는 한글로 작성해주세요."),
	address: yup
		.string()
		.required("정확인 주소를 입력해주세요.")
		.matches("^[가-힣0-9]+$", "정확인 주소를 입력해주세요."),
	phone: yup
		.string()
		.required("핸드폰 번호를 입력해주세요.")
		.matches(
			"^010-?[0-9]{4}-?[0-9]{4}$",
			"010-0000-0000 형식의 핸드폰 번호를 입력해주세요.",
		),
});

export const signInValidation = yup.object({
	email: yup
		.string()
		.required("이메일 형식에 맞게 입력해주세요.")
		.matches("[a-z0-9]+@[a-z]+.[a-z]{2,3}", "이메일 형식에 맞게 입력해주세요."),
	pw: yup
		.string()
		.required("영문, 숫자, 특수문자를 조합한 비밀번호를 입력해주세요")
		.matches(
			"^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,30}$",
			"영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)",
		),
});
