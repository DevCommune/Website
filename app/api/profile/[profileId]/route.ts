import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { profileId: string } }
) {
  try {
    const body = await req.json();
    const { userId } = auth();

    if (!params.profileId) {
      return new NextResponse("Profile Id is required", { status: 401 });
    }
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const profile = await prismadb.profile.update({
      where: {
        id: params.profileId,
      },
      data: {
        ...body,
        userId,
      },
    });

    return NextResponse.json(profile);
  } catch (error) {
    console.log("Error at /api/profile/profileId PATCH:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { profileId: string } }
) {
  try {
    const { userId } = auth();

    if (!params.profileId) {
      return new NextResponse("Profile Id is required", { status: 401 });
    }
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const profile = await prismadb.profile.delete({
      where: {
        id: params.profileId,
      },
    });

    return NextResponse.json(profile);
  } catch (error) {
    console.log("Error at /api/profile/profileId DELETE:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
