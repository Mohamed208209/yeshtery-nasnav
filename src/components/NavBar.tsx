const NavBar = () => {
  return (
    <div className="navbar-container">
      {/* Search Button */}
      <div className="navbar-search">
        <div className="navbar-search-input-container">
          <img
            src="images/search.svg"
            alt="Search icon"
            width="24"
            height="24"
          />
          <input
            type="text"
            placeholder="Search"
            className="navbar-search-input"
            aria-label="Search"
          />
        </div>
      </div>
      {/* Logo */}
      <div className="navbar-logo">
        <img
          src="images/adidas-large.svg"
          alt="Adidas logo"
          width="100"
          height="100"
        />
      </div>
      {/* Login, Cart and Wishlist */}
      <div className="navbar-links">
        <a href="#" className="navbar-link">
          <img
            src="images/cart.svg"
            alt="Shopping cart"
            width="24"
            height="24"
          />
          <span>Cart</span>
        </a>
        <a href="#" className="navbar-link">
          <img src="images/heart.svg" alt="Wishlist" width="24" height="24" />
          <span>Wishlist</span>
        </a>
        <a href="#" className="navbar-link">
          <img
            src="images/person.svg"
            alt="User login"
            width="24"
            height="24"
          />
          <span>Login</span>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
