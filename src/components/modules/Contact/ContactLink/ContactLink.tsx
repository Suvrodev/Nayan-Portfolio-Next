"use client";
import goLink from "@/components/utils/functions/goLink";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";

const ContactLink = () => {
  return (
    <div className=" flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-5  gap-6 ">
        {[
          {
            icon: <FaFacebook />,
            url: "https://www.facebook.com/sarkarnayans",
            label: "Facebook",
          },
          {
            icon: <FaTwitter />,
            url: "https://twitter.com/sarkarnayans",
            label: "Twitter",
          },
          {
            icon: <FaDribbble />,
            url: "https://dribbble.com/sarkarnayans",
            label: "Dribbble",
          },
          {
            icon: <FaInstagram />,
            url: "https://www.instagram.com/sarkarnayans/",
            label: "Instagram",
          },
          {
            icon: <FaBehance />,
            url: "https://www.behance.net/sarkarnayans",
            label: "Behance",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="primaryBox rounded-[50px] px-6 py-3 flex items-center gap-2 cursor-pointer "
            onClick={() => goLink(item.url)}
          >
            {item.icon} {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactLink;
