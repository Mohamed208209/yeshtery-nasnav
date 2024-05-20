import type { ProductCardProps } from "../components/ProductCard";

export const products: ProductCardProps[] = [
  {
    title: "Product 1",
    description: "Product 1 description",
    photo: "/public/images/product-1.png",
    price: 100,
    brand: {
      title: "Brand 1",
      logo: "/public/images/adidas.svg",
    },
    discount: {
      insteadOf: 200,
      percentage: 50,
    },
    rating: 5,
    from: "Store 1",
  },
  {
    title: "Product 2",
    description: "Product 2 description",
    photo: "/public/images/product-2.png",
    price: 200,
    brand: {
      title: "Brand 2",
      logo: "/public/images/adidas.svg",
    },
    discount: {
      insteadOf: 300,
      percentage: 70,
    },
    rating: 4,
    from: "Store 2",
  },
  {
    title: "Product 3",
    description: "Product 3 description",
    photo: "/public/images/product-3.png",
    price: 300,
    brand: {
      title: "Brand 3",
      logo: "/public/images/adidas.svg",
    },
    discount: {
      insteadOf: 400,
      percentage: 90,
    },
    rating: 3,
    from: "Store 3",
  },

  {
    title: "Product 4",
    description: "Product 4 description",
    photo: "/public/images/product-4.png",
    price: 300,
    brand: {
      title: "Brand 4",
      logo: "/public/images/adidas.svg",
    },
    discount: {
      insteadOf: 400,
      percentage: 90,
    },
    rating: 3,
    from: "Store 4",
  },
];
