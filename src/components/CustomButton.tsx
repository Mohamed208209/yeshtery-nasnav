import React from "react";

type Props = {
  text: string;
  color: "primary" | "secondary";
};

const CustomButton = ({ text, color }: Props) => {
  const textColor = color === "primary" ? "text-black" : "text-white";
  const bgColor = color === "primary" ? "bg-primary" : "bg-secondary";

  return (
    <button
      className={`rounded-3xl py-3 text-center px-10 ${bgColor} ${textColor} focus:outline-none`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
