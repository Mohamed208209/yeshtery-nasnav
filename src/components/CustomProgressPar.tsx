import React from "react";

type CustomProgressBarProps = {
  value: number;
  max: number;
};

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({
  value,
  max,
}) => {
  const percentage = (value / max) * 100;
  return (
    <div className="w-[80%] mx-auto mt-4">
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-secondary rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default CustomProgressBar;
