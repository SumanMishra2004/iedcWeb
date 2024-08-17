import  { NavigationSection } from "@/components/profile/Navigation";
import ProfileImageSection from "@/components/profile/profileImageSection";
import ProjectSetup from "@/components/profile/ProjectSetup";
import React from "react";

function Profile() {
  return (
    <div className="bg-purple-600  border border-gray-100 h-[calc(100vh-2rem)] w-full rounded-2xl flex justify-center items-center">
       <div className="h-full py-8 lg:w-[85%] w-[95%]  overflow-scroll scrollbar-hide">
        <ProfileImageSection/>
        <div className="h-[200vh] w-full flex justify-between lg:flex-row flex-col">
                <div className=" h-fit lg:w-[60%]  w-full py-11">
                    <NavigationSection/>
                </div>
                <div className=" h-[100vh] lg:w-[35%] w-full bg-green-500"></div>
        </div>
       </div>
    </div>
    
  );
}

export default Profile;
