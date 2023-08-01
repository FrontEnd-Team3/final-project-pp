import styled from "styled-components";

const ControlledInput = ({
	onChange,
	value = "",
	placeholder,
	type,
	onClick,
}) => {
	return (
		<S.Input
			onChange={onChange}
			value={value}
			placeholder={placeholder}
			type={type}
			onClick={onClick}
		/>
	);
};

export default ControlledInput;

const Input = styled.input`
	border: none;
	border-bottom: 1.3px solid ${({ theme }) => theme.PALETTE.gray};
	padding: 8px 1px;
	width: 370px;
	font-size: 11px;
	color: ${({ theme }) => theme.PALETTE.black};
	:focus {
		outline: none;
	}
	::placeholder {
		color: #c1c1c1;
	}
`;

const S = {
	Input,
};
