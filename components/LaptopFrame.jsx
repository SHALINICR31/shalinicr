const LaptopFrame = ({ image }) => {
  return (
    <div className="relative w-full max-w-md mx-auto mt-4">
      {/* LAPTOP FRAME */}
      <img
        src="/frames/laptop.jpg"
        alt="Laptop Frame"
        className="w-full select-none"
      />

      {/* SCREEN */}
      <div className="absolute top-[12%] left-[10%] w-[80%] h-[68%] overflow-hidden rounded-md">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LaptopFrame;
