const NavBar = ({ count }: { count: number }) => {
  // TODO: Add interactivity
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
        <NavLink
          href="#"
          imgSrc="images/cart.svg"
          imgAlt="Shopping cart"
          text="Cart"
        />
        <NavLink
          href="#"
          imgSrc="images/heart.svg"
          imgAlt="Wishlist"
          text="Wishlist"
        />
        <NavLink
          href="#"
          imgSrc="images/person.svg"
          imgAlt="User login"
          text="Login"
        />
      </div>
    </div>
  );
};

type NavLinkProps = {
  href: string;
  imgSrc: string;
  imgAlt: string;
  text: string;
};

const NavLink = ({ href, imgSrc, imgAlt, text }: NavLinkProps) => (
  <a href={href} className="navbar-link">
    <img src={imgSrc} alt={imgAlt} width="24" height="24" />
    <span>{text}</span>
  </a>
);

export default NavBar;
