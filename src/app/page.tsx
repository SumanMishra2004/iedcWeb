"use client";

import SidebarMain from "@/components/Sidebar/SidebarMain";
import SidebarMobile from "@/components/Sidebar/SidebarMobile";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-auto scrollbar-hide sticky flex flex-col lg:flex-row ">
      {/* SidebarMain will be shown on large screens */}
      <div className="hidden lg:block lg:w-[15rem]">
        <SidebarMain />
      </div>

      {/* SidebarMobile will be shown on small screens */}
      <div className="block lg:hidden">
        <SidebarMobile />
      </div>
      <div className="mainContaint w-screen h-screen lg:w-[calc(100vw-15rem)] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-800 via-emerald-300 to-slate-800 lg:p-4 md:p-3 p-2 overflow-hidden scrollbar-hide sticky ">
        <div className="scrollbar-hide overflow-scroll h-full w-full rounded-3xl">
          <div className="bg-blue-400 lg:h-[calc(100vh-2rem)] h-[calc(100vh-4rem)] overflow-scroll scrollbar-hide scroll-smooth">
            <div className="h-screen bg-blue-200 "></div>
            <div className="h-screen bg-green-200"></div>
            <div className="h-screen"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
