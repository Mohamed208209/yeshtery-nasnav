const ProductGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <img
          className="w-96"
          src="public/images/product.png"
          alt="Main Product"
        />
      </div>

      <div className="flex  space-x-2 mt-4">
        <button>
          <img src="public/images/left-arrow.svg" alt="left" />
        </button>
        <img
          src="public/images/thumbnail-1.png"
          alt="Thumbnail 1"
          className="w-20 h-20"
        />
        <img
          src="public/images/thumbnail-2.png"
          alt="Thumbnail 2"
          className="w-20 h-20"
        />
        <img
          src="public/images/thumbnail-3.png"
          alt="Thumbnail 3"
          className="w-20 h-20"
        />
        <img
          className="w-20 h-20"
          src="public/images/thumbnail-4.png"
          alt="Thumbnail 4"
        />
        <button>
          <img src="public/images/right-arrow.svg" alt="right" />
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;
