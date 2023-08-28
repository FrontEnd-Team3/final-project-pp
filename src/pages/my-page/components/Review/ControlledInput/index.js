import styled from "styled-components";

const ControlledInput = ({
	onChange,
	value = "",
	placeholder,
	type,
	name,
	...rest
}) => {
	return name === "reviewInfo" ? (
		<>
			<S.TextInput
				onChange={onChange}
				value={value}
				placeholder={placeholder}
				type={type}
				{...rest}
			/>
		</>
	) : (
		<>
			<S.Input
				onChange={onChange}
				value={value}
				placeholder={placeholder}
				type={type}
				{...rest}
			/>
		</>
	);
	// <S.Input
	// 	onChange={onChange}
	// 	value={value}
	// 	placeholder={placeholder}
	// 	type={type}
	// 	{...rest}
	// />
};

export default ControlledInput;

const Input = styled.input`
	border: none;
	padding: 8px 1px;
	width: 370px;
	font-size: 16px;
	color: ${({ theme }) => theme.PALETTE.black};
	:focus {
		outline: none;
	}
	::placeholder {
		color: #c1c1c1;
	}
`;

const TextInput = styled.textarea`
	border: none;
	padding: 8px 1px;
	width: 962px;
	height: 160px;
	font-size: 16px;
	white-space: wrap;
	word-break: break-all;
	color: ${({ theme }) => theme.PALETTE.black};
	:focus {
		outline: none;
	}
	::placeholder {
		color: #c1c1c1;
		font-size: 16px;
	}
`;

const S = {
	Input,
	TextInput,
};
