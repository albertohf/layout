import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BannerContent from "./BannerContent";
import BannerImg from "../assets/banner1.png";
import BannerMobile from "../assets/bannerMobile.png";

import "../styles/banner.css";

export default function Banner() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <BannerContent
          imgMobile={BannerMobile}
          imgDesktop={BannerImg}
          title={"Promoções de Outono"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <BannerContent
          imgMobile={BannerMobile}
          imgDesktop={BannerImg}
          title={"Promoções de Inverno"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <BannerContent
          imgMobile={BannerMobile}
          imgDesktop={BannerImg}
          title={"Promoções de Verão"}
        />
      </SwiperSlide>
    </Swiper>
  );
}
