'use client'

import {SidebarElements} from './SidebarElements'
import Link from "next/link";
import React, { useState } from "react";
import { Fade } from 'react-awesome-reveal';

function SidebarMain() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  

  const handleDropdownToggle = (index:any) => {
    setOpenDropdownIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className="h-screen hidden lg:flex lg:w-[15rem] bg-red-500 flex-col overflow-scroll  scrollbar-hide">
      <div className="imageArea h-[10rem] w-full flex justify-center items-center">
        <Fade duration={1000} direction='down' triggerOnce>
        <img
          className="h-[5rem] w-[5rem] rounded-full"
          src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
          alt="Avatar"
        /></Fade>
      </div>
      <div className="flex flex-col h-[calc(100%-10rem)] w-full bg-green-400 p-4 space-y-2 justify-center">
        {SidebarElements.map((item, index) =>
          item.type !== "dropdown" ? (
            <Fade key={index} direction='left' duration={1000} triggerOnce>
<Link
              
              className="flex items-center gap-2 p-2 text-xl font-extrabold uppercase hover:bg-gray-200 hover:rounded-md"
              href={item.link || ''}
            >
              {item.icon1}
              {item.name}
              {item.icon2}
            </Link>
            </Fade>
            
          ) : (
            <Fade key={index} direction='left' duration={1000} triggerOnce>

            
            <div  className="flex flex-col">
              <div
                className="flex items-center gap-2 p-2 text-xl font-extrabold uppercase cursor-pointer hover:bg-gray-200 hover:rounded-xl"
                onClick={() => handleDropdownToggle(index)}
                
              >
                {item.icon1}
                {item.name}
                {item.icon2}
              </div>
              <div className={`ml-4 space-y-1 ${openDropdownIndex === index ? "block" : "hidden"}`}>
                {item.children.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    className="flex items-center gap-2 p-2 text-lg text-gray-700 hover:bg-gray-300 hover:rounded-xl"
                    href={subItem.link}
                  >
                    {subItem.subIcon}
                    {subItem.subName}
                  </Link>
                ))}
              </div>
            </div>
            </Fade>
          )
        )}
      </div>
    </div>
  );
}

export default SidebarMain;
