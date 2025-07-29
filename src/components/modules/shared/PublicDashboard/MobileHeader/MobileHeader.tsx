"use client";
import "./MobileHeader.css";
import { useState } from "react";
// import logoImage from "../../../../assets/HeaderImage/Logo.png";
import logoImage from "../../../../../app/assets/HeaderImage/Logo.png";
import MobileHeaderOption from "./MobileHeaderOption/MobileHeaderOption";
import Link from "next/link";
import Image from "next/image";
const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("Handle Click");
  };

  return (
    <div className="relative bg-[#141414]">
      <div className="  w-full  flex justify-between items-center py-2 px-5 bgColor relative z-20">
        <div className="flex items-center justify-start gap-x-2  h-[50px]">
          {/* <img src={logo} alt="" className=" w-[50px] h-[50px] rounded-full" />
          <h1 className="font-bold">Boundless Reads</h1> */}
          <Link href={"/"}>
            <Image
              src={logoImage}
              alt="Sarkar Nayan"
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className="">
          <div
            className={`menu-icon ${isOpen ? "open" : ""}`}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        className={`absolute  w-full transition-all duration-700 ${
          //   isOpen ? "top-[66px] left-0" : "-top-[400px] "
          isOpen ? "top-[66px] right-0" : "top-[66px]  right-[800px]"
        }`}
      >
        <MobileHeaderOption handleClick={handleClick} />
      </div>
    </div>
  );
};

export default MobileHeader;
