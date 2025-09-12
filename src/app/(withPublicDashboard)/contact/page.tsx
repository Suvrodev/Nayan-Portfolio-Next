import { Phone, Mail, MapPinHouse } from "lucide-react";

import ContactForm from "@/components/modules/(Public-Dashboard))/Contact/ContactForm/ContactForm";
import { createTitle } from "@/components/utils/functions/metadata";
import ContactLink from "@/components/modules/(Public-Dashboard))/Contact/ContactLink/ContactLink";

export const metadata = createTitle("Contact");

const ContactPage = () => {
  return (
    <div className="overflow-hidden ">
      <div className="min-h-screen flex flex-col justify-center items-center pPadding">
        <div className="flex flex-col md:flex-row gap-10 ">
          {/* Left Side - Contact Info */}
          <div className="w-full md:w-[40%]">
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
                  <p className="pDesc text-gray-400">+88 01710847819</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-3  primaryBox rounded-full">
                  <Mail />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="pDesc text-gray-400">me@sarkarnayan.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="p-3 primaryBox rounded-full">
                  <MapPinHouse />
                </div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="pDesc text-gray-400">
                    15/1 Bagmara Government Primary School, Khulna Sadar-9100,
                    Bangladesh.​
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-[60%]">
            <ContactForm />
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-20">
          <ContactLink />
        </div>

        {/* Footer */}
        {/* <footer className="mt-10 flex flex-col md:flex-row items-center justify-between">
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
          </div>
        </footer> */}
      </div>
    </div>
  );
};

export default ContactPage;
