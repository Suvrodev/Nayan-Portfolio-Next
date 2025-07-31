import Image from "next/image";
import { useState } from "react";

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="mt-4">
      <div className="w-full h-[300px] relative">
        <Image
          src={images[current]}
          alt={`Gig Image ${current}`}
          className="rounded-md object-cover"
          fill
        />
      </div>
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
