import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Modal from "./components/Modal";
import Header from "./components/Header";
import Banner from "./components/Banner";
import TipBar from "./components/TipBar";
import TipBarBrand from "./components/TipBarBrand";
import ProductShelf from "./components/ProductShelf";
import TextBanner from "./components/TextBanner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";

function App() {
  return (
    <>
      <div>
        <Modal />
        <Header />
        <Banner />
        <TipBar />
        <div className="home-title-content">
          <h1 className="home-title">Marcas Parceiras</h1>
        </div>
        <TipBarBrand />
        <div className="home-title-content">
          <h1 className="home-title">As Mais Pedidas</h1>
        </div>
        <ProductShelf />
        <TextBanner />
        <Newsletter />
        <Accordion />
        <Footer />
      </div>
    </>
  );
}

export default App;
