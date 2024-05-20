const QuantityButton = () => {
  return (
    <div className="flex jutify-between gap-2 bg-gray-200 rounded-full w-[60%] p-1">
      <div className="bg-primary text-black text-center text-[1.5em]   w-12 rounded-full">
        <button>-</button>
      </div>
      <div className="w-3/4 text-center p-2">1</div>
      <div className="bg-primary text-black text-center text-[1.5em]  w-12 rounded-full">
        <button>+</button>
      </div>
    </div>
  );
};

export default QuantityButton;
