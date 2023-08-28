import Button from "./style";

const BasicButton = ({ size, shape, children, ...rest }) => {
	return (
		<Button size={size} shape={shape} {...rest}>
			{children}
		</Button>
	);
};
export default BasicButton;
