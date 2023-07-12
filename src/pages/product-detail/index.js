import ProductList from "components/ProductList";
import { productList } from "mock/products";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { gothicFont, primaryFont } from "styles/common";
import SUB1 from "./images/1.jpg";
import SUB2 from "./images/2.jpg";
import SUB3 from "./images/3.jpg";
import SUB4 from "./images/4.jpg";
import FAKEPROFILE from "./images/fakeProfile.png";
import RecentlyClicked from "components/RecentlyClicked/RecentlyClicked";
import BasicButton from "components/Button";

const ProductDetailPage = () => {
	const { id } = useParams();
	// console.log(id);
	const TARGET = productList.find(product => product.id === parseInt(id));
	const localPrice = TARGET?.price.toLocaleString("ko-KR");

	if (TARGET)
		return (
			<>
				<RecentlyClicked />
				<S.Container>
					<S.DetailTop>
						<S.ImageContainer>
							<div className="main">
								<img src={TARGET.image} alt="main" />
							</div>
							<div className="sub1">
								<img src={SUB1} alt="sub1" />
							</div>
							<div className="sub2">
								<img src={SUB2} alt="sub2" />
							</div>
							<div className="sub3">
								<img src={SUB3} alt="sub3" />
							</div>
							<div className="sub4">
								<img src={SUB4} alt="sub4" />
							</div>
						</S.ImageContainer>
						<S.InfoContainer>
							<S.ProductName>{TARGET.name}</S.ProductName>
							<S.ProductLocation>
								{TARGET.location}(위도, 경도)
							</S.ProductLocation>
							<S.UserInfo>
								<div style={{ display: "flex" }}>
									<img src={FAKEPROFILE} className="profileImg" />
									<div className="nickname">。그ㅣ염 둥 ② 째원。</div>
								</div>
								<div>
									<div className="degree">매너온도: 36도</div>
									<div className="dealCount">(총 거래 건: 10)</div>
								</div>
							</S.UserInfo>
							<S.Introduction>
								개성과 다양성을 상징하는 아디다스 슈퍼스타가 틀을 깨는 새로운
								버전으로 돌아왔습니다. 과거에서 얻은 영감을 기반으로 모던한
								스트리트웨어에 변화를 주도록 재구성된 아디폼 SST 부츠를
								만나보세요. 지속 가능한 소재로 제작된 부츠 컷 디자인이 미래를
								향해 진화하는 대담한 룩을 선사하고, 아이코닉한 쉘토가 슈퍼스타의
								역사를 재조명합니다. 부드러운 폼 소재를 사용해 편안하고 기분
								좋은 착화감을 제공합니다. 한정된 자원을 절약하고 플라스틱
								폐기물을 줄이기 위해 천연 원료와 재생 소재로 제작된 친환경
								제품입니다.
							</S.Introduction>
							<S.ProductPrice>{localPrice}원</S.ProductPrice>
							<S.ProductButtons>
								<BasicButton
									variant={"white"}
									shape={"primary"}
									size={"medium"}
									children={"❤ Like"}
									style={{
										fontSize: "20px",
										border: "3px solid #404040",
									}}
								/>
								<BasicButton
									variant={"secondary"}
									shape={"primary"}
									size={"medium"}
									children={"Buy Now"}
									style={{
										fontSize: "20px",
										border: "3px solid #404040",
									}}
								/>
							</S.ProductButtons>
							<div>
								<BasicButton
									variant={"primary"}
									shape={"primary"}
									size={"mediumLarge"}
									children={"채팅"}
									style={{
										color: "#ffffff",
										fontSize: "20px",
										border: "3px solid #404040",
										letterSpacing: "5px",
									}}
								/>
							</div>
						</S.InfoContainer>
					</S.DetailTop>
					<div>
						<S.OtherProductTitle>다른 상품 보러가기</S.OtherProductTitle>
						<ProductList productList={productList} />
					</div>
				</S.Container>
			</>
		);
};

export default ProductDetailPage;

const Container = styled.div`
	width: 860px;
	margin: 0 auto;
	padding: 20px 0;
	${primaryFont}
`;

const DetailTop = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 100px;
	padding-top: 25px;
`;

const ImageContainer = styled.div`
	width: 450px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(6, 1fr);
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	.main {
		grid-area: 1 / 1 / 5 / 5;
		margin: 0 auto;
		img {
			width: 450px;
			height: 400px;
			border-radius: 16px;
			border: 3px solid #404040;
			background: #fff;
			/* box-shadow: 4px 4px 0px 0px #404040; */
		}
	}
	.sub1 {
		grid-area: 5 / 1 / 7 / 2;
		margin: 0 auto;
		img {
			width: 100%;
			border-radius: 16px;
			border: 3px solid #404040;
			background: #fff;
			/* box-shadow: 4px 4px 0px 0px #404040; */
		}
	}
	.sub2 {
		grid-area: 5 / 2 / 7 / 3;
		margin: 0 auto;
		img {
			width: 100%;
			border-radius: 16px;
			border: 3px solid #404040;
			background: #fff;
			/* box-shadow: 4px 4px 0px 0px #404040; */
		}
	}
	.sub3 {
		grid-area: 5 / 3 / 7 / 4;
		margin: 0 auto;
		img {
			width: 100%;
			border-radius: 16px;
			border: 3px solid #404040;
			background: #fff;
			/* box-shadow: 4px 4px 0px 0px #404040; */
		}
	}
	.sub4 {
		grid-area: 5 / 4 / 7 / 5;
		margin: 0 auto;
		img {
			width: 100%;
			border-radius: 16px;
			border: 3px solid #404040;
			background: #fff;
			/* box-shadow: 4px 4px 0px 0px #404040; */
		}
	}
`;

const InfoContainer = styled.div`
	width: 340px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ProductName = styled.div`
	font-size: 24px;
`;

const ProductLocation = styled.div`
	padding-top: 10px;
	font-size: 14px;
	color: #767676;
`;

const UserInfo = styled.div`
	padding-top: 20px;
	display: flex;
	justify-content: space-between;
	.profileImg {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.nickname {
		font-size: 14px;
		line-height: 35px;
	}
	.degree {
		font-size: 16px;
	}
	.dealCount {
		font-size: 14px;
	}
`;

const Introduction = styled.div`
	padding-top: 20px;
	border-bottom: 1px solid #b6b6b6;
	padding-bottom: 10px;
	line-height: 23px;
	${gothicFont}
`;

const ProductPrice = styled.div`
	font-size: 28px;
	color: #705ecb;
	text-align: right;
	padding-top: 30px;
`;

const ProductButtons = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 30px 0;
`;

const OtherProductTitle = styled.button`
	width: 260px;
	padding: 10px;
	background-color: ${({ theme }) => theme.PALETTE.primary["light"]};
	${primaryFont}
	font-size: 20px;
	border: 3px solid ${({ theme }) => theme.PALETTE.black};
	border-radius: 12px;
	/* box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.8); */
	margin-bottom: 25px;
`;

const S = {
	Container,
	DetailTop,
	ImageContainer,
	InfoContainer,
	ProductName,
	ProductLocation,
	UserInfo,
	Introduction,
	ProductPrice,
	ProductButtons,
	OtherProductTitle,
};
