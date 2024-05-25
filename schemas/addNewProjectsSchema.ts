import { z } from "zod";

export const addNewProjectsSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "Title must be at least 3 characters long",
    })
    .max(20),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters long",
  }),
  banner: z.string().min(1, {
    message: "Image is required",
  }),
  githubLink: z.string().min(5, {
    message: "Github link is required",
  }),
  demoLink: z.string().optional(),
  price: z.coerce.number().optional(),
  techStack: z.string().min(5, {
    message: "Describe Project Tech Stack",
  }),
  react: z.boolean().optional(),
  reactnative: z.boolean().optional(),
  flutter: z.boolean().optional(),
  nextjs: z.boolean().optional(),
  mongodb: z.boolean().optional(),
  express: z.boolean().optional(),
  nodejs: z.boolean().optional(),
  firebase: z.boolean().optional(),
  mysql: z.boolean().optional(),
  postgresql: z.boolean().optional(),
  graphql: z.boolean().optional(),
  html: z.boolean().optional(),
  css: z.boolean().optional(),
  javascript: z.boolean().optional(),
  typescript: z.boolean().optional(),
  shadcn: z.boolean().optional(),
  free: z.boolean().optional(),
});
