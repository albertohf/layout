import { useEffect, useState } from "react";
import { getProducts } from "../services/products";
import { ProductProps } from "../services/products";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import { Navigation } from "swiper/modules";
import "../styles/shelf.css";
import EcommerceProductSkeleton from "./EcommerceProductSkeleton";

export default function ProductShelf() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((product) => {
        setProducts(product);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="shelf-slider-container">
      {isLoading && (
        <div className="skeleton">
          {[...Array(5)].map((_, index) => (
            <EcommerceProductSkeleton key={index} />
          ))}
        </div>
      )}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={15}
        navigation={true}
        centeredSlides={true}
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
            centeredSlides: false,
          },
        }}
        className="myShelfSwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
