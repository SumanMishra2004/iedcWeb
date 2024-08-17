"use client";


import RetroGrid from "@/components/magicui/retro-grid";
import SidebarMain from "@/components/Sidebar/SidebarMain";
import SidebarMobile from "@/components/Sidebar/SidebarMobile";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards ,Autoplay} from 'swiper/modules';
import { MarqueeDemo } from "./_helper/HomeMarquee";
import NumberTicker from "@/components/magicui/number-ticker";
import { BentoGridDemo } from "./_helper/Bentogrid";

export default function Home() {
  return (
    
    
        <div className="h-full rounded-3xl w-full max-w-full overflow-scroll scrollbar-hide">
          <div className="h-screen bg-blue-400 w-full">
            <div className="bg-gradient-to-tr from-slate-950/90 via-slate-900/75 to-purple-950/50  relative flex h-full w-full flex-col items-center justify-center overflow-hidden dark ">
              <RetroGrid />
              <div className="relative top-0 left-0 bg-transparent z-5 h-full w-full flex justify-center items-center">
                <div className=" text-white h-[30rem] w-[75%] flex justify-center items-center">
                  <Fade direction="down" delay={100} duration={1500}>
                    <h1 className="w-fit text-wrap lg:text-[3rem] md:text-[2.5rem] text-[1.1rem] sm:text-[2.1rem] font-extrabold bodoni-moda-sc italic ">
                      {" "}
                      Wellcome You in IEDC Lab.
                    </h1>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-800 via-slate-600 to-slate-800 flex flex-col">
            <div className="h-[130vh] lg:h-[75vh] w-full flex justify-center items-center flex-col">
              <div className="h-full w-[95%] flex justify-between items-center lg:flex-row flex-col">
                <div className="h-full lg:w-[65%] w-full flex items-center flex-col justify-center gap-7 text-white">
                  <Fade direction="right" duration={1000}>
                    <h1 className=" md:text-3xl text-xl font-extrabold ">
                      Impresive Faculty Support
                    </h1>
                  </Fade>
                  <Fade direction="left" duration={1000}>
                    <p className="md:text-xl text-sm px-5">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Harum, id accusantium esse nostrum explicabo expedita
                      autem. Aspernatur soluta, non quaerat minus beatae quia
                      ipsum dolores, expedita nihil, fugiat accusantium
                      provident. Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Quis illum odio animi, ducimus similique
                      iste numquam facilis quod ipsum odit quisquam nobis
                      perspiciatis praesentium laborum ad illo hic rerum
                      voluptate.
                    </p>
                  </Fade>
                </div>
                <Fade duration={1000} direction="right" className="h-full lg:w-[30%] w-full flex justify-center items-center">
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    className="mySwiper"
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                  >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                  </Swiper>
                </Fade>
              </div>
            </div>
            <div className=" h-[130vh]  lg:h-[75vh] w-full flex justify-center items-center flex-col pb-10">
              <div className="h-full w-[95%] flex justify-between items-center lg:flex-row-reverse flex-col">
                <div className="h-full lg:w-[45%] w-full flex items-center flex-col justify-center gap-7 text-white">
                  <Fade direction="left" duration={1000}>
                    <h1 className=" md:text-3xl text-xl font-extrabold ">
                      Project by Students
                    </h1>
                  </Fade>
                  <Fade direction="right" duration={1000}>
                    <p className="md:text-xl text-sm px-5">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Harum, id accusantium esse nostrum explicabo expedita
                      autem. Aspernatur soluta, non quaerat minus beatae quia
                      ipsum dolores, expedita nihil, fugiat accusantium
                      provident. Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Quis illum odio animi, ducimus similique
                      iste numquam facilis quod ipsum odit quisquam nobis
                      perspiciatis praesentium laborum ad illo hic rerum
                      voluptate.
                    </p>
                  </Fade>
                </div>
                <Fade duration={1000} direction="down" className=" h-fit lg:w-[50%] w-full border-2 border-white bg-black/80 dark rounded-3xl overflow-hidden">
                <MarqueeDemo/>
                </Fade>
                
              </div>
            </div>
            <div className=" h-[130vh]  lg:h-[75vh] w-full flex justify-center items-center flex-col pb-10">
              <div className="h-full w-[95%] flex justify-between items-center lg:flex-row flex-col">
                <div className="h-full lg:w-[45%] w-full flex items-center flex-col justify-center gap-7 text-white">
                  <Fade direction="left" duration={1000}>
                    <h1 className=" md:text-3xl text-xl font-extrabold ">
                      Innovation comes true
                    </h1>
                  </Fade>
                  <Fade direction="right" duration={1000}>
                    <p className="md:text-xl text-sm px-5">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Harum, id accusantium esse nostrum explicabo expedita
                      autem. Aspernatur soluta, non quaerat minus beatae quia
                      ipsum dolores, expedita nihil, fugiat accusantium
                      provident. Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Quis illum odio animi, ducimus similique
                      iste numquam facilis quod ipsum odit quisquam nobis
                      perspiciatis praesentium laborum ad illo hic rerum
                      voluptate.
                    </p>
                  </Fade>
                </div>
                <div className=" h-[75%] lg:w-[50%] w-full bg-transparent dark  overflow-hidden flex flex-wrap">
                <div className="h-[50%] w-[50%] p-7 flex flex-col">
                  <Fade className="w-full h-[40%] flex items-center justify-center text-4xl font-extrabold text-white" direction="up">Faculty</Fade>
                  <span className=" h-[60%] text-4xl text-white font-extrabold flex justify-center items-center ">

                  <NumberTicker value={10} />
                  <span>+</span>
                  </span>
                  
                </div>
               
                <div className="h-[50%] w-[50%] p-7 flex flex-col">
                  <Fade className="w-full h-[40%] flex items-center justify-center text-4xl font-extrabold text-white" direction="down">Students</Fade>
                  <span className=" h-[60%] text-4xl text-white font-extrabold flex justify-center items-center ">

                  <NumberTicker value={180} />
                  <span>+</span>
                  </span>
                  
                </div>
               
                <div className="h-[50%] w-[50%] p-7 flex flex-col">
                  <Fade className="w-full h-[40%] flex items-center justify-center text-4xl font-extrabold text-white" direction="down">Projects</Fade>
                  <span className=" h-[60%] text-4xl text-white font-extrabold flex justify-center items-center ">

                  <NumberTicker value={20} />
                  <span>+</span>
                  </span>
                  
                </div>
               
                <div className="h-[50%] w-[50%] p-7 flex flex-col">
                  <Fade className="w-full h-[40%] flex items-center justify-center text-4xl font-extrabold text-white" direction="up">Patents</Fade>
                  <span className=" h-[60%] text-4xl text-white font-extrabold flex justify-center items-center ">

                  <NumberTicker value={3} />
                  <span>+</span>
                  </span>
                  
                </div>
               
                </div>
              </div>
            </div>
            <div className="w-full h-fit flex items-center justify-center flex-col gap-11 dark py-7">
              <h1 className="text-7xl text-white font-extrabold">
                Our Projects
              </h1>

                    <BentoGridDemo/>
                    <button className="bg-red-950 text-white border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Explore More
</button>
            </div>
          </div>
        </div>
   
  );
}

{
  /* <div className=" lg:h-[calc(100vh-2rem)] h-[calc(100vh-4rem)] overflow-scroll scrollbar-hide scroll-smooth ">
            
            </div>
            <div className="h-screen w-full">
              <CardStack/>
            </div>
            <div className="h-screen"></div>
          </div> */
}
