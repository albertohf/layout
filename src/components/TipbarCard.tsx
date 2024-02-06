import { TipsProps } from "../services/tips";

export default function TipBarCard({ title, description, icon }: TipsProps) {
  return (
    <div className="tip-card-container">
      <img src={icon} alt="" width="32" height="32" />
      <div>
        <h2 className="tip-card-title">{title}</h2>
        <span className="tip-card-description">{description}</span>
      </div>
    </div>
  );
}
