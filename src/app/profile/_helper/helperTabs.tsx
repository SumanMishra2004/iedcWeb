"use client";

import Image from "next/image";
import { Tabs } from "@/components/profile/profileTabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="lg:w-[calc(100%-4rem)] w-[97%] overflow-hidden relative h-[25rem] rounded-2xl px-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 " style={{boxShadow: "inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)"}}>
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "blog",
      value: "blog",
      content: (
        <div className="lg:w-[calc(100%-4rem)] w-[97%] overflow-hidden relative h-[25rem] rounded-2xl px-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 " style={{boxShadow: "inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)"}}>
          <p>blog Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "abc",
      value: "abc",
      content: (
        <div className="lg:w-[calc(100%-4rem)] w-[97%] overflow-hidden relative h-[25rem] rounded-2xl px-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 " style={{boxShadow: "inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)"}}>
          <p>abc Tab</p>
          <DummyContent />
        </div>
      ),
    },
    
   
  ];

  return (
    <div className="h-[36rem] overflow-hidden [perspective:1000px] relative b flex flex-col max-w-5xl w-full  items-start justify-start" >
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="h-[calc(100%-5rem)] w-full bg-blue-500 rounded-xl" style={{boxShadow: "inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)"}}>

    </div>
  );
};
