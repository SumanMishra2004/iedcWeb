"use client";
import ProfileImageSection from "@/components/profile/profileImageSection";
import React from "react";
import { TabsDemo } from "./_helper/helperTabs";

function Profile() {
  return (
    <div
      className="bg-slate-600  border border-gray-100 h-[calc(100vh-2rem)] w-full rounded-2xl flex justify-center items-center overflow-x-hidden"
      style={{
        boxShadow:
          "inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)",
      }}
    >
      <div className="h-full lg:w-[85%] w-[95%] py-6  overflow-scroll scrollbar-hide">
        <ProfileImageSection />
        <div className="w-full h-fit flex flex-col md:flex-row justify-around items-center">
          <div className="h-[38rem]  md:w-[40rem]  w-full py-4">
            <TabsDemo />
          </div>
          <div className="h-[30rem] w-full md:w-[20rem] bg-red-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
