import FAKEIMG from "./images/banner.png";
import FAKEIMG2 from "./images/banner2.png";
import FAKEIMG3 from "./images/banner3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

const Banner = () => {
	const ImageArr = [FAKEIMG, FAKEIMG2, FAKEIMG3];

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
				onSwiper={swiper => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
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
`;

const S = { BannerContainer };
