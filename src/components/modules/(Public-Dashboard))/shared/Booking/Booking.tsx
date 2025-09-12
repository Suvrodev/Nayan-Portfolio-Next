"use client";
import "./Booking.css";
import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { FaCalendarAlt } from "react-icons/fa"; // Zoom/calendar icon

const Booking = () => {
  // useEffect(() => {
  //   (async function () {
  //     const cal = await getCalApi({ namespace: "30min" });
  //     // Floating button
  //     cal("floatingButton", {
  //       calLink: "sarkarnayan/30min",
  //       config: { layout: "month_view", },
  //     });
  //     // Optional: embedded UI
  //     cal("ui", { hideEventTypeDetails: false, layout: "month_view", });
  //   })();
  // }, []);

  useEffect(() => {
    getCalApi({ namespace: "30min" });
  }, []);

  const openCal = async () => {
    const cal = await getCalApi({ namespace: "30min" });
    cal("modal", { calLink: "sarkarnayan/30min" });
  };

  return (
    // <div
    //   className="fixed top-1/2 right-6 -translate-y-1/2 p-10 rounded-full cursor-pointer"
    //   onClick={async () => {
    //     const cal = await getCalApi({ namespace: "30min" });
    //     cal("modal", { calLink: "sarkarnayan/30min" });
    //   }}
    // ></div>

    <button
      onClick={openCal}
      // className="fixed right-6 top-1/2 -translate-y-1/2 bg-black w-[150px] h-16 rounded-full flex items-center justify-center shadow-lg  z-[9999]"
      className="book-now-button"
    >
      {/* icon */}
      <FaCalendarAlt size={24} color="white" />
      Book Now
    </button>
  );
};

export default Booking;
