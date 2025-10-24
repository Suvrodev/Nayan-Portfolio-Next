"use client";

import Link from "next/link";
import React from "react";
// import BookingDashborad from "../../(Public-Dashboard))/shared/Booking/BookingDashboard/BookingDashborad";
import sendEmail from "@/components/utils/functions/sendEmail";
import goCall from "@/components/utils/functions/goCall";

const PublicDashboardFooter = () => {
  return (
    <footer className="mt-2 md:mt-10 text-[#ccc] text-sm border-t border-[#333] pt-6">
      {/* Contact Info */}
      <div className="space-y-2">
        <p>
          <span className="font-semibold text-white">Email:</span>{" "}
          <button
            onClick={() => sendEmail("me@sarkarnayan.com")}
            className="text-[#ccc] hover:text-white transition-colors duration-200 underline-offset-2 hover:underline"
          >
            me@sarkarnayan.com
          </button>
        </p>

        <p>
          <span className="font-semibold text-white">Phone:</span>{" "}
          <button
            onClick={() => goCall("8801710847819")}
            className="text-[#ccc] hover:text-white transition-colors duration-200 underline-offset-2 hover:underline"
          >
            +88 01710847819
          </button>
        </p>
      </div>

      {/* Divider */}
      <div className="my-4 h-[1px] w-full bg-[#2a2a2a]" />

      {/* Copyright + Links */}
      <div className="space-y-3">
        <p className="leading-relaxed">
          Copyright ©2025{" "}
          <span className="font-semibold text-white">Sarkar Nayan</span>
          <br />
          All Rights Reserved.
        </p>

        <div className="flex flex-wrap gap-3 ">
          <Link
            href="/terms"
            className="hover:text-white transition-colors duration-200"
          >
            Terms & Conditions
          </Link>
          <span className="text-[#555]">|</span>
          <Link
            href="/policy"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Booking Dashboard */}
      <div className="mt-2 md:mt-6">
        {/* <BookingDashborad /> */}
        <Link
          href={"https://www.fiverr.com/sarkar_nayan"}
          target="_blank"
          className="inline-block"
        >
          <button className="primaryButton">Fiver</button>
        </Link>
      </div>
    </footer>
  );
};

export default PublicDashboardFooter;
