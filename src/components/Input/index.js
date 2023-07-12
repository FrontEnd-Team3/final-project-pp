import Input from "./style";

const BasicInput = ({ size, color, variant, children, ...rest }) => {
	return (
		<Input size={size} color={color} variant={variant} {...rest}>
			{children}
		</Input>
	);
};

export default BasicInput;

// 사용예시
{
	/* <BasicInput
size={"medium"}
color={"primary"}
variant={"primary"}
></BasicInput> */
}
