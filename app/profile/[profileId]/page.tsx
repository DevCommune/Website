import { getProfileById } from "@/actions/getProfileById";
import AddProfileForm from "@/components/Forms/AddProfileForm";
import NavBar from "@/components/Navbar/Navbar";
import StarsCanvas from "@/components/StarCanvas/StarCanvas";
import PageWrapper from "@/components/layout/PgaeWrapper";
import { auth } from "@clerk/nextjs/server";
import React from "react";

interface ProfilePageProps {
  params: {
    profileId: string;
  };
}

const page = async ({ params }: ProfilePageProps) => {
  // console.log("Profile", params.profileId);

  const profile = await getProfileById(params.profileId);

  const { userId } = auth();

  if (!userId) {
    return <div>Not Authenticated...</div>;
  }

  if (profile && profile.userId !== userId) return <div>Access Denide...</div>;

  return (
    <>
      <NavBar />
      <div className="min-h-screen h-full w-full flex flex-col mx-auto lg:px-10 px-4 py-5 mt-[5rem] mb-20">
        <AddProfileForm profile={profile} />
      </div>
      <StarsCanvas />
    </>
  );
};

export default page;
