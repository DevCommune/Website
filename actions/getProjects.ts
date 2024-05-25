import prismadb from "@/lib/prismadb";
import { getProfileById } from "./getProfileById";

export const getProjects = async (searchParams: {
  title: string;
  description: string;
  techStack: string;
}) => {
  try {
    const { title, description, techStack } = searchParams;
    const projects = await prismadb.project.findMany({
      where: {
        title: {
          contains: title,
        },
        description: {
          contains: description,
        },
        techStack: {
          contains: techStack,
        },
      },
    });

    return projects;
  } catch (error: any) {
    console.log(error);
    throw new Error("Error fetching projects", error);
  }
};
