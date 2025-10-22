"use client";
import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { FaCalendarAlt } from "react-icons/fa";
import "./bookingDashboard.css"; // <-- we'll add small custom CSS here

const BookingDashborad = () => {
  useEffect(() => {
    getCalApi({ namespace: "30min" });
  }, []);

  const openCal = async () => {
    const cal = await getCalApi({ namespace: "30min" });
    cal("modal", { calLink: "sarkarnayan/30min" });
  };

  return (
    <div className="dashboard-booking-wrapper">
      <button onClick={openCal} className="dashboard-booking-btn">
        <FaCalendarAlt size={18} />
        <span>Book Now</span>
      </button>
    </div>
  );
};

export default BookingDashborad;
