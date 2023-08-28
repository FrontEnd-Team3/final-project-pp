import FAKEIMG from "./images/banner.jpg";
import FAKEIMG2 from "./images/banner2.jpg";
import FAKEIMG3 from "./images/banner3.jpg";
import FAKEIMG4 from "./images/banner4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Banner = () => {
	const ImageArr = [FAKEIMG, FAKEIMG2, FAKEIMG3, FAKEIMG4];
	const route = ["전자기기", "여름옷", "인형", "향수"];
	const navigate = useNavigate();

	return (
		<S.BannerContainer>
			<Swiper
				className="mySwiper"
				modules={[Navigation, Pagination]}
				spaceBetween={10}
				slidesPerView={1}
				centeredSlides={true}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				{ImageArr.map((image, i) => (
					<SwiperSlide
						className="banner-img"
						onClick={() => navigate(`search/${route[i]}`)}
					>
						<img src={image} style={{ width: "100%" }} />
					</SwiperSlide>
				))}
			</Swiper>
		</S.BannerContainer>
	);
};

export default Banner;

const BannerContainer = styled.div`
	padding: 30px 0;
	height: auto;
	margin: 0 auto;
`;

const S = { BannerContainer };
