import ProductDetails from "./ProductDetails";
import ProductGallery from "./ProductGallery";
import SimilarProducts from "./SimilarProducts";

export const Product = () => {
  return (
    <main>
      <div className="flex my-14  items-center   flex-col">
        <div className="flex space-x-4">
          <ProductGallery />
          <ProductDetails />
        </div>
        <div className="w-full">
          <SimilarProducts />
        </div>
      </div>
    </main>
  );
};

export default Product;
