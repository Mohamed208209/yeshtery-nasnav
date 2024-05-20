type Props = {
  text: string;
  color: "primary" | "secondary";
};

const CustomButton = ({ text, color }: Props) => {
  const textColor = color === "primary" ? "black" : "white";
  return (
    <div
      className={`bg-${color} text-${textColor} rounded-full text-center py-3 px-8`}
    >
      <button>{text}</button>
    </div>
  );
};

export default CustomButton;
