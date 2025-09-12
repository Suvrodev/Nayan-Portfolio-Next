import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="mt-4 w-full overflow-hidden">
      {/* <div className="relative w-full h-[340px] bg-[#F5F5F5] rounded-md"> */}
      <div className="relative w-full h-[455px] bg-[#292929] rounded-md">
        {/* Sliding Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="min-w-full max-h-[455px] relative">
              <Image
                src={img}
                alt={`Gig Image ${index}`}
                fill
                className="object-contain max-h-[455px]"
              />
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black"
        >
          <ChevronLeft />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 overflow-x-auto">
        {images.map((img, index) => (
          <button key={index} onClick={() => setCurrent(index)}>
            <div className="w-[60px] h-[40px] relative">
              <Image
                src={img}
                alt={`Thumb ${index}`}
                fill
                className={`object-contain rounded-md border ${
                  index === current ? "border-black" : "border-gray-300"
                }`}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
