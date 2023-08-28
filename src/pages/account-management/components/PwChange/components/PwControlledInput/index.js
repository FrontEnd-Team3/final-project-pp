import styled from "styled-components";

const PwControlledInput = ({
	onChange,
	value = "",
	placeholder,
	type,
	...rest
}) => {
	return (
		<S.Input
			onChange={onChange}
			value={value}
			placeholder={placeholder}
			type={type}
			{...rest}
		/>
	);
};

export default PwControlledInput;

const Input = styled.input`
	border: 1px solid #c1c1c1;
	border-radius: 5px;
	height: 40px;
	padding: 8px 1px;
	width: 100%;
	font-size: 16px;
	color: ${({ theme }) => theme.PALETTE.black};
	:focus {
		outline: none;
	}
	::placeholder {
		color: #c1c1c1;
	}
	margin-top: 40px;
`;

const S = {
	Input,
};
