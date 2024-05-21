import React from "react";

export type ProductCardProps = {
  photo: string;
  title: string;
  description: string;
  price: number;
  brand: {
    title: string;
    logo: string;
  };
  discount: {
    insteadOf: number;
    percentage: number;
  };
  rating: number;
  from: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  photo,
  description,
  brand,
  price,
  discount,
  rating,
  from,
}: ProductCardProps) => {
  return (
    <div className="product-card-container">
      <img
        loading="lazy"
        className="product-card-image"
        src={photo}
        alt={title}
      />
      <p className="product-card-description">{description}</p>
      <div className="product-card-price-container">
        <div className="product-card-price">
          <p>{price} LE</p>
          <p>
            <span className="product-card-orginal-price">
              {discount.insteadOf} LE
            </span>{" "}
            <span className="product-card-discount">
              {discount.percentage}% Off
            </span>
          </p>
        </div>
        <img
          className="product-card-brand-logo"
          src={brand.logo}
          alt={brand.title}
        />
      </div>
      <div className="product-card-rating">
        <p>
          {" "}
          <span className="product-card-stars">★★★★☆ </span>
          {rating} of 5
        </p>
      </div>
      <p className="product-card-location">Pickup From: {from}</p>
    </div>
  );
};

export default ProductCard;
