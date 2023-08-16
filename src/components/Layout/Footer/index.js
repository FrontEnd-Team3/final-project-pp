import styled from "styled-components";
import { LogoFont } from "styles/common";
import iconFace from "assets/images/ico.fackbook.png";
import iconInsta from "assets/images/ico.instagram.png";
import iconGit from "assets/images/ico.github.png";

const Footer = () => {
	return (
		<S.Wrapper>
			<S.Container>
				<S.FooterLeft>
					<S.LogoBox>
						<S.Logo>TRIMM</S.Logo>
						<S.Registered>®</S.Registered>
					</S.LogoBox>
					<S.InfoLink>
						<li>회사소개</li>
						<li>인재채용</li>
						<li>제휴제안</li>
						<li>이용약관</li>
						<li>개인정보처리방침</li>
					</S.InfoLink>
					<S.CompanyInfo>
						<li>Co. TRIMM</li>
						<li>대표이사: 박띠듀</li>
						<li>주소 : 서울시 성동구 성수동 123</li>
					</S.CompanyInfo>
					<S.CompanyInfo2>
						<li>사업자 등록 번호 : 2023-08-14</li>
						<li>링크 : github.com/FrontEnd-Team3</li>
					</S.CompanyInfo2>
				</S.FooterLeft>
				<S.FooterRight>
					<S.Icons>
						<S.Icon>
							<img src={iconFace} />
						</S.Icon>
						<S.Icon>
							<img src={iconInsta} />
						</S.Icon>
						<S.Icon>
							<img src={iconGit} />
						</S.Icon>
					</S.Icons>
					<S.CSBox>
						<S.CsCenter>
							고객센터 <span>1234-5678</span>
						</S.CsCenter>
						<S.CsCenterInfo>
							월-금 09:00 ~ 12:00 / 전화 잘 안받음
						</S.CsCenterInfo>
					</S.CSBox>
					<S.Copyright>Copyright ©TRIM. All rights reserved</S.Copyright>
				</S.FooterRight>
			</S.Container>
		</S.Wrapper>
	);
};

export default Footer;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	height: 200px;
	border-top: 1px solid ${({ theme }) => theme.PALETTE.darkBlack};
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.darkBlack};
	@media ${({ theme }) => theme.DEVICE.pc} {
		padding: 0 20px;
	}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		height: auto;
	}
`;

const Container = styled.div`
	margin: 0 auto;
	width: 1060px;
	height: 126px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin: 30px auto;
		align-items: flex-start;
		flex-direction: column;
		height: auto;
	}
`;
const FooterLeft = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		width: 100%;
	}
`;

const LogoBox = styled.div`
	display: flex;
	margin-bottom: 12px;
`;

const Logo = styled.p`
	color: #222;
	font-weight: 900;
	font-size: ${({ theme }) => theme.FONT_SIZE.mlarge};
	font-style: italic;
	margin-right: 6px;
	${LogoFont}
	@media ${({ theme }) => theme.DEVICE.tablet} {
		font-size: 28px;
		margin-left: -2px;
	}
`;

const Registered = styled.p`
	font-weight: 900;
	line-height: 30px;
	font-size: ${({ theme }) => theme.FONT_SIZE.smedium};
`;

const InfoLink = styled.ul`
	display: flex;
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	margin-bottom: 16px;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		flex-direction: column;
		border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray};
		margin-bottom: 20px;
	}
	li {
		display: flex;
		align-items: center;
		margin-right: 20px;
		cursor: pointer;
		color: ${({ theme }) => theme.PALETTE.darkBlack};
		font-weight: 400;

		@media ${({ theme }) => theme.DEVICE.tablet} {
			margin: 0 0 8px 0;
		}
	}

	li:last-of-type {
		font-weight: bold;
		@media ${({ theme }) => theme.DEVICE.tablet} {
			margin: 0 0 20px 0;
		}
	}
`;

const Info = styled.ul`
	margin-top: 10px;
`;

const Li = styled.li`
	margin-bottom: 5px;
`;

const CompanyInfo = styled.ul`
	display: flex;
	font-size: 13px;
	margin-bottom: 10px;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		flex-direction: column;
		margin: 0;
	}

	li {
		display: flex;
		align-items: center;
		margin-right: 16px;
		color: #909090;

		@media ${({ theme }) => theme.DEVICE.tablet} {
			margin: 0 0 8px 0;
		}
	}
`;

const CompanyInfo2 = styled.div`
	display: flex;
	color: #909090;
	font-size: 13px;
	@media ${({ theme }) => theme.DEVICE.tablet} {
		flex-direction: column;
		border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray};
	}

	li {
		margin-right: 16px;

		@media ${({ theme }) => theme.DEVICE.tablet} {
			margin: 0 0 8px 0;
		}
	}

	li:last-of-type {
		@media ${({ theme }) => theme.DEVICE.tablet} {
			margin: 0 0 20px 0;
		}
	}
`;

const FooterRight = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		align-items: flex-start;
		margin-top: 20px;
	}
`;
const Icons = styled.div`
	display: flex;
`;
const Icon = styled.div`
	width: 30px;
	height: 30px;
	margin-left: 10px;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin: 0 4px 0 0;
	}

	& img {
		width: 30px;
		height: 30px;

		@media ${({ theme }) => theme.DEVICE.tablet} {
			width: 22px;
			height: 22px;
		}
	}
`;

const CSBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	line-height: 1.5rem;

	@media ${({ theme }) => theme.DEVICE.tablet} {
		align-items: flex-start;
	}
`;

const CsCenter = styled.p`
	font-weight: bold;
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
	color: ${({ theme }) => theme.PALETTE.black};
	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin-bottom: 4px;
	}
`;

const CsCenterInfo = styled.p`
	color: #909090;
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
	@media ${({ theme }) => theme.DEVICE.tablet} {
		margin-bottom: 4px;
	}
`;

const Copyright = styled.p`
	color: #8a8a8a;
	font-size: ${({ theme }) => theme.FONT_SIZE.xsmall};
`;

const S = {
	Wrapper,
	Container,
	FooterLeft,
	LogoBox,
	Logo,
	Registered,
	InfoLink,
	Info,
	Li,
	CompanyInfo,
	CompanyInfo2,
	FooterRight,
	Icons,
	Icon,
	CSBox,
	CsCenter,
	CsCenterInfo,
	Copyright,
};
