import CustomButton from "./CustomButton";
import QuantityButton from "./QuantityButton";

const ProductDetails = () => {
  return (
    <div className="container">
      <header>
        <img src="images/adidas.svg" alt="Adidas logo" />
        <h1>
          Adidas black t-Shirt lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </h1>
        <p>Men</p>
      </header>
      <div className="rating">
        ★★★★☆ <span>4.9 of 5</span>
        <span className="rates"> 22 Rates</span>
      </div>
      <div className="price">
        9,999 LE
        <span className="original-price">9,999 LE</span>
        <span className="discount">- 30% Off</span>
      </div>
      <div className="divider"></div>
      <p className="font-bold text-lg my-4">Size</p>
      <div className="size-options">
        {["Small", "Medium", "Large", "X Large", "XX Large"].map((size) => (
          <button type="button" key={size} aria-label={`Select size ${size}`}>
            {size}
          </button>
        ))}
      </div>
      <p className="font-bold text-lg my-4">Color</p>
      <div className="color-options">
        <img src="images/red-tshirt.png" alt="Red T-Shirt" />
        <img src="images/black-tshirt.png" alt="Black T-Shirt" />
      </div>
      <div className="quantity">
        <p className="font-bold text-lg my-2">Quantity:</p>
        <QuantityButton />
      </div>
      <div className="actions">
        <CustomButton color="secondary" text="Add To Cart" />
        <CustomButton color="primary" text="Pick From Store" />
      </div>
    </div>
  );
};

export default ProductDetails;
