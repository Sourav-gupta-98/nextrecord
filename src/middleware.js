import { NextResponse } from "next/server";
export function middleware(request) {
  console.log("middleware");
  // console.log(request.nextUrl.pathname);
  const user = localStorage.getItem("user_id");
  if (user === null) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/about/:path*", "/studentlist/Shiva"],
};
