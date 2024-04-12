import { i18nRouter } from "next-i18n-router";
import i18nConfig from "../i18nConfig";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  // Check if we're dealing with a route that requires authentication
  const isDashboardRoute = request.nextUrl.pathname.startsWith("/dashboard");

  // If it's a dashboard route and there's no token, redirect to the login page
  if (isDashboardRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl.origin));
  }

  // Continue with i18n routing if the route is not dashboard or if the user is authenticated
  return i18nRouter(request, i18nConfig);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: [
    "/dashboard/:path*", // Apply middleware to all dashboard routes
    "/((?!api|static|.*\\..*|_next).*)", // Existing matchers
  ],
};
