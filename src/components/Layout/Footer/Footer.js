import styled from "styled-components";
import { flexColumn } from "styles/common";

const Footer = () => {
	return (
		<S.Container>
			<S.Wrapper>
				<S.FooterTop>
					<S.FooterTopLeft>
						<p>
							고객센터 <S.CSTell>1234-5678</S.CSTell>
						</p>
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
								회사소개 | 인재채용 | 제휴제안 | 이용약관 | 개인정보처리방침
							</S.InfoLink>
							<S.CopyRight>
								본 사이트의 저작권은 (주)뿅뿅마켓에 있으며 내용을 무단 복제
								하세요 Copyright ©PPYONG PPYONG Corp. All rights reserved.
							</S.CopyRight>
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
	padding: 0 50px;
	display: flex;
	align-items: center;
	width: 560px;
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

const CSTell = styled.span`
	margin-left: 10px;
`;

const CSdesc = styled.span`
	color: #6f6666;
	margin-left: 20px;
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
	padding: 0px 50px;
	${flexColumn}
	justify-content: center;
	width: 560px;
	height: 100%;
	border-right: 2px solid #404040;
`;

const FooterLogo = styled.p`
	font-size: 32px;
	font-weight: bold;
	color: #8490c8;
	-webkit-text-stroke: 1px black;
`;

const Info = styled.ul`
	margin-top: 10px;
`;

const Li = styled.li``;

const FooterBottomRight = styled.div`
	margin-left: 30px;
	padding: 27px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const InfoLink = styled.div``;

const CopyRight = styled.p`
	width: 400px;
	color: #8a8a8a;
`;

const S = {
	Container,
	Wrapper,
	FooterTop,
	FooterTopLeft,
	FooterRight,
	Icon,
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
	CopyRight,
};
