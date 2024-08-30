"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import SidebarMain from "@/components/Sidebar/SidebarMain";
import SidebarMobile from "@/components/Sidebar/SidebarMobile";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, Autoplay } from "swiper/modules";
import { MarqueeDemo } from "./_helper/HomeMarquee";
import NumberTicker from "@/components/magicui/number-ticker";
import { BentoGridDemo } from "./_helper/Bentogrid";

export default function Home() {
  const facultyDetails = [
    {
      name: "Prof. (Dr.) Sandip Mandal",
      designation: "HOD",
      image: "/homePageImages/faculty/sandipMandal.jpg",
    },
    {
      name: "Prof. (Dr.) Susmita Biswas",
      designation: "IEDC Coordinator",
      image: "/homePageImages/faculty/susmita.jpg",
    },
    {
      name: "Prof.Sweta Saha",
      designation: "IEDC Co-Coordinator",
      image: "/images/faculty/sandip.jpg",
    },
    {
      name: "Prof. (Dr.) Siddhartha Roy",
      designation: "Associate Professor",
      image: "/homePageImages/faculty/sidhratha.jpg",
    },
    {
      name: "Prof. (Dr.) Arijeet Ghosh",
      designation: "Associate Professor",
      image: "/homePageImages/faculty/arijit.jpg",
    },
    {
      name: "Prof. (Dr). Avik Kr. Das",
      designation: "Associate Professor",
      image: "/homePageImages/faculty/avik.jpg",
    },
    {
      name: "Prof. Apurba Nandi",
      designation: "Assistant Professor",
      image: "/homePageImages/faculty/apurba.jpg",
    },
    {
      name: "Prof. Sangita Dutta",
      designation: "Associate Professor",
      image: "/homePageImages/faculty/sangita.jpg",
    },
    {
      name: "Prof. Suchanda Chatterjee",
      designation: "Assistant Professor",
      image: "/homePageImages/faculty/Suchandra.png",
    },
    {
      name: "Prof. Dipanakar Datta",
      designation: "Class Coordinator",
      image: "/homePageImages/faculty/dipankar.jpg",
    },
    {
      name: "Prof. Rangon Sarkar",
      designation: "Assistant Professor",
      image: "/images/faculty/sandip.jpg",
    },

    {
      name: "Prof. Sayanatani Das",
      designation: "Assistant Professor",
      image: "/homePageImages/faculty/sayantani.jpg",
    },
  ];

  return (
    <div className="h-screen w-screen overflow-auto scrollbar-hide sticky flex flex-col lg:flex-row ">
      <div className="hidden lg:block lg:w-[15rem]">
        <SidebarMain />
      </div>

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
                    <p className="md:text-xl text-sm px-5 text-justify">
                      Our institution prides itself on providing exemplary
                      support to our faculty, recognizing that their success
                      directly impacts our students learning experiences. From
                      the moment a new faculty member joins our community, they
                      are welcomed with a comprehensive orientation that covers
                      resources, policies, and community values. Each faculty
                      member is paired with a dedicated mentor who offers
                      guidance and support throughout their initial years and
                      beyond. We ensure that our faculty have access to
                      state-of-the-art facilities and technology, empowering
                      them to deliver high-quality instruction and conduct
                      groundbreaking research. Our professional development
                      programs are tailored to meet individual needs, offering
                      workshops, seminars, and training sessions on the latest
                      educational strategies and technologies. Recognizing the
                      importance of work-life balance, we provide flexible
                      scheduling options and a range of wellness programs to
                      support our facultys well-being. Our faculty also benefit
                      from a robust support system for research endeavors,
                      including grant-writing assistance and access to research
                      grants and funding opportunities.
                    </p>
                  </Fade>
                </div>
                <Fade
                  duration={1000}
                  direction="right"
                  className="h-full lg:w-[30%] w-full flex justify-center items-center"
                >
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    className="mySwiper cursor-grab
                "
                    autoplay={{
                      delay: 5500,
                      disableOnInteraction: false,
                    }}
                  >
                    {facultyDetails.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="card  bg-sky-300 transition-all duration-400 rounded-lg shadow-lg font-extrabold text-4xl flex flex-col !h-[100%] !w-[100%] ">
                          <div className="first-content h-full w-full flex justify-center items-center opacity-100 rounded-lg transition-all duration-400">
                            <img
                              src={item.image}
                              alt=""
                              className="h-full w-full"
                            />
                          </div>
                          <div className="second-content h-0 w-full opacity-0 flex justify-center items-center rounded-lg transition-all duration-400 transform rotate-90 scale-x-[-1] flex-col">
                            <span className="text-sm">{item.name}</span>
                            <span className="text-base">
                              {item.designation}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
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
                    <p className="md:text-xl text-sm px-5 text-justify">
                    Community engagement is a core component, involving residents in garden design, planting, and maintenance. Workshops will be held to educate participants on sustainable techniques and the benefits of urban gardening. Local organizations and businesses will be partnered with to support the project through resources and funding.

The implementation phase includes site preparation, planting diverse crops, and setting up necessary garden infrastructure. The projects success will be measured by increased access to fresh produce, improved environmental practices, and strengthened community ties. Overall, this initiative seeks to enhance local well-being and promote sustainable living in urban areas.






                    </p>
                  </Fade>
                </div>
                <Fade
                  duration={1000}
                  direction="down"
                  className=" h-fit lg:w-[50%] w-full border-2 border-white bg-black/80 dark rounded-3xl overflow-hidden"
                >
                  <MarqueeDemo />
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
                    <p className="md:text-xl text-sm px-5 text-justify">
                    The NeuroFlex Network represents a groundbreaking approach to brain-computer integration, combining advanced neurotechnology with dynamic artificial intelligence to enhance cognitive capabilities. This innovative system utilizes flexible, biocompatible neural interfaces to establish real-time communication between the brain and external devices. The network adapts to individual neural patterns, enabling personalized and seamless interaction with digital platforms.

                    </p>
                  </Fade>
                </div>
                <div className=" h-[75%] lg:w-[50%] w-full bg-transparent dark  overflow-hidden flex flex-wrap">
                  <div className="h-[50%] w-[50%] p-7 flex flex-col">
                    <Fade
                      className="w-full h-[40%] flex items-center justify-center text-4xl font-extrabold text-white"
                      direction="up"
                    >
                      Faculty
                    </Fade>
                    <span className=" h-[60%] text-4xl text-white font-extrabold flex justify-center items-center ">
                      <NumberTicker value={10} />
                      <span>+</span>
                    </span>
                  </div>

                  <div className="h-[50%] w-[50%] p-7 flex flex-col">
                    <Fade
                      className="w-full h-[40%] flex items-center justify-center text-4xl font-extrabold text-white"
                      direction="down"
                    >
                      Students
                    </Fade>
                    <span className=" h-[60%] text-4xl text-white font-extrabold flex justify-center items-center ">
                      <NumberTicker value={180} />
                      <span>+</span>
                    </span>
                  </div>

                  <div className="h-[50%] w-[50%] p-7 flex flex-col">
                    <Fade
                      className="w-full h-[40%] flex items-center justify-center text-4xl font-extrabold text-white"
                      direction="down"
                    >
                      Projects
                    </Fade>
                    <span className=" h-[60%] text-4xl text-white font-extrabold flex justify-center items-center ">
                      <NumberTicker value={20} />
                      <span>+</span>
                    </span>
                  </div>

                  <div className="h-[50%] w-[50%] p-7 flex flex-col">
                    <Fade
                      className="w-full h-[40%] flex items-center justify-center text-4xl font-extrabold text-white"
                      direction="up"
                    >
                      Patents
                    </Fade>
                    <span className=" h-[60%] text-4xl text-white font-extrabold flex justify-center items-center ">
                      <NumberTicker value={3} />
                      <span>+</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-full h-fit flex items-center justify-center flex-col gap-11 dark py-7">
              <h1 className="text-7xl text-white font-extrabold">
                Our Projects
              </h1>

                    <BentoGridDemo/>
                    <button className="bg-red-950 text-white border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Explore More
</button>
            </div> */}
            <div className="w-full h-fit text-center pb-9 text-black text-6xl">
              {" "}
              Work in progress
            </div>
          </div>
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
