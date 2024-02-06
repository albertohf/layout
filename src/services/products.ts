export interface ProductProps {
  id?: number;
  image: string;
  name: string;
  price: number;
  description: string;
  colors: string[];
}

export async function getProducts(): Promise<ProductProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          image: "https://images2.imgbox.com/3d/11/88icXw1M_o.png",
          name: "Faux Suede Mini Skirt",
          price: 500,
          description:
            "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
          colors: [
            "rgb(222, 172, 113)",
            "rgb(211, 113, 100)",
            "rgb(100, 151, 211)",
            "rgb(60, 59, 121)",
          ],
        },
        {
          id: 2,
          image: "https://images2.imgbox.com/86/ec/N7A6EZ3z_o.png",
          name: "Ruched Rose Print Mini Skirt",
          price: 320,
          description:
            "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
          colors: [
            "rgb(28, 26, 25)",
            "rgb(216, 78, 75)",
            "rgb(207, 201, 176)",
            "rgb(234, 233, 229)",
          ],
        },
        {
          id: 3,
          image: "https://images2.imgbox.com/3d/11/88icXw1M_o.png",
          name: "Faux Suede Mini Skirt",
          price: 500,
          description:
            "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
          colors: [
            "rgb(222, 172, 113)",
            "rgb(211, 113, 100)",
            "rgb(100, 151, 211)",
            "rgb(60, 59, 121)",
          ],
        },
        {
          id: 4,
          image: "https://images2.imgbox.com/86/ec/N7A6EZ3z_o.png",
          name: "Ruched Rose Print Mini Skirt",
          price: 320,
          description:
            "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
          colors: [
            "rgb(28, 26, 25)",
            "rgb(216, 78, 75)",
            "rgb(207, 201, 176)",
            "rgb(234, 233, 229)",
          ],
        },
        {
          id: 5,
          image: "https://images2.imgbox.com/3d/11/88icXw1M_o.png",
          name: "Faux Suede Mini Skirt",
          price: 500,
          description:
            "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
          colors: [
            "rgb(222, 172, 113)",
            "rgb(211, 113, 100)",
            "rgb(100, 151, 211)",
            "rgb(60, 59, 121)",
          ],
        },
        {
          id: 6,
          image: "https://images2.imgbox.com/86/ec/N7A6EZ3z_o.png",
          name: "Ruched Rose Print Mini Skirt",
          price: 320,
          description:
            "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
          colors: [
            "rgb(28, 26, 25)",
            "rgb(216, 78, 75)",
            "rgb(207, 201, 176)",
            "rgb(234, 233, 229)",
          ],
        },
        {
          id: 7,
          image: "https://images2.imgbox.com/3d/11/88icXw1M_o.png",
          name: "Faux Suede Mini Skirt",
          price: 500,
          description:
            "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
          colors: [
            "rgb(222, 172, 113)",
            "rgb(211, 113, 100)",
            "rgb(100, 151, 211)",
            "rgb(60, 59, 121)",
          ],
        },
        {
          id: 8,
          image: "https://images2.imgbox.com/86/ec/N7A6EZ3z_o.png",
          name: "Ruched Rose Print Mini Skirt",
          price: 320,
          description:
            "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
          colors: [
            "rgb(28, 26, 25)",
            "rgb(216, 78, 75)",
            "rgb(207, 201, 176)",
            "rgb(234, 233, 229)",
          ],
        },
        {
          id: 9,
          image: "https://images2.imgbox.com/3d/11/88icXw1M_o.png",
          name: "Faux Suede Mini Skirt",
          price: 500,
          description:
            "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
          colors: [
            "rgb(222, 172, 113)",
            "rgb(211, 113, 100)",
            "rgb(100, 151, 211)",
            "rgb(60, 59, 121)",
          ],
        },
        {
          id: 10,
          image: "https://images2.imgbox.com/86/ec/N7A6EZ3z_o.png",
          name: "Ruched Rose Print Mini Skirt",
          price: 320,
          description:
            "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
          colors: [
            "rgb(28, 26, 25)",
            "rgb(216, 78, 75)",
            "rgb(207, 201, 176)",
            "rgb(234, 233, 229)",
          ],
        },
      ]);
    }, 3000);
  });
}
