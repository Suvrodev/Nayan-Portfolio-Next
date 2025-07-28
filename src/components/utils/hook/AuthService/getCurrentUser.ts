// 👇 Server action or server-only function
"use server";

import { cookies } from "next/headers";

export const getCurrentUser = async () => {
  const token = (await cookies()).get("token")?.value;

  if (!token) return null;

  // Optionally, decode or verify the token (e.g. JWT)
  // const user = verifyToken(token); // implement this logic based on your app

  return token;
};

export const clearTokenAction = async () => {
  // To clear a cookie, set it with maxAge=0 or expires in the past
  (await cookies()).set("token", "", { path: "/", maxAge: 0 });
};
