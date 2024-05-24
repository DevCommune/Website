import { getProfiles } from "@/actions/getProfiles";
import ProfileList from "@/components/Profiles/ProfileList";
import PageWrapper from "@/components/layout/PgaeWrapper";
import React from "react";

interface ProfileProps {
  searchParams: {
    name: string;
    collegeName: string;
    degree: string;
    branch: string;
    techStack: string;
  };
}

const page = async ({ searchParams }: ProfileProps) => {
  const profiles = await getProfiles(searchParams);

  if (!profiles) return <div>No Profiles found...</div>;

  return (
    <PageWrapper>
      <div className="mt-[4rem] pt-3 min-h-screen h-full w-full px-8">
        <ProfileList profiles={profiles} />
      </div>
    </PageWrapper>
  );
};

export default page;
