"use client";
// import logoImage from "../../../../assets/HeaderImage/Logo.png";
import logoImage from "@/app/assets/HeaderImage/Logo.png";
import { navItems } from "@/components/utils/Array/navItems";
import goLink from "@/components/utils/functions/goLink";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaDribbble,
  FaBehance,
  FaGithub,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import PublicDashboardFooter from "./PublicDashboardFooter";

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/sarkarnayans" },
  { icon: <FaTwitter />, url: "https://twitter.com/sarkarnayans" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/sarkarnayans/" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/sarkarnayans/" },
  { icon: <FaGithub />, url: "https://github.com/nayansarkars" },
  { icon: <FaBehance />, url: "https://www.behance.net/sarkarnayans" },
  { icon: <FaDribbble />, url: "https://dribbble.com/sarkarnayans" },
  { icon: <FaPinterest />, url: "https://www.pinterest.com/sarkarnayans" },
  { icon: <FaWhatsapp />, url: "https://wa.me/message/V3FSQYVKY6HQL1" },
];

const PublicDashboard = () => {
  const location = usePathname();
  return (
    <div className="bg-[#141414] h-[100vh] text-white pl-8 overflow-hidden sticky top-0 ">
      {/* Logo */}
      <div className="mt-20 mb-16">
        <Link href="/">
          {/* <image src={logoImage} className="w-[70%]" /> */}
          {/* <img src={logoImage} alt="Sarkar Nayan" className="w-[70%]" /> */}
          <Image
            src={logoImage}
            alt="Sarkar Nayan"
            width={150}
            height={150}
            className="w-[70%]"
          />
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-4 font-bold">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={` ${
              location == item?.path
                ? "text-white underline decoration-2 underline-offset-4 inline"
                : "text-[#e5e5e5] inline"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 items-center mt-8">
        {socialLinks.map((item, index) => (
          <Link
            key={index}
            href=""
            onClick={() => goLink(item.url)}
            className="size-2 hover:scale-150 transition-all"
          >
            {item.icon}
          </Link>
        ))}
      </div>

      {/* Footer */}
      <PublicDashboardFooter />
    </div>
  );
};

export default PublicDashboard;
