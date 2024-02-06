import "../styles/newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-title">Recebe Nossa Newsletter</h2>
      <div className="newsletter-content">
        <input
          type="email"
          placeholder="digite seu e-mail"
          className="newsletter-input"
        />
        <button className="newsletter-button">enviar</button>
      </div>
    </div>
  );
}
