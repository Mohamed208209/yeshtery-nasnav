const EventBar = () => {
  return (
    <div className="bg-primary text-gray-900 flex justify-between items-center p-2 text-sm">
      <div className="flex items-center space-x-4">
        <button className="focus:outline-none">
          <img src="images/menu.svg" alt="menu" />
        </button>
        <img src="images/logo.svg" alt="logo" />
      </div>
      <div className="flex items-center space-x-4">
        <button>
          <img src="images/left-arrow.svg" alt="left" />
        </button>
        <span>
          Valentine's Day Offers! Buy Two Get One Free{" "}
          <a href="#" className="font-bold underline">
            Shop Now
          </a>
        </span>
        <button>
          <img src="images/right-arrow.svg" alt="right" />
        </button>
        <a href="#" className="flex items-center space-x-1">
          <img src="images/phone.svg" alt="phone" />
          <span>Contact Us</span>
        </a>
        <a href="#" className="flex items-center space-x-1">
          <img src="images/shop-cart.svg" alt="shop cart" />
          <span>Track Order</span>
        </a>
        <a href="#" className="flex items-center space-x-1">
          <img src="images/pointer.svg" alt="pointer" />
          <span>Find A Store</span>
        </a>
      </div>
    </div>
  );
};

export default EventBar;
