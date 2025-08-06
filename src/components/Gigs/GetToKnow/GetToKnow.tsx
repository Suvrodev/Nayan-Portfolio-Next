import Image from "next/image";
import { Star } from "lucide-react";
import nayanImage from "@/app/assets/Nayan.webp";

const GetToKnow = () => {
  return (
    <div className="max-w-4xl mx-auto  p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Get to know Sarkar Nayan</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Profile Image */}
        <div>
          <Image
            src={nayanImage} // Replace with actual image path
            alt="Sarkar Nayan"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-2 text-center md:text-left">
          <h1 className="text-2xl font-bold">Sarkar Nayan</h1>
          <p className=" text-lg">Processional Graphic Design Expert</p>

          {/* Rating */}
          <div className="flex items-center justify-center md:justify-start gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            <span className=" ml-2 font-medium">4.5</span>
            <span className="">(107)</span>
          </div>
        </div>
      </div>
      {/* Contact Button */}
      <button className="primaryButton mt-4">Contact me</button>

      <div className="border p-4 mt-4">
        {/* Details Section */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm md:text-base ">
          <div>
            <p className="font-semibold text-white/60">From</p>
            <p>Bangladesh</p>
          </div>
          <div>
            <p className="font-semibold text-white/60">Member since</p>
            <p>May 2021</p>
          </div>
          <div>
            <p className="font-semibold text-white/60">Last delivery</p>
            <p>1 year</p>
          </div>
          <div>
            <p className="font-semibold text-white/60">Languages</p>
            <p>English</p>
          </div>
        </div>

        {/* Bio */}
        <hr className="my-4" />
        <p className=" text-sm md:text-base leading-relaxed">
          Hi! This is Sarkar. An experienced graphic designer using Adobe
          Photoshop, Illustrator, and Figma with more than 5 years of experience
          developing designs for branding, stationeries, and UI/UX. I enjoy
          creating unique & professional designs for logos, business cards,
          letterheads, envelopes, UI/UX design, and most kinds of print and
          advertising items.
        </p>
      </div>
    </div>
  );
};

export default GetToKnow;
