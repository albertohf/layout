import { useState, useEffect } from "react";
import TipBarCard from "./TipbarCard";
import { getTips } from "../services/tips";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/tipBar.css";

import { TipsProps } from "../services/tips";
import TipSkeleton from "./TipSkeleton";

export default function TipBar() {
  const [tips, setTips] = useState<TipsProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTips()
      .then((tips) => {
        setTips(tips);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="tip-bar-container">
      <h2 className="tip-bar-title">Por que comprar na Maeztra? </h2>

      <div className="tip-bar-content">
        {isLoading && (
          <div className="skeleton">
            {[...Array(5)].map((_, index) => (
              <TipSkeleton key={index} />
            ))}
          </div>
        )}
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: "auto",
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
          {tips.map((tip) => (
            <SwiperSlide key={tip.id}>
              <TipBarCard
                title={tip.title}
                description={tip.description}
                icon={tip.icon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
