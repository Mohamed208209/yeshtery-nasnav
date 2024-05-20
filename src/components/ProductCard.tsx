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
const ProductCard = ({
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
    <div className="flex flex-col items-center justify-center">
      <img loading="lazy" src={photo} alt={title} />
      <p>{description}</p>
      <div className="flex justify-between">
        <div>
          <p>{price} Le</p>
          <p>
            <span>{discount.insteadOf} Le</span>{" "}
            <span>{discount.percentage}%</span>
          </p>
        </div>
        <img src={brand.logo} alt={brand.title} />
      </div>
      <div className="flex">
        <p>{rating} of 5</p>
      </div>
      <p>Pickup From: {from}</p>
    </div>
  );
};

export default ProductCard;
