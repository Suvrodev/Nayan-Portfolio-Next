// src/components/utils/functions/getIsAdminFromHeaders.ts

// import { headers } from "next/headers";

// export const getIsAdminFromHeaders = async (): Promise<boolean> => {
//   const headersList = headers();
//   let pathname = "/";
//   const fullUrl = headersList.get("x-url") || headersList.get("referer");

//   if (fullUrl) {
//     try {
//       pathname = new URL(fullUrl).pathname;
//     } catch (error) {
//       console.error("Invalid URL in referer/x-url:", fullUrl);
//       console.error("Error:", error);
//     }
//   }

//   return pathname.startsWith("/admin-dashboard");
// };

import { headers } from "next/headers";

export const getIsAdminFromHeaders = async (): Promise<boolean> => {
  const headersList = await headers(); // ✅ await লাগবে
  let pathname = "/";
  const fullUrl = headersList.get("x-url") || headersList.get("referer");

  if (fullUrl) {
    try {
      pathname = new URL(fullUrl).pathname;
    } catch (error) {
      console.error("Invalid URL in referer/x-url:", fullUrl);
      console.error("Error:", error);
    }
  }

  return pathname.startsWith("/admin-dashboard");
};
