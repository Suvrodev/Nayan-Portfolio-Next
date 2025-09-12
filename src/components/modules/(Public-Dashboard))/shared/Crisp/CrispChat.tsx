/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; // required if using Next.js 13+ with app directory
import { useEffect } from "react";

// Extend the Window interface
declare global {
  interface Window {
    $crisp?: any[];
    CRISP_WEBSITE_ID?: string;
  }
}

const CrispChat = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.$crisp) {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "07985a50-a114-4eb4-a96f-bb7db5bbbd03";

      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    }
  }, []);

  return null; // Crisp loads itself, no visible JSX needed
};

export default CrispChat;
