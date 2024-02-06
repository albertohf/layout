import { useEffect, useState } from "react";
import modalImage from "../assets/modalimage.png";
import enviar from "../assets/icons/enviar.svg";
import mailIcon from "../assets/icons/newsletter-mail-icon.svg";
import "../styles/modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const modalToggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setTimeout(() => {
      setModal(!modal);
    }, 4000);
  }, []);

  return (
    <>
      {modal ? (
        <div className="modal-wrapper" onClick={modalToggle}>
          <div
            className="modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div onClick={modalToggle} className="modal-button-close">
              Fechar
            </div>
            <div className="modal-left">
              <img className="modal-image" src={modalImage} alt="" />
            </div>
            <div className="modal-right">
              <img src={mailIcon} alt="" width="28" height="30" />
              <div className="modal-text-content">
                <h3 className="modal-title">Bem Vindo à MAEZTRA</h3>
                <h2 className="modal-text">
                  Receba em Primeira mão <br />
                  <span className="modal-text-span">
                    desconto e ofertas exclusivas
                  </span>
                </h2>
              </div>
              <input
                className="modal-input"
                type="email"
                placeholder="Digite seu e-mail"
              />
              <div className="modal-button">
                enviar
                <img src={enviar} alt="" width="12" height="20" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
