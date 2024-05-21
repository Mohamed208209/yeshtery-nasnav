import React from "react";
import SubscribeButton from "./SubscribeButton";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border-l pl-2 border-gray-200 border-dotted ">
      <div className="col-span-1 md:col-span-3 text-center ">
        <p className="mb-4 text-lg font-semibold">
          Subscribe to our newsletter
        </p>
        <SubscribeButton />
      </div>

      <div className="col-span-1 md:col-span-2  ">
        <ul className="space-y-2">
          {[
            "About Us",
            "Contact Us",
            "Track Order",
            "Terms & Conditions",
            "Privacy Policy",
            "Sell With Us",
            "Shipping And Returns",
          ].map((item) => (
            <li key={item}>
              <button className="w-full text-left p-2 hover:bg-gray-200 rounded">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-1">
        <ul className="space-y-2 border-l pl-2 border-gray-200 border-dotted">
          {[
            { src: "images/facebook.svg", alt: "facebook", text: "YESHTERY" },
            { src: "images/linkedin.svg", alt: "linkedin", text: "YESHTERY" },
            { src: "images/instagram.svg", alt: "instagram", text: "YESHTERY" },
            { src: "images/twitter.svg", alt: "twitter", text: "YESHTERY" },
          ].map((item) => (
            <li key={item.alt} className="flex items-center">
              <button className="flex items-center w-full p-2 hover:bg-gray-200 rounded">
                <img src={item.src} alt={item.alt} className="w-6 h-6 mr-2" />
                <span>{item.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
