import { Profile, Project } from "@prisma/client";
import React from "react";
import { ProfileWithProjects } from "../Forms/AddProfileForm";
import ProfileCard from "./ProfileCard";
import { Separator } from "../ui/separator";

const ProfileList = ({ profiles }: { profiles: ProfileWithProjects[] }) => {
  return (
    <div>
      <h3 className="text-2xl underline mb-2">Our Community</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
        {profiles.map((profile) => (
          <div key={profile.id}>
            <ProfileCard profile={profile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
