import FAKEIMG from "./images/banner.jpg";
// import FAKEIMG2 from "./images/banner2.jpg";
// import FAKEIMG3 from "./images/banner3.jpg";
import FAKEIMG4 from "./images/banner4.jpg";
import FAKEIMG5 from "./images/banner5.jpg";
import FAKEIMG6 from "./images/banner6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

const Banner = () => {
	const ImageArr = [FAKEIMG, FAKEIMG4, FAKEIMG5, FAKEIMG6];

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
				{ImageArr.map(image => (
					<SwiperSlide className="banner-img">
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
