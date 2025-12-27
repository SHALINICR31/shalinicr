import { useState } from "react";

const ImageCarousel = ({ images, width = 520, height = 300 }) => {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative mt-4 flex items-center justify-center">
      {/* LEFT BUTTON */}
      <button
        onClick={prevImage}
        className="absolute left-0 z-10 bg-black/60 text-white px-3 py-1 rounded-full hover:bg-accent transition"
      >
        ‹
      </button>

      {/* IMAGE */}
      <img
        src={images[current]}
        alt="carousel"
        style={{ width, height }}
        className="object-cover rounded-lg transition"
      />

      {/* RIGHT BUTTON */}
      <button
        onClick={nextImage}
        className="absolute right-0 z-10 bg-black/60 text-white px-3 py-1 rounded-full hover:bg-accent transition"
      >
        ›
      </button>
    </div>
  );
};

export default ImageCarousel;
