import { useNavigate } from "react-router";
import { BackGround, Button, Close, Container, Subtitle, Title } from "./style";

const BasicNavigateModal = ({
	background,
	subtitle,
	title,
	container,
	titlement,
	subtitlement,
	position,
	closebtn,
	button,
	setOpen,
	buttonment,
	moveadress,
	...rest
}) => {
	const navigate = useNavigate();
	return (
		<BackGround background={background}>
			<Container container={container} position={position}>
				<Close
					closebtn={closebtn}
					onClick={() => {
						setOpen(false);
					}}
				>
					x
				</Close>
				<Title title={title}>{titlement}</Title>
				<Subtitle subtitle={subtitle}>{subtitlement}</Subtitle>
				<Button
					button={button}
					onClick={() => {
						navigate(`${moveadress}`);
					}}
				>
					{buttonment}
				</Button>
			</Container>
		</BackGround>
	);
};
export default BasicNavigateModal;
