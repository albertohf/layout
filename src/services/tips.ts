export interface TipsProps {
  id?: number;
  icon: string;
  title: string;
  description: string;
}

export async function getTips(): Promise<TipsProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          icon: "https://i.ibb.co/R4YJ6JD/world.png",
          title: "Produtos importados",
          description: "Produto de Alta Qualidade",
        },
        {
          id: 2,
          icon: "https://i.ibb.co/MPGBTcx/store.png",
          title: "Estoque no Brazil",
          description: "Produtos mais perto de você!",
        },
        {
          id: 3,
          icon: "https://i.ibb.co/LQD3Rtt/change.png",
          title: "Trocas Garantidas",
          description: "Trocas em até 48 horas, vejas as regras",
        },
        {
          id: 4,
          icon: "https://i.ibb.co/SyhKqtv/sale.png",
          title: "Ganhe 5% off",
          description: "Pagando à vista no Cartão",
        },
        {
          id: 5,
          icon: "https://i.ibb.co/qCFtj8v/truck.png",
          title: "Frete Grátis",
          description: "Em compras acima de R$ 499,00 ",
        },
      ]);
    }, 3000);
  });
}
