import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allPost = await db.post.findMany({
      where: {
        published: true,
      },
      orderBy: {
        updateAt: "desc",
      },
    });
    
    return NextResponse.json(allPost);
  } catch (err) {
    console.log(err);
  }
}
