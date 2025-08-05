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
    // <div className="mt-4">
    //   <div className="w-full h-[340px] relative bg-[#F5F5F5]">
    //     <Image
    //       src={images[current]}
    //       alt={`Gig Image ${current}`}
    //       className="rounded-md object-contain mx-auto "
    //       // width={450}
    //       // height={250}
    //       fill
    //     />
    //   </div>
    //   <div className="flex gap-2 mt-4 overflow-x-auto">
    //     {images.map((img, index) => (
    //       <button key={index} onClick={() => setCurrent(index)}>
    //         <Image
    //           src={img}
    //           alt={`Thumb ${index}`}
    //           width={60}
    //           height={40}
    //           className={`rounded-md border ${
    //             index === current ? "border-black" : "border-gray-300"
    //           }`}
    //         />
    //       </button>
    //     ))}
    //   </div>
    // </div>

    // <div className="mt-4">
    //   <div className="w-full h-[340px] relative bg-[#F5F5F5] rounded-md overflow-hidden">
    //     {/* Current Image */}
    //     <Image
    //       src={images[current]}
    //       alt={`Gig Image ${current}`}
    //       className="object-contain mx-auto"
    //       fill
    //     />

    //     {/* Prev Button */}
    //     <button
    //       onClick={handlePrev}
    //       className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black"
    //     >
    //       ◀
    //     </button>

    //     {/* Next Button */}
    //     <button
    //       onClick={handleNext}
    //       className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black"
    //     >
    //       ▶
    //     </button>
    //   </div>

    //   {/* Thumbnails */}
    //   <div className="flex gap-2 mt-4 overflow-x-auto">
    //     {images.map((img, index) => (
    //       <button key={index} onClick={() => setCurrent(index)}>
    //         <Image
    //           src={img}
    //           alt={`Thumb ${index}`}
    //           width={60}
    //           height={40}
    //           className={`rounded-md border ${
    //             index === current ? "border-black" : "border-gray-300"
    //           }`}
    //         />
    //       </button>
    //     ))}
    //   </div>
    // </div>

    <div className="mt-4 w-full overflow-hidden">
      <div className="relative w-full h-[340px] bg-[#F5F5F5] rounded-md">
        {/* Sliding Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="min-w-full h-full relative">
              <Image
                src={img}
                alt={`Gig Image ${index}`}
                fill
                className="object-contain"
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
            <Image
              src={img}
              alt={`Thumb ${index}`}
              width={60}
              height={40}
              className={`rounded-md border ${
                index === current ? "border-black" : "border-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
