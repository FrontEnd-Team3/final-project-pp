import { useEffect, useRef } from "react";
import { BackGround, Container, Title, Subtitle } from "./style";

const BasicModal = ({
	background,
	subtitle,
	title,
	container,
	titlement,
	subtitlement,
	position,
	onClickOutside,
	...rest
}) => {
	/* 모달 화면 바깥을 클릭하면 닫히는 기능 추가함 */
	const modalRef = useRef();

	const handleClickOutside = event => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			onClickOutside();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<BackGround background={background}>
			<Container container={container} position={position} ref={modalRef}>
				<Title title={title}>{titlement}</Title>
				<Subtitle subtitle={subtitle}>{subtitlement}</Subtitle>
			</Container>
		</BackGround>
	);
};

export default BasicModal;
