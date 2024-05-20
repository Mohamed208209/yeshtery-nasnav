import CustomButton from "./CustomButton";
import QuantityButton from "./QuantityButton";

const ProductDetails = () => {
  return (
    <div className="max-w-sm mx-auto  ">
      <header>
        <img className="mb-2" src="images/adidas.svg" alt="adidas" />
        <h1 className="text-lg font-bold">
          Adidas black t-Shirt lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </h1>
        <p className="text-gray-500">Men</p>
      </header>
      <div className="text-yellow-500 text-[1.5em] my-4">
        ★★★★☆ <span className="text-black font-bold">4.9 of 5</span>{" "}
        <span className="text-gray-500 text-[.7em]"> 22 Rates</span>
      </div>
      <div className="text-secondary text-[1.8em] ">
        9,999 LE{" "}
        <span className="text-gray-500 line-through text-[.7em]">9,999 LE</span>{" "}
        <span className="font-bold bg-primary text-[0.8em] text-black ">
          - 30% Off
        </span>
      </div>
      <div className="border border-gray-300 rounded"></div>
      <p className="font-bold text-lg my-4">Size</p>
      <div className="flex gap-4 text-[0.8em] ">
        <button className="border h-16 w-16 font-bold text-secondary  rounded-full border-gray-300  text-center px-1 ">
          Small
        </button>

        <button className="border h-16 w-16 font-bold text-secondary  rounded-full border-gray-300  text-center px-1 ">
          Medium
        </button>

        <button className="border h-16 w-16 font-bold text-secondary  rounded-full border-gray-300  text-center px-1 ">
          Large
        </button>

        <button className="border h-16 w-16 font-bold text-secondary  rounded-full border-gray-300  text-center px-1 ">
          X Large
        </button>
        <button className="border h-16 w-16 font-bold text-secondary  rounded-full border-gray-300  text-center px-1 ">
          XX Large
        </button>
      </div>
      <p className="font-bold text-lg my-4">Color</p>{" "}
      <div className="mt-2 flex gap-3">
        <img src="images/red-tshirt.png" alt="Red T-Shirt" />{" "}
        <img src="images/black-tshirt.png" alt="Black T-Shirt" />
      </div>
      <div className="mt-4">
        <p className="font-bold text-lg my-2"> Quantity:</p>
        <QuantityButton />
      </div>
      <div className="mt-4 flex gap-5 ">
        <CustomButton color="secondary" text="Add To Cart" />
        <CustomButton color="primary" text="Pick From Store" />
      </div>
    </div>
  );
};

export default ProductDetails;
