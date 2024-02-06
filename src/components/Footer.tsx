import { FaInstagram, FaLinkedinIn, FaCcVisa } from "react-icons/fa6";
import { FaFacebookSquare, FaYoutube, FaCcMastercard } from "react-icons/fa";
import "../styles/footer.css";

import VtexLogo from "../assets/vtexlogo.png";
import MaeztraLogo from "../assets/maeztralogo.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="social-icons">
        <FaInstagram size={32} color="#FFFFFF" />
        <FaFacebookSquare size={32} color="#FFFFFF" />
        <FaLinkedinIn size={32} color="#FFFFFF" />
        <FaYoutube size={32} color="#FFFFFF" />
      </div>
      <div className="credit-cards-icons">
        <FaCcVisa size={32} color="#FFFFFF" />
        <FaCcMastercard size={32} color="#FFFFFF" />
        <FaCcVisa size={32} color="#FFFFFF" />
        <FaCcMastercard size={32} color="#FFFFFF" />
      </div>
      <div className="footer-logo">
        <div className="vtex">
          Powered by
          <img src={VtexLogo} alt="" />
        </div>
        <div className="maeztra">
          Developed by
          <img src={MaeztraLogo} alt="" />
        </div>
      </div>
    </div>
  );
}
