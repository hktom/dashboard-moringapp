// middleware all
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token: any = req.cookies.token;
  let url: string =
    process.env.NODE_ENV == "production"
      ? process.env.NEXT_PUBLIC_PRODUCTION_URL!
      : process.env.NEXT_PUBLIC_DEVELOPMENT_URL!;

      return NextResponse.next();

//   if (req.url != url) {
//     return NextResponse.next();
//   }

//   if (token) {
//     return NextResponse.redirect(url + "page/home/");
//   } else {
//     return NextResponse.redirect(url + "auth/login");
//   }
}
