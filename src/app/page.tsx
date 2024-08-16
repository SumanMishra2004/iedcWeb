'use client'

import SidebarMain from "@/components/Sidebar/SidebarMain";
import SidebarMobile from "@/components/Sidebar/SidebarMobile";



export default function Home() {
  return (
    <div className="h-screen w-screen overflow-auto scrollbar-hide sticky flex ">
       {/* SidebarMain will be shown on large screens */}
       <div className="hidden lg:block lg:w-[15rem]">
        <SidebarMain />
      </div>

      {/* SidebarMobile will be shown on small screens */}
      <div className="block lg:hidden">
        <SidebarMobile />
      </div>
    </div>
  );
}
