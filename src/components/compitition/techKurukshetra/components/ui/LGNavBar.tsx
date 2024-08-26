import React from "react";
import NavItems from '../NavItems'
import Link from "next/link";
function NavBar() {
  
  return (
   
      <div className="navItems w-[95%] h-[90%] bg-slate-500 flex justify-between items-center ">
        <div className="Logoarea h-[4.5rem] w-[4.5rem] rounded-full bg-red-500"></div>
        <div className="FunctionArea h-full w-[75%]  bg-red-500 flex justify-around items-center z-[999]">
            {NavItems.map((values,index)=>(
                <Link key={index} href={values.link} className="text-xl text-white text-playfair">
                    {values.name}
                </Link>
            ))}
        </div>
        <div className="LogoCollege h-[4.5rem] w-[10%]  bg-green-500"></div>
      </div>
  
  );
}

export default NavBar;
