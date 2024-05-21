import AboutUs from "./AboutUs";
import Services from "./Services";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-about">
        <AboutUs />
      </div>
      <div className="footer-services">
        <Services />
      </div>
      <div className="footer-bottom">
        <p className="footer-text">@ 2021 Yeshtrey, all rights reserved</p>
        <div className="footer-payment">
          <img
            className="footer-payment-img"
            src="images/cash-on-delivery.png"
            alt="Cash on delivery"
          />
          <img
            className="footer-payment-img"
            src="images/visa.png"
            alt="Visa"
          />
          <img
            className="footer-payment-img"
            src="images/mastercard.png"
            alt="Mastercard"
          />
        </div>

        <div className="footer-powered">
          <p className="mr-2">Powered by Nasnav</p>
          <img className="w-5 h-4 ml-1" src="images/nasnav.png" alt="Nasnav" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
