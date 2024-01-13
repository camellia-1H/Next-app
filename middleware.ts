import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See  for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"],
  //   // ignoredRoutes: ["/((?!api|trpc))(_next.*|.+.[w]+$)"],
  ignoredRoutes: [
    "/((?!api|trpc))(_next.*|.+.[w]+$)",
    "/api/posts",
    "/api/users",
  ],

  //   afterAuth(auth, req, evt) {
  //     // console.log(auth);

  //     // Handle users who aren't authenticated
  //     if (!auth.userId && !auth.isPublicRoute) {
  //       return redirectToSignIn({ returnBackUrl: req.url });
  //     }

  //     // if (!auth.userId && auth.isPublicRoute) {
  //     //   return NextResponse.next();
  //     // }

  //     // If the user is logged in and trying to access a protected route, allow them to access route
  //     if (auth.userId && !auth.isPublicRoute) {
  //       return NextResponse.next();
  //     }

  //     // Allow users visiting public routes to access them
  //     return NextResponse.next();
  //   },
});

// export function middleware(request: NextRequest) {
//   // return NextResponse.redirect(new URL('/', request.url))
// }

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
