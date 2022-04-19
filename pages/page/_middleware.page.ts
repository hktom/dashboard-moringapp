// middleware page
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token: any = req.cookies.token;
  let url: string =
    process.env.NODE_ENV == "production"
      ? process.env.NEXT_PUBLIC_PRODUCTION_URL!
      : process.env.NEXT_PUBLIC_DEVELOPMENT_URL!;

  if (token) {
    return NextResponse.next();
  }

  return NextResponse.redirect(url + "auth/login");
}
