"use client";

import React from "react";
import { ProfileWithProjects } from "../Forms/AddProfileForm";
import useLocation from "@/hooks/useLocation";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSwatchbook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Album,
  CalendarCheck,
  CalendarClock,
  Globe,
  MapPin,
  School,
} from "lucide-react";
import { IoLogoWhatsapp, IoSchoolSharp } from "react-icons/io5";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import IconItem from "../layout/Icon-text-flex";
import { cn } from "@/lib/utils";
import { BiSolidSchool } from "react-icons/bi";
import ProjectCard from "../Projects/ProjectCard";

export const Tbaspace = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn("w-full h-[160px] lg:h-[200px]")}>
      <ScrollArea className={cn("w-full h-[170px]")}>{children}</ScrollArea>
    </div>
  );
};

const ProfileDetailsClient = ({
  profile,
}: {
  profile: ProfileWithProjects;
}) => {
  const { getCountryByCode, getStateByCode } = useLocation();
  const country = getCountryByCode(profile.country);
  const state = getStateByCode(profile.country, profile.state);
  return (
    <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 pb-2">
      <div className="relative">
        {profile.coverImage ? (
          <div className="aspect-square overflow-hidden relative w-full h-[170px] md:h-[300px] rounded-lg">
            <Image
              src={profile.coverImage}
              alt={profile.name + "cover image"}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <Skeleton className="aspect-square bg-gray-500/40 overflow-hidden relative w-full h-[200px] md:h-[300px] rounded-lg" />
        )}

        {profile.image ? (
          <div className="absolute bottom-2 left-3 lg:bottom-3 lg:left-5 bg-gradient-to-r from-[#fa8cff] via-[#9182ff] to-[#0476ff] rounded-full">
            <div className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-full flex items-center justify-center">
              <Image
                src={profile.image}
                alt={profile.name + "profile image"}
                width={90}
                height={90}
                className="object-cover rounded-full block lg:hidden"
              />
              <Image
                src={profile.image}
                alt={profile.name + "profile image"}
                width={170}
                height={170}
                className="object-cover rounded-full hidden lg:block"
              />
            </div>
          </div>
        ) : (
          <Skeleton className="absolute bottom-3 left-5 w-[200px] h-[200px] bg-slate-500/30 rounded-full flex items-center justify-center" />
        )}
      </div>
      <div className="flex flex-row items-center justify-between w-full pr-3">
        <div className="flex flex-col">
          <h3 className="text-xl lg:text-2xl font-semibold">{profile.name}</h3>
          <p className="text-sm lg:text-md text-gray-500 dark:text-gray-300 -mt-1">
            @{profile.userName}
          </p>
        </div>
        <div className="flex gap-3 items-center">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              className="w-8 h-8 rounded-full bg-gray-400/50 flex items-center justify-center"
            >
              <FaGithub size={20} className="" />
            </a>
          )}
          {profile.linkedIn && (
            <a
              href={profile.linkedIn}
              target="_blank"
              className="w-8 h-8 rounded-full shadow-lg bg-white-200/70 dark:bg-blue-600/80 flex items-center justify-center"
            >
              <FaLinkedin size={20} className="text-blue-700 dark:text-white" />
            </a>
          )}
          {profile.instagram && (
            <a
              href={profile.instagram}
              target="_blank"
              className="w-8 h-8 rounded-full bg-gradient-to-r from-[#fb3a5d] via-[#cd5f11] to-[#ea089b] flex items-center justify-center"
            >
              <FaInstagram size={20} className="text-white" />
            </a>
          )}
          {profile.twitter && (
            <a
              href={profile.twitter}
              target="_blank"
              className="w-8 h-8 rounded-full bg-black dark:bg-gray-600/80 flex items-center justify-center"
            >
              <FaXTwitter size={20} className="text-white" />
            </a>
          )}
          {profile.portfolio && (
            <a
              href={profile.portfolio}
              target="_blank"
              className="w-8 h-8 rounded-full bg-gradient-to-r from-[#bfdbfe] to-[#a5f3fc] flex items-center justify-center"
            >
              <Globe size={20} className="text-gray-700" />
            </a>
          )}
          {profile.whatsapp && (
            <a
              href={profile.portfolio}
              target="_blank"
              className="w-8 h-8 rounded-full bg-gray-300/80 dark:bg-slate-100/40 flex items-center justify-center"
            >
              <IoLogoWhatsapp size={20} className="text-emerald-500" />
            </a>
          )}
        </div>
      </div>
      <div className="-mt-2">
        <IconItem>
          <MapPin size={20} className="stroke-gray-600 dark:stroke-gray-300" />
          <p className="text-sm md:text-md text-gray-700 dark:text-gray-300">
            {country?.name}, {state?.name}, {profile.city}
          </p>
        </IconItem>
      </div>
      <div className="w-full">
        <p className="text-sm lg:text-md text-gray-800 dark:text-gray-200">
          {profile.about}
        </p>
      </div>

      <Separator />
      <div>
        <Tabs defaultValue="education" className="w-full">
          <TabsList>
            <ScrollArea className="w-[91vw] lg:w-full whitespace-nowrap rounded-md">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </TabsList>
          <TabsContent value="education" className="mt-3">
            <Tbaspace>
              <div className="flex flex-col gap-3">
                <IconItem>
                  <BiSolidSchool size={18} className="hidden lg:block " />
                  <div className="flex flex-col">
                    <p className="text-sm md:text-md font-semibold">
                      College name :
                    </p>
                    <p className="text-sm md:text-md pl-0 lg:pl-1">
                      {profile.collegeName}
                    </p>
                  </div>
                </IconItem>
                <IconItem>
                  <IoSchoolSharp size={18} className="hidden lg:block " />
                  <p className="text-sm md:text-md font-semibold">
                    Persuing degree :
                  </p>
                  <p className="text-sm md:text-md pl-1">{profile.degree}</p>
                </IconItem>
                <IconItem>
                  <FaSwatchbook size={16} className="hidden lg:block " />
                  <p className="text-sm md:text-md font-semibold">Branch:</p>
                  <p className="text-sm md:text-md pl-1">{profile.branch}</p>
                </IconItem>
                <IconItem>
                  <CalendarCheck size={18} className="hidden lg:block " />
                  <p className="text-sm md:text-md font-semibold">
                    Year of Study :
                  </p>
                  <p className="text-sm md:text-md pl-1">
                    {profile.presentYear}
                  </p>
                </IconItem>
                <IconItem>
                  <CalendarClock size={18} className="hidden lg:block " />
                  <p className="text-sm md:text-md font-semibold">
                    Passing Out Year :
                  </p>
                  <p className="text-sm md:text-md pl-1">
                    {profile.graduationYear}
                  </p>
                </IconItem>
              </div>
            </Tbaspace>
          </TabsContent>
          <TabsContent value="location">
            <Tbaspace>location details</Tbaspace>
          </TabsContent>
          <TabsContent value="skills">
            <Tbaspace>skills details</Tbaspace>
          </TabsContent>
          <TabsContent value="contact">
            <Tbaspace>ciontact details</Tbaspace>
          </TabsContent>
          <TabsContent value="experience">
            <Tbaspace>Experience details</Tbaspace>
          </TabsContent>
        </Tabs>
      </div>
      <div className="mt-2 mb-10">
        <div>
          {!!profile.projects.length && (
            <>
              <h1 className="text-lg lg:text-2xl underline font-semibold py-3">
                Projects
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 gap-6">
                {profile.projects.map((project) => {
                  return <ProjectCard profile={profile} project={project} key={project.id} />;
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsClient;
