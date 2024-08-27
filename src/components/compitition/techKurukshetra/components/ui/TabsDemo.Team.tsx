"use client";

import Image from "next/image";
import { Tabs } from "./Tabs";
import TeamSection from "./TeamSection";

export function TabsDemo() {
  const tabs = [
    {
      title: "Mentor",
      value: "mentor",
      content: (
        
          <DummyContent/>
    
      ),
    },
    {
      title: "Core",
      value: "core",
      content: (
        
          <DummyContent />
        
      ),
    },
    {
      title: "Management",
      value: "playground",
      content: (
        
          <DummyContent />
       
      ),
    },
    
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="w-full md:h-[calc(100%-2.25rem)] h-[calc(100%-1.25rem)] bg-blue-300 flex justify-start items-start overflow-auto scrollbar-hide rounded-2xl">
<TeamSection/>
    
    </div>
  );
};
