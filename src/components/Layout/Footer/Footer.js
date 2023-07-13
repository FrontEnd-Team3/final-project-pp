import styled from "styled-components";
import { flexColumn, primaryFont } from "styles/common";
import { BiSolidGame } from "react-icons/bi";

const Footer = () => {
	return (
		<S.Container>
			<S.Wrapper>
				<S.FooterTop>
					<S.FooterTopLeft>
						<S.CSCenter>
							고객센터 <S.CSTell>1234-5678</S.CSTell>
						</S.CSCenter>
						<S.CSdesc>월-금 09:00 ~ 12:00 / 전화 잘 안받음</S.CSdesc>
					</S.FooterTopLeft>
					<S.FooterRight>
						<S.Icon>
							<img src={process.env.PUBLIC_URL + "/ico.fackbook.png"} />
						</S.Icon>
						<S.Icon>
							<img src={process.env.PUBLIC_URL + "/ico.instagram.png"} />
						</S.Icon>
						<S.Icon>
							<img src={process.env.PUBLIC_URL + "/ico.github.png"} />
						</S.Icon>
					</S.FooterRight>
				</S.FooterTop>
			</S.Wrapper>
			<S.BottomContainer>
				<S.Wrapper>
					<S.FooterBottom>
						<S.FooterBottomLeft>
							<S.FooterLogo>
								PPYONG
								<br />
								PPYONG
							</S.FooterLogo>
							<S.Info>
								<S.Li>(주) 뿅뿅마켓 | 대표이사: 김뿅뿅</S.Li>
								<S.Li>주소 : 서울시 성동구 성수동 123</S.Li>
								<S.Li>이메일 : github.com/FrontEnd-Team3</S.Li>
							</S.Info>
						</S.FooterBottomLeft>
						<S.FooterBottomRight>
							<S.InfoLink>
								<li>회사소개</li>
								<li>인재채용</li>
								<li>제휴제안</li>
								<li>이용약관</li>
								<li>개인정보처리방침</li>
							</S.InfoLink>
							<S.CopyIconBox>
								<S.CopyRight>
									본 사이트의 저작권은 (주)뿅뿅마켓에 있으며 내용을 무단 복제
									하세요
									<br />
									Copyright ©PPYONG PPYONG Corp. All rights reserved.
								</S.CopyRight>
								<S.IconPackman>
									<BiSolidGame size={40} />
									<span></span>
									<span></span>
									<span></span>
								</S.IconPackman>
							</S.CopyIconBox>
						</S.FooterBottomRight>
					</S.FooterBottom>
				</S.Wrapper>
			</S.BottomContainer>
		</S.Container>
	);
};

export default Footer;

const Container = styled.div`
	width: 100%;
	height: 80px;
	background-color: #f4f4f4;
	border-bottom: 2px solid #404040;
	border-top: 2px solid #404040;
	& * {
		${primaryFont}
	}
`;

const Wrapper = styled.div`
	margin: 0 auto;
	width: 1060px;
`;

const FooterTop = styled.div`
	display: flex;
	background: #f4f4f4;
	height: 76px;
`;

const FooterTopLeft = styled.div`
	${flexColumn}
	justify-content: center;
	width: 480px;
	height: 100%;
	border-right: 2px solid #404040;
`;

const FooterRight = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	margin-left: 30px;
`;

const Icon = styled.div`
	width: 30px;
	height: 30px;
	margin-right: 10px;

	& img {
		width: 30px;
		height: 30px;
	}
`;

const CSCenter = styled.p`
	font-size: 20px;
	margin-bottom: 5px;
`;

const CSTell = styled.span`
	margin-left: 10px;
`;

const CSdesc = styled.span`
	color: #6f6666;
`;

const BottomContainer = styled.div`
	width: 100%;
	height: 200px;
	border-bottom: 2px solid #404040;
`;

const FooterBottom = styled.div`
	height: 200px;
	display: flex;
`;

const FooterBottomLeft = styled.div`
	${flexColumn}
	justify-content: center;
	width: 480px;
	border-right: 2px solid #404040;
	margin-right: -10px;
`;

const FooterLogo = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.large};
	font-weight: bold;
	color: ${({ theme }) => theme.PALETTE.primary["dark"]};
	-webkit-text-stroke: 0.2px black;
	letter-spacing: 1px;
`;

const Info = styled.ul`
	margin-top: 10px;
`;

const Li = styled.li`
	margin-bottom: 5px;
`;

const FooterBottomRight = styled.div`
	margin-left: 40px;
	padding: 36px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const InfoLink = styled.ul`
	display: flex;

	li {
		display: flex;
		align-items: center;
		padding-left: 12px;
		cursor: pointer;
	}

	li:first-of-type {
		padding-left: 0;
	}

	li:first-of-type::before {
		content: "";
		display: inline-block;
		margin-right: 10px;
		width: 2px;
		height: 12px;
		background-color: #000;
	}

	li:last-of-type {
		font-weight: bold;
		padding-right: 0;
		color: ${({ theme }) => theme.PALETTE.pricePoint};
	}

	li::after {
		content: "";
		display: inline-block;
		margin-left: 10px;
		width: 2px;
		height: 12px;
		background-color: #000;
	}
`;

const CopyIconBox = styled.div`
	display: flex;
`;

const IconPackman = styled.div`
	display: flex;
	align-items: center;
	svg {
		color: #ffeea4;
	}

	path {
		stroke-width: 1.2px;
		stroke: ${({ theme }) => theme.PALETTE.black};
	}

	span {
		display: inline-block;
		background-color: #ffeea4;
		width: 10px;
		height: 10px;
		border: 2px solid ${({ theme }) => theme.PALETTE.BLACK};
		border-radius: 50%;
		margin-right: 6px;
	}
`;

const CopyRight = styled.p`
	color: #8a8a8a;
	line-height: 1.2rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xxsmall};
	margin-right: 30px;
`;

const S = {
	Container,
	Wrapper,
	FooterTop,
	FooterTopLeft,
	FooterRight,
	Icon,
	CSCenter,
	CSTell,
	CSdesc,
	BottomContainer,
	FooterBottom,
	FooterBottomLeft,
	FooterLogo,
	FooterBottomRight,
	Info,
	Li,
	InfoLink,
	CopyIconBox,
	CopyRight,
	IconPackman,
};
