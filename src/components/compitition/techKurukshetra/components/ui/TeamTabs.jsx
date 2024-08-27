"use client";

import {
  CoreTeamData,
  DesignTeamData,
  ManagementTeamData,
  TaskForceTeamData,
} from "../teamData";
import TeamCard from "./teamcard/TeamCard";
import { Tabs } from "./tabs";

export function TeamTabs() {
  const tabs = [
    {
      title: "Core",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl px-4 py-7 text-xl md:text-4xl font-bold text-whit flex justify-between bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
          <Core />
          {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}
        </div>
      ),
    },
    {
      title: "Design",
      value: "design",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl px-4 py-7 text-xl md:text-4xl font-bold text-white flex justify-between bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
          <Design />
        </div>
      ),
    },
    {
      title: "Management",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl px-4 py-7 text-xl md:text-4xl font-bold flex justify-between text-white bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
          <Management />
        </div>
      ),
    },
    //     {
    //   title: "TaskForce",
    //   value: "content",
    //   content: (
    //     <div className="w-full overflow-hidden relative h-full rounded-2xl px-4 py-7 text-xl md:text-4xl font-bold flex justify-between text-white bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
    //       <TaskForce/>
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="h-[47rem] md:h-[52rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start mb-8 lg:mb-12 z-[999]">
      <Tabs tabs={tabs} />
    </div>
  );
}
const Core = () => {
  return (
    <div className="flex flex-wrap gap-10 lg:gap-16 max-h-[58rem] lg:max-h-[50rem] overflow-y-auto lg:overscroll-hidden rounded-md w-full px-4 py-5 justify-center items-center">
      {CoreTeamData.map((value, index) => (
        <TeamCard
          profile={value.image}
          name={value.name}
          position={value.position}
          key={index}
          mail={value.mail}
          insta={value.insta}
          twitter={value.twitter}
          linkedIn={value.linkedIn}
        />
      ))}
    </div>
  );
};
const Design = () => {
  return (
    <div className="flex flex-wrap gap-10 lg:gap-16 max-h-[58rem] lg:max-h-[50rem] overflow-y-auto lg:overscroll-hidden rounded-md w-full px-4 py-5 justify-center items-center">
      {DesignTeamData.map((value, index) => (
        <TeamCard
          profile={value.image}
          name={value.name}
          position={value.position}
          key={index}
          mail={value.mail}
          insta={value.insta}
          twitter={value.twitter}
          linkedIn={value.linkedIn}
        />
      ))}
    </div>
  );
};

const Branding = () => {
  return (
    <div className="flex flex-wrap gap-10 lg:gap-16 max-h-[58rem] lg:max-h-[50rem] overflow-y-auto lg:overscroll-hidden rounded-md w-full px-4 py-5 justify-center items-center">
      {BrandingTeamData.map((value, index) => (
        <TeamCard
          profile={value.image}
          name={value.name}
          position={value.position}
          key={index}
          mail={value.mail}
          insta={value.insta}
          twitter={value.twitter}
          linkedIn={value.linkedIn}
        />
      ))}
    </div>
  );
};
const Management = () => {
  return (
    <div className="flex flex-wrap gap-10 lg:gap-16 max-h-[58rem] lg:max-h-[50rem] overflow-y-auto lg:overscroll-hidden rounded-md w-full px-4 py-5 justify-center items-center">
      {ManagementTeamData.map((value, index) => (
        <TeamCard
          profile={value.image}
          name={value.name}
          position={value.position}
          key={index}
          mail={value.mail}
          insta={value.insta}
          twitter={value.twitter}
          linkedIn={value.linkedIn}
        />
      ))}
    </div>
  );
};
const TaskForce = () => {
  return (
    <div className="flex flex-wrap gap-10 lg:gap-16 max-h-[58rem] lg:max-h-[50rem] overflow-y-auto lg:overscroll-hidden rounded-md w-full px-4 py-5 justify-center items-center">
      {TaskForceTeamData.map((value, index) => (
        <TeamCard
          profile={value.image}
          name={value.name}
          position={value.position}
          key={index}
          mail={value.mail}
          insta={value.insta}
          twitter={value.twitter}
          linkedIn={value.linkedIn}
        />
      ))}
    </div>
  );
};