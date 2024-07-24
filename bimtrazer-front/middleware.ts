import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const privateRoutes = /\/(create|blocks|edit)/;
  const isPrivate = privateRoutes.test(request.url);

  if (isPrivate && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!isPrivate && token) {
    return NextResponse.redirect(new URL("/blocks", request.url));
  }
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
