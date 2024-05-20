import { products } from "../services/data";
import ProductCard from "./ProductCard";
const SimilarProducts = () => {
  return (
    <div className="mx-auto w-[80%]">
      <h1 className="text-secondary  font-bold">Similar Products</h1>
      <p className="text-gray-500">You may also like these products</p>
      <div className="flex gap-3">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
