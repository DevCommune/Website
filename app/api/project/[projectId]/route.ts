import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const body = await req.json();
    const { userId } = auth();

    if (!params.projectId) {
      return new NextResponse("Project Id is required", { status: 401 });
    }
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const project = await prismadb.project.update({
      where: {
        id: params.projectId,
      },
      data: {
        ...body,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.log("Error at /api/project/projectId PATCH:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const { userId } = auth();

    if (!params.projectId) {
      return new NextResponse("Project Id is required", { status: 401 });
    }
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const project = await prismadb.project.delete({
      where: {
        id: params.projectId,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.log("Error at /api/project/projectId DELETE:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
