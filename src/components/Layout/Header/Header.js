import styled from "styled-components";
import { color, font } from "styles/common";

const Header = () => {
	return (
		<>
			<S.Container>
				<S.Wrapper>
					<S.Title>PPYONG PPYONG</S.Title>
					<S.Subtitle>
						<div>중고거래</div>
						<div>무료나눔</div>
						<div>실시간 시세</div>
					</S.Subtitle>
					<S.SearchBar placeholder=" 물품명, 태그명을 검색해 보세요 "></S.SearchBar>
					<S.SearchImage src="img/searchtest.jpg"></S.SearchImage>
					<S.ImageWrapper>
						<S.Image src="img/signup.jpg"></S.Image>
						<S.Image src="img/login.jpg"></S.Image>
						<S.Image src="img/mypage.jpg"></S.Image>
						<S.Image src="img/chat.jpg"></S.Image>
					</S.ImageWrapper>
				</S.Wrapper>
			</S.Container>
			<S.NameWrapper>
				<S.ImageName>JOIN</S.ImageName>
				<S.ImageName>LOGIN</S.ImageName>
				<S.ImageName>MYPAGE</S.ImageName>
				<S.ImageName>TALK</S.ImageName>
			</S.NameWrapper>
		</>
	);
};

export default Header;
const Subtitle = styled.div`
	display: flex;
	width: 300px;
	position: relative;
	left: 10px;
	justify-content: space-around;
`;
const NameWrapper = styled.div`
	width: 178px;
	display: flex;
	bottom: 25px;
	position: relative;
	justify-content: space-around;
	margin: 0 auto;
	left: 440px;
	p:nth-child(2) {
		padding-left: 4px;
	}
`;
const ImageName = styled.p`
	margin-left: 0px;
	${font}
	font-size: 12px;
`;

const SearchImage = styled.img`
	width: 16px;
	position: relative;
	right: 15px;
	bottom: 2px;
`;
const SearchBar = styled.input`
	position: relative;
	top: 2px;
	left: 20px;
	padding-bottom: 6px;
	width: 230px;
	border: none;
	border-bottom: 1.3px solid #404040;
	::placeholder {
		color: black;
		font-size: 13px;
	}
`;
const ImageWrapper = styled.div`
	width: 190px;
	position: relative;
	bottom: 10px;
	height: 73px;
	padding-left: 10px;
	border-left: 2px solid #404040;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const Image = styled.img`
	position: relative;
	width: 18px;
	height: 18px;
`;

const Title = styled.div`
	font-size: 43px;
	font-weight: 900;
	word-spacing: -10px;
	${color}
	-webkit-text-stroke: 0.1px black;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	${font}
	width: 1060px;
	height: 90px;
`;

const Container = styled.div`
	display: flex;
	width: 100%;
	height: 73px;
	border-bottom: 2px solid #404040;
`;

const S = {
	Wrapper,
	Container,
	Title,
	Image,
	ImageWrapper,
	SearchBar,
	SearchImage,
	Subtitle,
	NameWrapper,
	ImageName,
};
