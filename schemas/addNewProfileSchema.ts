import { z } from "zod";

export const addNewProfileFormSchema = z.object({
  name: z.string().min(5, {
    message: "Name should be atleast 5 characters long",
  }),
  email: z.string().min(5),
  about: z
    .string()
    .min(10, {
      message: "About should be atleast 10 characters long",
    })
    .max(200, {
      message: "About should be less than 200 characters",
    }),
  image: z.string().min(1, {
    message: "Image is required",
  }),
  coverImage: z.string().min(1, {
    message: "Image is required",
  }),
  country: z.string().min(1, {
    message: "Country is required",
  }),
  state: z.string().min(1, {
    message: "State is required",
  }),
  city: z.string().optional(),
  address: z.string().min(5, {
    message: "Address is required",
  }),
  collegeName: z.string().min(5, {
    message: "College Name is required",
  }),
  degree: z.string().min(1, {
    message: "Degree is required",
  }),
  branch: z.string().min(1, {
    message: "Enter your branch name",
  }),
  presentYear: z.string().min(1, {
    message: "Present year of study",
  }),
  graduationYear: z.string().optional(),
  contact: z.string().min(10, {
    message: "Enter your contact number",
  }),
  whatsapp: z.string().optional(),
  linkedIn: z.string().optional(),
  github: z.string().optional(),
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  portfolio: z.string().optional(),
  webdev: z.boolean().optional(),
  appdev: z.boolean().optional(),
  ml: z.boolean().optional(),
  ai: z.boolean().optional(),
  blockchain: z.boolean().optional(),
  cloud: z.boolean().optional(),
  uiux: z.boolean().optional(),
  coding: z.boolean().optional(),
  c: z.boolean().optional(),
  cpp: z.boolean().optional(),
  java: z.boolean().optional(),
  python: z.boolean().optional(),
  javascript: z.boolean().optional(),
  nextjs: z.boolean().optional(),
  nodejs: z.boolean().optional(),
  techStack: z.string().optional(),
  experience: z.string().optional(),
});
