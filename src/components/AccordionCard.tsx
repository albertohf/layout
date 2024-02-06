import { useState } from "react";

interface DataProps {
  title: string;
  items: Array<string>;
}

export default function AccordionCard({ data }: { data: DataProps }) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
  const { title, items } = data;

  return (
    <div className="accordion-card-container">
      <button
        className="accordion-button"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span className="accordion-title">{title}</span>
        {accordionOpen ? (
          <span className="accordion-icon">-</span>
        ) : (
          <span className="accordion-icon">+</span>
        )}
      </button>
      <div
        className={`accordion-content ${
          accordionOpen ? "accordion-active" : "accordion-hide"
        }`}
      >
        {items.map((item, index) => (
          <div className="accordion-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
