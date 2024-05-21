import { products } from "../services/data";
import CustomProgressBar from "./CustomProgressPar";
import ProductCard from "./ProductCard";

const SimilarProducts = () => {
  return (
    <div className="similar-products-container">
      <h1 className="similar-products-title">Similar Products</h1>
      <p className="similar-products-description">
        You may also like these products
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
      <CustomProgressBar value={80} max={100} />
    </div>
  );
};

export default SimilarProducts;
