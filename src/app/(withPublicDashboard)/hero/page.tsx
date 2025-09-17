"use client";

import Image from "next/image";
import { FC } from "react";

const HeroSectionPage: FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0f0f0f] flex flex-col md:flex-row items-center justify-center px-6 md:px-16 overflow-hidden">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-start text-white space-y-6">
        <p className="text-gray-400">-Hello</p>
        <h1 className="text-3xl md:text-5xl font-bold leading-snug">
          I&apos;M <span className="text-white">SARKAR NAYAN</span>,{" "}
          <span className="text-yellow-400">DESIGNER</span> &{" "}
          <span className="text-purple-500">DEVELOPER</span>
        </h1>

        {/* Tags */}
        <div className="flex gap-4 mt-2">
          <span className="bg-purple-600 text-white px-3 py-1 text-xs rounded">
            Jeff Raskin
          </span>
          <span className="bg-yellow-400 text-black px-3 py-1 text-xs rounded">
            Steve Jobs
          </span>
        </div>

        {/* Happy Clients */}
        <div className="flex items-center gap-3 mt-6">
          <div className="flex -space-x-3">
            <Image
              src="https://i.pravatar.cc/40?img=1"
              alt="client"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="https://i.pravatar.cc/40?img=2"
              alt="client"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="https://i.pravatar.cc/40?img=3"
              alt="client"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="https://i.pravatar.cc/40?img=4"
              alt="client"
              width={40}
              height={40}
              className="rounded-full border-2 border-white"
            />
          </div>
          <p className="text-sm">100+ Happy Clients</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href="#"
            className="bg-white text-black px-6 py-2 rounded-full shadow hover:bg-gray-200"
          >
            Resume
          </a>
          <a
            href="#"
            className="bg-white text-black px-6 py-2 rounded-full shadow hover:bg-gray-200"
          >
            Fiverr
          </a>
          <a
            href="#"
            className="bg-white text-black px-6 py-2 rounded-full shadow hover:bg-gray-200"
          >
            Upwork
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col items-center justify-center relative mt-12 md:mt-0">
        {/* Profile Image */}
        <div className="relative w-[280px] h-[320px] z-10">
          <Image
            src="/profile.png" // 👉 এখানে তোমার ছবির path বসাও (public ফোল্ডারে রাখো)
            alt="Profile"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Orange Shape */}
        <div className="absolute -left-10 top-20 w-48 h-48 bg-yellow-500 rounded-lg -z-0 rotate-6"></div>

        {/* Circular Button */}
        <div className="absolute -right-16 bottom-10 w-36 h-36 rounded-full border border-gray-700 flex items-center justify-center text-white">
          <div className="rotate-0">
            <span className="block text-xs uppercase tracking-widest">
              UI/UX Design • Web Development • Market
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPage;
