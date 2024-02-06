import TopBar from "./TopBar";
import { isMobile } from "react-device-detect";
import Drawer from "../assets/icons/drawer.svg";
import Logo from "../assets/icons/MZ.svg";
import HeaderLogo from "../assets/headerLogo.png";
import Search from "../assets/icons/icon-busca.svg";
import Cart from "../assets/icons/store.svg";
import Dress from "../assets/icons/dress.svg";

import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";

import "../styles/header.css";

export default function Header() {
  return (
    <div>
      <TopBar />
      {isMobile ? (
        <div className="mobile-header">
          <div className="header-icon">
            <img src={Drawer} alt="" width="32" height="32" />
          </div>
          <div className="header-logo">
            <img
              style={{ cursor: "pointer" }}
              src={Logo}
              alt=""
              width="110"
              height="11"
            />
          </div>
          <div className="header-cart">
            <img
              style={{ cursor: "pointer" }}
              src={Search}
              alt=""
              width="24"
              height="24"
            />
            <img
              style={{ cursor: "pointer" }}
              src={Cart}
              alt=""
              width="24"
              height="24"
            />
          </div>
        </div>
      ) : (
        <div className="desktop-header-container">
          <div className="desktop-header-content">
            <div className="header-logo-desck">
              <a href="/">
                <img src={HeaderLogo} alt="maeztra Logo" />
              </a>
            </div>
            <div className="search-content">
              <form>
                <input
                  type="text"
                  placeholder="O Que Você Busca?"
                  name="search"
                  className="search-desk"
                />
                <button className="search-buttom" type="submit">
                  Buscar
                </button>
              </form>
            </div>
            <div className="header-desk-icons">
              <div className="myaccont">
                <FaRegUser size={16} />
                Minha Conta
              </div>
              <div className="myfav">
                <FaRegHeart size={16} />
                Meus Favoritos
              </div>
              <div className="mycart">
                <LiaShoppingBagSolid size={16} />
                Meu Carrinho
              </div>
            </div>
          </div>
          <div className="desktop-menu">
            <div className="menu-item highlight">
              <img src={Dress} alt="" />
              Novidades
            </div>
            <div className="menu-item">Vestidos</div>
            <div className="menu-item">Roupas</div>
            <div className="menu-item">Sapatos</div>
            <div className="menu-item">Lingerie</div>
            <div className="menu-item">Acessórios</div>
            <div className="menu-item">OUTLET</div>
          </div>
        </div>
      )}
    </div>
  );
}
