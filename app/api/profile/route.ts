import prismadb from "@/lib/prismadb";
import { useUser } from "@clerk/nextjs";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const response = await clerkClient.users.getUser(userId);

    const profile = await prismadb.profile.create({
      data: {
        ...body,
        userId,
        id: response?.username,
        userName: response?.username,
        
      },
    });

    return NextResponse.json(profile);
  } catch (error) {
    console.log("Error at /api/profile POST: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
