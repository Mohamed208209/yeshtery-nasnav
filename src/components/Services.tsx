import SubscribeButton from "./SubscribeButton";

const Services = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-3">
        <p className="mb-4">Subscribe to our newsletter</p>
        <SubscribeButton />
      </div>

      <div className="col-span-2">
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Track Order</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Sell With Us </li>
          <li>Shipping And Returns</li>
        </ul>
      </div>
      <div className="col-span-1">
        <ul>
          <li>
            <img src="public/images/facebook.svg" alt="facebook" />
            <span>YESHTERY</span>
          </li>
          <li>
            <img src="public/images/linkedin.svg" alt="linkedin" />{" "}
            <span>YESHTERY</span>
          </li>
          <li>
            <img src="public/images/instagram.svg" alt="instagram" />{" "}
            <span>YESHTERY</span>
          </li>
          <li>
            <img src="public/images/twitter.svg" alt="twitter" />{" "}
            <span>YESHTERY</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
