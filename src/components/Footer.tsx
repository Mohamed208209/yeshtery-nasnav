import AboutUs from "./AboutUs";
import Services from "./Services";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-4 gap-4 p-4 bg-[#3C3C3B] text-white">
      <div className="col-span-2">
        <AboutUs />
      </div>
      <div className="col-span-2 ml-5  ">
        <Services />
      </div>
      <div className="flex justify-between items-center col-span-4">
        <p>@ 2021 yeshtrey, all rights reserved</p>
        <div className="ml-4 flex">
          <img
            src="public/images/cash-on-delivery.png"
            alt="cash on delivery"
          />
          <img src="public/images/visa.png" alt="visa" />
          <img src="public/images/mastercard.png" alt="mastercard" />
        </div>
        <div className="ml-4 items-center flex">
          <p>Powered by nasnav</p>
          <img
            className="w-5 h-4 ml-1"
            src="public/images/nasnav.png"
            alt="nasnav"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
