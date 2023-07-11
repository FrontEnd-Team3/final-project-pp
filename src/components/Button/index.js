import Button from "./style";

const BasicButton = ({ size, shape, variant, children, ...rest }) => {
	return (
		<Button size={size} shape={shape} variant={variant} {...rest}>
			{children}
		</Button>
	);
};
export default BasicButton;
