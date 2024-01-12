import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allUsers = await db.user.findMany({});

    return NextResponse.json(allUsers);
  } catch (err) {
    console.log(err);
  }
}
