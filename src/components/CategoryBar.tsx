const CategoryBar = () => {
  return (
    <div>
      <ul className="flex justify-between bg-black text-white p-4">
        <li>Men</li>
        <li>Women</li>
        <li>Unisex</li>
        <li>Kids</li>
        <li>Best Sellers</li>
        <li>New Arrivals</li>
        <li>Offers</li>
      </ul>
      <p>
        <a className="underline" href="#">
          Men
        </a>{" "}
        /{" "}
        <a className="underline" href="#">
          Clothing
        </a>{" "}
        /
        <a className="underline" href="#">
          {" "}
          Tops{" "}
        </a>
        <a className="underline" href="#">
          {" "}
          Adidas{" "}
        </a>{" "}
        /<a href="#"> Adidas Black T-Shirt</a>
      </p>
    </div>
  );
};

export default CategoryBar;
