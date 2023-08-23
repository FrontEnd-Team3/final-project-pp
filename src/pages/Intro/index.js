import BasicButton from "components/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LogoFont } from "styles/common";
import introImg from "assets/images/intro_img.png";

const Intro = () => {
	const navigate = useNavigate();
	return (
		<S.Wrapper>
			<S.Container>
				<S.DescBox>
					<S.DescTitle>
						너 T야?
						<br />
						아니 난 TRIMM이야!
					</S.DescTitle>
					<S.DescSub>
						중요한 건 안 팔려도 TRIMM 하는 마음이야.
						<br />
						중고거래의 새 미래 TRIMM 지금 시작하세요!
					</S.DescSub>
					<S.BtnBox>
						<BasicButton
							color={"primary"}
							children={"바로 시작하기"}
							onClick={() => navigate(`/Signin`)}
						/>
					</S.BtnBox>
					<S.LogoBox>
						<S.Logo>TRIMM</S.Logo>
						<S.Registered>®</S.Registered>
					</S.LogoBox>
					<S.BottomDesc>
						손은 눈보다 빠른 사람들로부터 안전한 실명 거래
						<br />
						손은 눈보다 빠른 사람들로부터 안전한 실명 거래
					</S.BottomDesc>
				</S.DescBox>
				<S.ImageBox>
					<img src={introImg} />
				</S.ImageBox>
			</S.Container>
		</S.Wrapper>
	);
};

export default Intro;

const Wrapper = styled.div`
	max-width: 1060px;
	margin: 0 auto;
	height: 100vh;
	display: flex;
	justify-content: space-between;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		height: auto;
	}
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 0 20px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		flex-direction: column-reverse;
		margin: 50px 0;
	}
`;

const DescBox = styled.div`
	margin-right: 16px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin: 0;
		text-align: center;
	}
`;

const DescTitle = styled.h1`
	font-size: ${({ theme }) => theme.FONT_SIZE.xxlarge};
	font-weight: 900;
	margin-bottom: 32px;
	color: ${({ theme }) => theme.PALETTE.black};

	@media ${({ theme }) => theme.DEVICE.pc} {
		font-size: 44px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin-top: 20px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: ${({ theme }) => theme.FONT_SIZE.large};
	}
`;

const DescSub = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmedium};
	color: ${({ theme }) => theme.PALETTE.darkBlack};
	font-weight: 500;
	line-height: 1.5rem;
	margin-bottom: 32px;

	@media ${({ theme }) => theme.DEVICE.pc} {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: 15px;
	}
`;

const BtnBox = styled.div`
	button {
		border-radius: 8px;
		padding: 20px 40px;
		font-weight: 700;
		font-size: ${({ theme }) => theme.FONT_SIZE.xsmedium};
		margin-bottom: 32px;
		@media ${({ theme }) => theme.DEVICE.pc} {
			padding: 16px 28px;
		}
		@media ${({ theme }) => theme.DEVICE.tablet} {
			width: 100%;
		}
		@media ${({ theme }) => theme.DEVICE.mobile} {
			font-size: ${({ theme }) => theme.FONT_SIZE.small};
		}
	}
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray};
	margin-bottom: 32px;
`;

const LogoBox = styled.div`
	display: flex;
	margin-bottom: 12px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		justify-content: center;
	}
`;

const Logo = styled.p`
	color: #222;
	font-weight: 900;
	font-size: ${({ theme }) => theme.FONT_SIZE.mlarge};
	font-style: italic;
	margin-right: 6px;
	${LogoFont}

	@media ${({ theme }) => theme.DEVICE.pc} {
		font-size: 28px;
	}

	@media ${({ theme }) => theme.DEVICE.tablet} {
		font-size: ${({ theme }) => theme.FONT_SIZE.mmlarge};
		margin-left: -2px;
	}
`;

const Registered = styled.p`
	font-weight: 900;
	line-height: 30px;
	font-size: ${({ theme }) => theme.FONT_SIZE.smedium};
`;

const BottomDesc = styled.p`
	color: #8e8e8e;
	@media ${({ theme }) => theme.DEVICE.pc} {
		font-size: 15px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	}
`;

const ImageBox = styled.div`
	width: 560px;
	height: 560px;

	@media ${({ theme }) => theme.DEVICE.pc} {
		width: 500px;
		height: 500px;
	}
	@media ${({ theme }) => theme.DEVICE.mobile} {
		width: 100%;
		height: auto;
	}

	img {
		width: 100%;
		height: auto;
	}
`;

const S = {
	Wrapper,
	Container,
	DescBox,
	DescTitle,
	DescSub,
	BtnBox,
	LogoBox,
	Logo,
	Registered,
	BottomDesc,
	ImageBox,
};
