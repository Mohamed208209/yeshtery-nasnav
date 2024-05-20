const NavBar = () => {
  return (
    <div className="bg-white text-gray-900 flex justify-between items-center p-4 shadow">
      <div className="flex items-center space-x-4">
        <div className="flex items-center border border-gray-300 rounded-full px-2">
          <img src="public/images/search.svg" alt="search" />
          <input
            type="text"
            placeholder="Search"
            className=" px-4 py-2 w-64 "
          />
        </div>
      </div>
      <div className="flex items-center  mx-auto space-x-1">
        <img src="public/images/adidas-large.svg" alt="adidas" />
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="flex items-center space-x-1">
          <img src="public/images/cart.svg" alt="cart" />
          <span>Cart</span>
        </a>
        <a href="#" className="flex items-center space-x-1">
          <img src="public/images/heart.svg" alt="heart" />
          <span>Wishlist</span>
        </a>
        <a href="#" className="flex items-center space-x-1">
          <img src="public/images/person.svg" alt="person" />
          <span>Login</span>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
