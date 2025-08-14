"use client";

import React, { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
// import { FaCalendarAlt } from "react-icons/fa"; // Zoom/calendar icon

const Booking = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      // Floating button
      cal("floatingButton", {
        calLink: "sarkarnayan/30min",
        config: { layout: "month_view" },
      });
      // Optional: embedded UI
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    // <>
    //   {/* Round Booking Button - in case you want custom button */}
    //   <div className="fixed bottom-20 right-20">
    //     <FaCalendarAlt size={24} />
    //   </div>
    // </>

    <div
      className="fixed bottom-20 right-20 p-4 rounded-full cursor-pointer"
      onClick={async () => {
        const cal = await getCalApi({ namespace: "30min" });
        cal("modal", { calLink: "sarkarnayan/30min" });
      }}
    >
      {/* <FaCalendarAlt size={24} color="white" /> */}
    </div>
  );
};

export default Booking;
