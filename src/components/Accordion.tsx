import AccordionCard from "./AccordionCard";
import "../styles/accordion.css";

import { isMobile } from "react-device-detect";
import FooterMenu from "./FooterMenu";

interface DataProps {
  title: string;
  items: Array<string>;
}

const data: DataProps[] = [
  {
    title: "Informações",
    items: [
      "Quem Somos",
      "Prazo de Envio",
      "Trocas e Devoluções",
      "Promoções e Cupons",
    ],
  },
  {
    title: "Minha Conta",
    items: ["Minha Conta", "Meus Pedidos", "Cadastre-se"],
  },
  { title: "Onde nos Encontrar", items: ["Lojas", "Endereço"] },
];

export default function Accordion() {
  return (
    <>
      {isMobile ? (
        <div className="accordion-container">
          {data.map((item, index) => (
            <AccordionCard key={index} data={item} />
          ))}
        </div>
      ) : (
        <div className="footer-menu-container">
          <FooterMenu data={data} />
        </div>
      )}
    </>
  );
}
