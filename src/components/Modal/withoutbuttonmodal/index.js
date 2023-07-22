// import styled from "styled-components";
// import { flexColumn } from "styles/common";
// const SingupModal = ({ title, subtitle }) => {
// 	return (
		// <S.BackGround>
		// 	<S.Container>
		// 		<S.Title>{title}</S.Title>
		// 		<S.Subtitle>{subtitle}</S.Subtitle>
		// 	</S.Container>
		// </S.BackGround>
// 	);
// };
// export default SingupModal;
// const BackGround = styled.div`
// 	position: absolute;
// 	width: 97%;
// 	top: 0%;
// 	height: 3156px;
// 	z-index: 1;
// 	background-color: rgba(255, 255, 255, 0.6);
// `;

import { BackGround, Container, Title, Subtitle } from "./style";

// const Subtitle = styled.div`
// 	font-size: 17px;
// 	color: ${({ theme }) => theme.PALETTE.darkPrimary};
// 	padding-top: 14px;
// 	font-weight: bold;
// `;

// const Title = styled.div`
// 	font-size: 38px;
// 	font-weight: bold;
// 	font-style: italic;
// `;
// const Container = styled.div`
// 	border: 2px solid ${({ theme }) => theme.PALETTE.black};
// 	border-radius: 10px;
// 	width: 500px;
// 	height: 168px;
// 	position: relative;
// 	left: 33%;
// 	top: 10%;
// 	padding-top: 30px;
// 	z-index: 1;
// 	${flexColumn}
// 	align-items: center;
// 	background-color: white;
// `;
// const S = {
// 	Container,
// 	Title,
// 	Subtitle,
// 	BackGround,
// };

const BasicModal = ({
	background,
	subtitle,
	title,
	container,
	ment1,
	ment2,
	...rest
}) => {
	return (
		<BackGround background={background}>
			<Container container={container}>
				<Title title={title}>{ment1}</Title>
				<Subtitle subtitle={subtitle}>{ment2}</Subtitle>
			</Container>
		</BackGround>
	);
};

export default BasicModal;
