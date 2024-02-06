import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function TopBar() {
  return (
    <div className="slider-container-top">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="carrousel-content">
            Acompanhe as melhores promoções disponíveis aqui na Maeztra.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carrousel-content">
            Fique por dentro das ofertas imperdíveis que a Maeztra tem para
            você.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carrousel-content">
            Não perca as melhores promoções oferecidas pela Maeztra, confira
            agora!
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
