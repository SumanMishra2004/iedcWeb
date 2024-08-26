'use client'

import React, { useState } from "react";
import { SidebarElements } from "./SidebarElements";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
function SidebarMobile() {
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  

  const handleDropdownToggle = (index:any) => {
    setOpenDropdownIndex(prevIndex => prevIndex === index ? null : index);
  };
  return (
    <div className="w-screen h-[3rem] flex justify-between items-center bg-blue-400">
      <div className="imageArea h-full w-[3rem] flex justify-center items-center">
        <img
          className="h-[2rem] w-[2rem] rounded-full"
          src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
          alt="Avatar"
        />
      </div>
      <div className="w-[calc(100%-3rem)] bg-red-400 h-full flex justify-around items-center">
        {SidebarElements.map((item, index) =>
         item.type !== "dropdown" ? (
          <Link
            key={index}
            className="flex items-center gap-2 p-2 text-xl font-extrabold uppercase hover:bg-gray-200 hover:rounded-md"
            href={item.link || ""}
          >
            {item.icon1}
          </Link>
        ) : (
          <DropdownMenu key={index}>
              <DropdownMenuTrigger >
            {item.icon1}
               </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-[#0f172a] border border-white">
            {
              item.children.map((subItems,subIndex)=>{
                  return (
                  
                  
                     <DropdownMenuItem key={subIndex} className="w-full h-[3rem] font-extrabold text-white text-xl">
                      <div className="h-full w-full flex pl-4 gap-3 items-center">
                      {subItems.subIcon}
                      {subItems.subName}
                      
                      </div>
                      {subIndex ===2&&<DropdownMenuSeparator key={subIndex}/>}
                     </DropdownMenuItem>
                     
                     
                  )
              })
            }
          </DropdownMenuContent>
        </DropdownMenu>
        )
        )}
      </div>
    </div>
  );
}

export default SidebarMobile;


