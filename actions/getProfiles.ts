import prismadb from "@/lib/prismadb";

export const getProfiles = async (searchParams: {
  name: string;
  collegeName: string;
  degree: string;
  branch: string;
  techStack: string;
}) => {
  try {
    const { name, collegeName, degree, branch, techStack } = searchParams;
    const profiles = await prismadb.profile.findMany({
      where: {
        name: {
          contains: name,
        },
        collegeName,
        degree,
        branch,
        techStack,
      },

      include: { projects: true },
    });

    return profiles;
  } catch (error: any) {
    console.log(error);
    throw new Error("Error fetching profiles", error);
  }
};
