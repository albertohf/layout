import { isMobile } from "react-device-detect";

interface imageProps {
  imgMobile: string;
  imgDesktop: string;
  title: string;
}

export default function BannerContent(props: imageProps) {
  const { imgMobile, imgDesktop, title } = props;

  return (
    <div className="banner">
      <div>
        <img
          className="banner-image"
          src={isMobile ? imgMobile : imgDesktop}
          alt=""
        />
      </div>
      <div className="banner-content-text">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-description">
          Confiras os melhores looks para combinar com você nesse Outono
        </p>
        <button className="banner-button">Conferir</button>
      </div>
    </div>
  );
}
