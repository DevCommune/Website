import prismadb from "@/lib/prismadb";
import { Prisma } from "@prisma/client"; // Add this line

export const getProfileById = async (profileId: string) => {
  try {
    const profile = await prismadb.profile.findUnique({
      where: {
        id: profileId,
      },
      include: {
        projects: true,
      },
    });

    if (!profile) return null;

    return profile;
  } catch (error: any) {
    throw new Error(error);
  }
};
