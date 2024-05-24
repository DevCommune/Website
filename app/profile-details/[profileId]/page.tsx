import { getProfileById } from "@/actions/getProfileById";
import NavBar from "@/components/Navbar/Navbar";
import ProfileDetailsClient from "@/components/Profiles/ProfileDetailsClient";
import React from "react";

interface ProfileDetailsProps {
  params: {
    profileId: string;
  };
}

const ProfileDetails = async ({ params }: ProfileDetailsProps) => {
  const profile = await getProfileById(params.profileId);

  if (!profile) return <div>OOp!. Hotel with the given Id not fund</div>;
  return (
    <>
      <NavBar />
      <div className="pt-20 px-2.5 md:px-3 lg:px-6">
        <ProfileDetailsClient profile={profile} />
      </div>
    </>
  );
};

export default ProfileDetails;
