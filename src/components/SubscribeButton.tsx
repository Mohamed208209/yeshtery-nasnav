const SubscribeButton = () => {
  return (
    <div className="flex rounded-full p-2 items-center justify-between bg-white">
      <input
        style={{ border: "none" }}
        className="h-[5.5vh] w-[80%] text-black outline-none transparent-input"
        type="text"
        placeholder="Enter your email"
      />
      <button className="flex items-center gap-2 h-11 bg-primary rounded-full p-2 text-black">
        <span> Subscribe</span>
        <img src="images/subscribe.svg" alt="subscribe" />
      </button>
    </div>
  );
};

export default SubscribeButton;
