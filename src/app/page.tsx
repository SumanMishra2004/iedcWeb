"use client";

import CardStack from "@/components/home/CardStack";
import RetroGrid from "@/components/magicui/retro-grid";
import SidebarMain from "@/components/Sidebar/SidebarMain";
import SidebarMobile from "@/components/Sidebar/SidebarMobile";
import { Fade } from "react-awesome-reveal";

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
      <div className="mainContaint w-full h-screen lg:w-[calc(100vw-15rem)] lg:max-w-[calc(100vw-14rem)] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-800 via-blue-950 to-cyan-950 lg:p-4 md:p-3 p-2  sticky ">
        <div className="h-full rounded-3xl w-full max-w-full overflow-scroll scrollbar-hide">
          <div className="h-screen bg-blue-400 w-full">
          <div className="bg-gradient-to-tr from-slate-950/90 via-slate-900/75 to-purple-950/50  relative flex h-full w-full flex-col items-center justify-center overflow-hidden dark ">
              <RetroGrid />
              <div className="relative top-0 left-0 bg-transparent z-5 h-full w-full flex justify-center items-center">
                <div className=" text-white h-[30rem] w-[75%] flex justify-center items-center">
                  <Fade direction="down" delay={100} duration={1500} >
                  <h1 className="w-fit text-wrap lg:text-[3rem] md:text-[2.5rem] text-[1.1rem] sm:text-[2.1rem] font-extrabold bodoni-moda-sc italic "> Wellcome You in IEDC Lab.</h1>
                  </Fade>
                  
                  </div>
              </div>
          </div>
          </div>
          <div className="h-[150vh] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-800 via-blue-700 to-cyan-700 lg:h-screen w-full flex justify-center items-center">
            <div className="h-[90%] w-[95%] flex justify-between items-center lg:flex-row flex-col">
                <div className="h-full lg:w-[65%] w-full flex items-center flex-col justify-center gap-7 text-white">
                  <Fade direction="right" duration={1000} >
                  <h1 className=" md:text-3xl text-xl font-extrabold ">
                    Impresive Faculty Support
                  </h1>
                  </Fade>
                  <Fade direction="left" duration={1000} >
                  <p  className="md:text-xl text-sm px-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, id accusantium esse nostrum explicabo expedita autem. Aspernatur soluta, non quaerat minus beatae quia ipsum dolores, expedita nihil, fugiat accusantium provident.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis illum odio animi, ducimus similique iste numquam facilis quod ipsum odit quisquam nobis perspiciatis praesentium laborum ad illo hic rerum voluptate.
                  </p>
                  </Fade>
                  
                </div>
                <div className="h-full lg:w-[30%] w-full"></div>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}


{/* <div className=" lg:h-[calc(100vh-2rem)] h-[calc(100vh-4rem)] overflow-scroll scrollbar-hide scroll-smooth ">
            
            </div>
            <div className="h-screen w-full">
              <CardStack/>
            </div>
            <div className="h-screen"></div>
          </div> */}