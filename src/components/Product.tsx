import ProductDetails from "./ProductDetails";
import ProductGallery from "./ProductGallery";
import SimilarProducts from "./SimilarProducts";

export const Product = () => {
  return (
    <main className="flex flex-col mt-8 border-t border-dotted border-gray-500 py-8 my-14">
      <div className="flex flex-col lg:flex-row lg:space-x-4 gap-8 justify-center">
        <ProductGallery />
        <ProductDetails />
      </div>
      <div className="w-full mt-8">
        <SimilarProducts />
      </div>
    </main>
  );
};

export default Product;
