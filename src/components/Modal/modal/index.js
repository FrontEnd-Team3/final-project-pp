// import { useNavigate } from "react-router";

import { useNavigate } from "react-router";
import { BackGround, Button, Close, Container, Subtitle, Title } from "./style";

// const SinginModal = ({ setOpen }) => {
// 	const navigate = useNavigate();
// 	return (
// 		<S.BackGround>
// 			<S.Container>
// 				<S.Close
// 					onClick={() => {
// 						setOpen(false);
// 					}}
// 				>
// 					x
// 				</S.Close>
// 				<S.Enment>Please Join Us!</S.Enment>
// 				<S.Korment>로그인이 필요합니다.</S.Korment>
// 				<S.Button
// 					onClick={() => {
// 						navigate(`"/Signup"`);
// 					}}
// 				>
// 					로그인 하러 가기
// 				</S.Button>
// 			</S.Container>
// 		</S.BackGround>
// 	);
// };

// export default SinginModal;

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
	moveadreess,
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
						navigate(`${moveadreess}`);
					}}
				>
					{buttonment}
				</Button>
			</Container>
		</BackGround>
	);
};
export default BasicNavigateModal;
// const Close = styled.div`
// `;
// const BackGround = styled.div``;
// const Button = styled.button`

// `;
// const Korment = styled.div`

// `;
// const Enment = styled.div`

// `;
// const Container = styled.div``;
// const S = {
// 	Container,
// 	Enment,
// 	Korment,
// 	Button,
// 	BackGround,
// 	Close,
// };
