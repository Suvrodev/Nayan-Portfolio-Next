import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "./components/utils/functions/verifyToken";
import { getCurrentUserToken } from "./components/utils/hook/AuthService/getCurrentUser";

const authRoutes = ["/login", "register"];

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  console.log("Path Name: ", pathname);
  console.log("Middleware");
  // const token = request.cookies.get("token")?.value;
  const token = await getCurrentUserToken();
  const user = verifyToken(token as string);
  console.log("Hello Middleware: ", token);
  console.log("User: ", user);

  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next;
    } else {
      // return NextResponse.redirect(
      //   new URL(
      //     `${process.env.NEXT_PUBLIC_CLIENT_API}/login?redirectPath=${pathname}`,
      //     request.url
      //   )
      // );
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  // matcher: ["/about", "/registration"],
  matcher: "/admin-dashboard/:path*",
};
