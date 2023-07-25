import { BackGround, Container, Title, Subtitle } from "./style";

const BasicModal = ({
	background,
	subtitle,
	title,
	container,
	titlement,
	subtitlement,
	position,
	...rest
}) => {
	return (
		<BackGround background={background}>
			<Container container={container} position={position}>
				<Title title={title}>{titlement}</Title>
				<Subtitle subtitle={subtitle}>{subtitlement}</Subtitle>
			</Container>
		</BackGround>
	);
};

export default BasicModal;
