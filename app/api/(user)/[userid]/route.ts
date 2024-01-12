import { db } from "@/lib/db";
import { NextRequest } from "next/server";

// get user detail
export async function GET(
  req: NextRequest,
  { params }: { params: { userid: string } }
) {
  try {
    const data = await db.user.findUnique({
      where: {
        id: params.userid,
      },
    });

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json("Khong tim thay user yeu cau", { status: 400 });
  }
}
