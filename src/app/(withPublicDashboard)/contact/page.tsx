import { Phone, Mail, MapPinHouse } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";
import Link from "next/link";
import ContactForm from "@/components/modules/Contact/ContactForm/ContactForm";
const ContactPage = () => {
  return (
    <div className="overflow-hidden ">
      <div className="min-h-screen  pageMargin">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div>
            <h4 className=" font-semibold mb-2">Contact Info</h4>
            <h1 className="text-3xl font-bold mb-2">Get In Touch</h1>
            <p className="text-gray-300 mb-6">
              Don’t be afraid man! Just say hello
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-3 border primaryBox rounded-full">
                  <Phone />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-gray-400">(302) 555-0107</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3  primaryBox rounded-full">
                  <Mail />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-400">
                    tanya.hill@example.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="p-3 primaryBox rounded-full">
                  <MapPinHouse />
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm text-gray-400">775 Rolling Green Rd.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <ContactForm />
        </div>

        {/* Social Media */}
        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-5  gap-6 ">
            {[
              { icon: <FaFacebook />, label: "Facebook" },
              { icon: <FaTwitter />, label: "Twitter" },
              { icon: <FaDribbble />, label: "Dribbble" },
              { icon: <FaInstagram />, label: "Instagram" },
              { icon: <FaBehance />, label: "Behance" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="primaryBox rounded-[50px] px-6 py-3 flex items-center gap-2 "
              >
                {item.icon} {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-center">
            Copyright © 2025
            <span className="text-purple-400 font-semibold ml-2">
              Sarkar Nayan
            </span>{" "}
            — All Rights Reserved
          </p>
          <div className="mt-2 space-x-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href={"/about"} className="hover:text-white">
              About
            </Link>
            <Link href={"/project"} className="hover:text-white">
              Project
            </Link>
            <Link href={"/contact"} className="text-purple-400">
              Contact
            </Link>
            {/* {navItems?.map((item) => (
              <Link to={item.path}>{item.label}</Link>
            ))} */}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;
