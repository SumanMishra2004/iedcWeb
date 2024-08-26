"use client";

import { SidebarElements } from "./SidebarElements";
import Link from "next/link";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

function SidebarMain() {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleDropdownToggle = (index: any) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="h-screen hidden lg:flex lg:w-[15rem]  flex-col overflow-scroll  scrollbar-hide bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-800 via-purple-900 to-slate-800 ">
      <Link
        href={"/profile"}
        className="imageArea h-[10rem] w-full flex justify-center items-center"
      >
        <Fade duration={1000} direction="down" triggerOnce>
          <img
            className="h-[5rem] w-[5rem] rounded-full bg-transparent"
            src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
            alt="Avatar"
          />
        </Fade>
      </Link>
      <div className="flex flex-col h-[calc(100%-10rem)] w-full p-4 space-y-2 justify-center eb-garamond ">

        {SidebarElements.map((item, index) =>
        
          item.type !== "dropdown" ? (
            <Fade key={index} direction="left" duration={1000} triggerOnce>
              <Link
                className={`flex items-center gap-2 p-2 text-xl font-extrabold uppercase hover:bg-gray-200 hover:rounded-md ${
                  item.activation == "active"
                    ? ""
                    : " opacity-5 cursor-not-allowed"
                }`}
                href={
                  item.activation == "active" ? item.link?item.link:'' : ""
                }
              >
                {item.icon1}
                {item.name}
                {item.icon2}
              </Link>
            </Fade>
          ) : (
            <Fade key={index} direction="left" duration={1000} triggerOnce>
              <div className="flex flex-col">
                <div
                  className="flex items-center gap-2 p-2 text-xl font-extrabold uppercase cursor-pointer hover:bg-gray-200 hover:rounded-xl "
                  onClick={() => handleDropdownToggle(index)}
                >
                  {item.icon1}
                  {item.name}
                  {item.icon2}
                </div>
                <div
                  className={`ml-4 space-y-1 ${
                    openDropdownIndex === index ? "block" : "hidden"
                  }`}
                >
                  {item.children.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      className="flex items-center gap-2 p-2 text-lg text-black hover:bg-gray-300 hover:rounded-xl font-bold"
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
      <div className="w-full border-t-2 border-white text-center h-fit text-white py-4 text-xl font-bold"> Meta version</div>
    </div>
  );
}

export default SidebarMain;
