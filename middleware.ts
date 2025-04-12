import { getToken } from "next-auth/jwt";
import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withAuth(
  async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    const isAuth = await getToken({ req });
    const protectedRoutes = ["/admin"];
    const isAuthRoute = pathname.startsWith("/auth");
    const isProtectedRoute = protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );
    if (!isAuth && isProtectedRoute) {
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }
    if (isAuthRoute && isAuth) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/auth/:path*"],
};
