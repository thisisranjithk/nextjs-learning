// import { NextRequest, NextResponse } from "next/server";
import middleware from "next-auth/middleware";
// export default function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-login", request.url));
// }

export default middleware;
export const config = {
  matcher: ["/users"],
};
