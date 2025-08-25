"use client";
import ux1 from "../../../../app/assets/certificate/UX Design-1.jpg";
// import ux2 from "../../../../app/assets/certificate/UX Design-2.jpg";
// import web2 from "../../../../app/assets/certificate/UX Design-2.jpg";
import web1 from "../../../../app/assets/certificate/UX Design-1.jpg";
import responsive from "../../../../app/assets/certificate/Responsive Web Design.jpg";
import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const Certificate = () => {
  const certificateImages = [
    {
      image: ux1,
      title: "UX Design",
    },
    // {
    //   image: ux2,
    //   title: "UX Design",
    // },
    {
      image: web1,
      title: "Web Development with PHP & Laravel",
    },
    // {
    //   image: web2,
    //   title: "Web Development with PHP & Laravel",
    // },
    {
      image: responsive,
      title: "Responsive Web Design",
    },
  ];

  return (
    <div className=" ">
      <h2 className="text-2xl font-bold mb-10">Certificate</h2>
      <Marquee pauseOnHover={true} autoFill={false} speed={50}>
        {certificateImages.map((item, idx) => (
          <div
            key={idx}
            className=" min-w-[300px] max-w-[450px] mx-4 primaryBox flex justify-center items-center"
          >
            <div className=" rounded-lg shadow text-center flex flex-col justify-center items-center py-2">
              <Image
                src={item.image}
                alt={item.title}
                width={450}
                height={550}
                className="rounded object-contain"
              />
              <p className="mt-2 text-white font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Certificate;
