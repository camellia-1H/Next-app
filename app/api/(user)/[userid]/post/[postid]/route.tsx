import { db } from "@/lib/db";
import { NextRequest } from "next/server";

// get post detail
export async function GET(
  req: NextRequest,
  { params }: { params: { userid: string; postid: string } }
) {
  try {
    const data = await db.post.findUnique({
      where: {
        id: params.postid,
      },
    });

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json("Khong tim thay post yeu cau", { status: 400 });
  }
}
