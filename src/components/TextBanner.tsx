import { isMobile } from "react-device-detect";
import Banner2 from "../assets/banner2.png";
import BannerMobile2 from "../assets/mobileBanner2.png";

export default function TextBanner() {
  return (
    <div className="banner-text-container">
      <div className="banner-text-content">
        <div className="text-content">
          <h2 className="banner-text-title">Mussum Ipsum</h2>
          <p className="banner-text-paragraph">
            Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço
            uma cachacis que pode alegrar sua vidis. Leite de capivaris, leite
            de mula manquis sem cabeça. Não sou faixa preta cumpadi, sou preto
            inteiris, inteiris. Atirei o pau no gatis, per gatis num morreus.
          </p>
        </div>
        <img
          src={isMobile ? BannerMobile2 : Banner2}
          alt="banner-text-image"
          className="banner-text-image"
        />
      </div>
    </div>
  );
}
