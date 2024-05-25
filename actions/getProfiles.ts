import prismadb from "@/lib/prismadb";

export const getProfiles = async (searchParams: {
  name: string;
  userName: string;
}) => {
  try {
    const { name, userName } = searchParams;
    const profiles = await prismadb.profile.findMany({
      where: {
        name: {
          contains: name,
        },
        userName: {
          contains: userName,
        },
      },

      include: { projects: true },
    });

    return profiles;
  } catch (error: any) {
    console.log(error);
    throw new Error("Error fetching profiles", error);
  }
};
