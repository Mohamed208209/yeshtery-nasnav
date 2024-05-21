const ProductGallery = () => {
  return (
    <div className="product-gallery-container">
      {/* Main Product Image */}
      <div className="product-gallery-main">
        <img src="images/product.png" alt="Main Product" />
      </div>

      {/* Thumbnail Gallery */}
      <div className="product-gallery-thumbnails">
        {/* Left Arrow Button */}
        <button type="button">
          <img src="images/left-arrow.svg" alt="left" />
        </button>
        {/* Thumbnails */}
        {[1, 2, 3, 4].map((index) => (
          <img
            key={index}
            src={`images/thumbnail-${index}.png`}
            alt={`Thumbnail ${index}`}
          />
        ))}
        {/* Right Arrow Button */}
        <button type="button">
          <img src="images/right-arrow.svg" alt="right" />
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;
