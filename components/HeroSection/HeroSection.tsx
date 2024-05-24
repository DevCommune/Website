"use client";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "../ui/button";
import RetroGrid from "../magicui/retro-grid";
import GradientText from "../magicui/animated-gradient-text";
import { Spotlight } from "./Spotlight";
import DotPattern from "../magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = useAuth();
  return (
    <div className="w-full z-20 py-10 lg:py-0 mx-auto min-h-[84vh] lg:min-h-screen h-full flex flex-col items-center lg:justify-center leading-6">
      <Spotlight
        className="-top-10 left-0 md:left-10 md:-top-40"
        fill="white"
      />
      <div className="mb-5 mt-20 lg:mt-0">
        <GradientText
          text=" Introducing To Dev Commune"
          className="px-3.5 py-1.5 lg:px-2 lg:py-1.5 cursor-pointer"
        />
      </div>
      <div>
        <h1 className="scroll-m-20 px-3 text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight lg:text-7xl text-center max-w-[1120px] bg-gradient-to-b from-black to-gray-700/80 dark:from-white dark:to-slate-400 inline-block text-transparent bg-clip-text">
          Develop and Enhance Your Skills with Us at Dev Commune
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-800 text-sm md:text-lg text-center lg:mt-2 mt-5 dark:text-gray-400 px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          libero ducimus totam porro maxime delectus facilis asperiores
          voluptatum accusamus ipsam dolore sapiente, maiores similique, eius
          tenetur accusantium corporis autem blanditiis.
        </p>
        <div className="flex justify-center items-center gap-3 mt-10 lg:mt-3">
          {userId ? (
            <Link
            onClick={() => {
              setIsLoading(true);
            }}
            href={`/profile/${userId}`}
            className="mt-5 ml-7"
          >
            <Button className="animate-buttonheartbeat rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white">
              Create your profile
            </Button>
          </Link>
          ):(
            <Link
            onClick={() => {
              setIsLoading(true);
            }}
            href={"/sign-up"}
            className="mt-5 ml-7"
          >
            <Button className="animate-buttonheartbeat rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-white">
              Get Started
            </Button>
          </Link>
          )}
          <Link href="/" target="_blank" className="mt-5">
            <Button className="flex gap-1">
              Join Discord
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link
            href="/"
            target="_blank"
            className="animate-buttonheartbeat border p-2 rounded-full mt-5 hover:dark:bg-black hover:cursor-pointer"
          >
            <Github className="w-4 h-4" />
          </Link>
          <RetroGrid />
        </div>
      </div>
    </div>
  );
}
