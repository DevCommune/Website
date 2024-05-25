import { getProfiles } from "@/actions/getProfiles";
import ProfileList from "@/components/Profiles/ProfileList";
import PageWrapper from "@/components/layout/PgaeWrapper";
import React from "react";

interface ProfileProps {
  searchParams: {
    name: string;
    userName: string;
  };
}

const page = async ({ searchParams }: ProfileProps) => {
  const profiles = await getProfiles(searchParams);

  if (!profiles) return <div>No Profiles found...</div>;

  return (
    <PageWrapper>
      <div className="mt-[4rem] pt-6 min-h-screen h-full w-full px-8 bg-slate-400/20 dark:bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px]">
        <ProfileList profiles={profiles} />
      </div>
    </PageWrapper>
  );
};

export default page;
