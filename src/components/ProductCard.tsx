import { ProductProps } from "../services/products";

export default function ProductCard({ product }: { product: ProductProps }) {
  const { name, price, description, image, colors } = product;

  return (
    <div className="product-card-container">
      <img src={image} alt="" />

      <div className="product-card-content">
        <div className="product-card-colors">
          {colors.map((item, index) => {
            return (
              <div
                key={index}
                className="product-card-color"
                style={{ backgroundColor: item }}
              ></div>
            );
          })}
        </div>

        <div className="product-card-value">
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
        <div className="product-card-title">{name}</div>
        <div className="product-card-description">{description}</div>
        <button className="product-card-button">Adicionar</button>
      </div>
    </div>
  );
}
