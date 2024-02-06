import { Swiper, SwiperSlide } from "swiper/react";

import Comma from "../assets/comma.png";
import Zara from "../assets/zara.png";
import AnnT from "../assets/annT.png";
import Forever from "../assets/forever.png";
import Melissa from "../assets/melissa.png";

import "../styles/tipBar.css";

export default function TipBarBrand() {
  return (
    <div className="tip-brand-card-container">
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
            centeredSlides: false,
          },
        }}
      >
        <SwiperSlide>
          <div className="tip-brand-card-content">
            <img src={Comma} alt="" className="tip-brand-card-image"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tip-brand-card-content">
            <img src={Melissa} alt="" className="tip-brand-card-image"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tip-brand-card-content">
            <img src={Forever} alt="" className="tip-brand-card-image"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tip-brand-card-content">
            <img src={Zara} alt="" className="tip-brand-card-image"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tip-brand-card-content">
            <img src={AnnT} alt="" className="tip-brand-card-image"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
