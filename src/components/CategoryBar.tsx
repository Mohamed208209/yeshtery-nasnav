const CategoryBar = () => {
  return (
    <div>
      <ul className="categorybar-container">
        <li>
          <button className="categorybar-link-button" type="button">
            <a href="#">Men</a>
          </button>
        </li>
        <li>
          <button className="categorybar-link-button" type="button">
            <a href="#">Women</a>
          </button>
        </li>
        <li>
          <button className="categorybar-link-button" type="button">
            <a href="#">Unisex</a>
          </button>
        </li>
        <li>
          <button className="categorybar-link-button" type="button">
            <a href="#">Kids</a>
          </button>
        </li>
        <li>
          <button className="categorybar-link-button" type="button">
            <a href="#">Best Sellers</a>
          </button>
        </li>
        <li>
          <button className="categorybar-link-button" type="button">
            <a href="#">New Arrivals</a>
          </button>
        </li>
        <li>
          <button className="categorybar-link-button" type="button">
            <a href="#">Offers</a>
          </button>
        </li>
      </ul>
      <p className="categorybar-links">
        <button className="categorybar-link-button" type="button">
          <a href="#">Men</a>
        </button>{" "}
        /{" "}
        <button className="categorybar-link-button" type="button">
          <a href="#">Clothing</a>
        </button>{" "}
        /{" "}
        <button className="categorybar-link-button" type="button">
          <a href="#">Tops</a>
        </button>{" "}
        /{" "}
        <button className="categorybar-link-button" type="button">
          <a href="#">Adidas</a>
        </button>{" "}
        /{" "}
        <button className="categorybar-link-button" type="button">
          <a href="#">Adidas Black T-Shirt</a>
        </button>
      </p>
    </div>
  );
};

export default CategoryBar;
