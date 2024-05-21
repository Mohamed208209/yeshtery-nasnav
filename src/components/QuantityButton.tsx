const QuantityButton = () => {
  // TODO: Add Interactivity
  return (
    <div className="flex justify-between gap-2 bg-gray-200 rounded-full w-[60%] p-1">
      <button
        className="bg-primary text-black text-center text-[1.5em] w-12 rounded-full"
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="w-3/4 text-center p-2" aria-live="polite">
        1
      </span>
      <button
        className="bg-primary text-black text-center text-[1.5em] w-12 rounded-full"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
