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
          icon: "/maeztra-page/src/assets/icons/imports.svg",
          title: "Produtos importados",
          description: "Produto de Alta Qualidade",
        },
        {
          id: 2,
          icon: "/maeztra-page/src/assets/icons/estoque.svg",
          title: "Estoque no Brazil",
          description: "Produtos mais perto de você!",
        },
        {
          id: 3,
          icon: "/maeztra-page/src/assets/icons/change.svg",
          title: "Trocas Garantidas",
          description: "Trocas em até 48 horas, vejas as regras",
        },
        {
          id: 4,
          icon: "/maeztra-page/src/assets/icons/sale.svg",
          title: "Ganhe 5% off",
          description: "Pagando à vista no Cartão",
        },
        {
          id: 5,
          icon: "/maeztra-page/src/assets/icons/truck.svg",
          title: "Frete Grátis",
          description: "Em compras acima de R$ 499,00 ",
        },
      ]);
    }, 3000);
  });
}
