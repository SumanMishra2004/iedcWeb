"use client";

import { MagicCard } from "@/components/compitition/techKurukshetra/components/magicui/magic-card";
import RetroGrid from "@/components/compitition/techKurukshetra/components/magicui/retro-grid";
// import ParticlesContainer from "@/components/compitition/techKurukshetra/components/particle/ParticleComponents";
import { AnimatedPinDemo } from "@/components/compitition/techKurukshetra/components/ui/AnimatedPinPointer";
import Countdown from "@/components/compitition/techKurukshetra/components/ui/DatePicker";
import { StickyScroll } from "@/components/compitition/techKurukshetra/components/ui/FileStickyTimeline";
import { OrbitingCirclesDemo } from "@/components/compitition/techKurukshetra/components/ui/iconRadius";
import NavBar from "@/components/compitition/techKurukshetra/components/ui/LGNavBar";
import PartnerShip from "@/components/compitition/techKurukshetra/components/ui/PartnerShip";
import SMNavbar from "@/components/compitition/techKurukshetra/components/ui/SMNavbar";

import { Fade } from "react-awesome-reveal";
import { timelineData } from "@/components/compitition/techKurukshetra/components/timelineComponents";

import { TeamTabs } from "@/components/compitition/techKurukshetra/components/ui/TeamTabs";
import Rules from "@/components/compitition/techKurukshetra/components/ui/rules";
import Faq from "@/components/compitition/techKurukshetra/components/ui/faq";

export default function Home() {
  let dt = new Date().getTime();
  let main_dt = new Date("Septembar 27, 2024,9:30:00").getTime();
  const days_difference = Math.abs(main_dt - dt) / (1000 * 60 * 60 * 24);
  return (
    <div className="h-screen w-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 overflow-auto scrollbar-hide dark overflow-x-hidden scroll-smooth">
      <div className="w-full max-w-screen h-20 bg-gray-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70  sticky top-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   border-b-2 border-black z-[999]">
        <div className="h-full w-full justify-center items-center lg:flex hidden ">
          <NavBar />
        </div>
        <div className="h-full w-full justify-center items-center lg:hidden flex ">
          <SMNavbar />
        </div>
      </div>
      <div className=" w-screen h-[100vh]">
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden  ">
          <RetroGrid />
        </div>
      </div>
      <Countdown dt={days_difference * 24 * 60 * 60 * 1000} />
      <div className=" h-fit w-full relative inset-0 z-20 ">
        <div className=" z-20 md:h-screen h-fit py-7 w-full flex justify-around md:flex-row flex-col items-center   ">
          <div className="h-auto md:w-[40%] w-[90%] text-justify text-white flex flex-col justify-center items-center gap-5 py-4">
            <Fade
              direction="down"
              duration={800}
              className="text-5xl font-bold italic"
            >
              About Us
            </Fade>
            <Fade direction="right" duration={800}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              porro id, atque impedit esse corporis laudantium! Libero
              aspernatur rem illum ipsam, consectetur maxime at reiciendis et
              laborum natus culpa aperiam!Lorem
            </Fade>
            <Fade direction="left" duration={900} delay={500}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              deleniti quos quisquam necessitatibus in magni laudantium,
              doloribus natus saepe beatae alias facere dignissimos sed!
              Molestiae fugiat consequuntur quibusdam consequatur maiores.
            </Fade>
            <Fade direction="right" duration={1200} delay={100}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              deleniti quos quisquam necessitatibus in magni laudantium,
              doloribus natus saepe beatae alias facere dignissimos sed!
              Molestiae fugiat consequuntur quibusdam consequatur maiores.
            </Fade>
          </div>
          <Fade
            direction="down"
            duration={1500}
            className="h-fit md:w-[30%] w-[90%] "
          >
            <OrbitingCirclesDemo />
          </Fade>
        </div>
        {/* <ParticlesContainer /> */}
        <div className="relative z-[555] w-full 2xl:h-[120vh] md:h-[200vh] max-h-fit ">
          <div className=" relative z-[555]  h-fit py-14 px-3 md:px-0 ">
            <Fade
              className="w-full  h-auto md:text-[5rem] font-extrabold text-white flex justify-center items-center pb-6 text-5xl"
              direction="up"
              triggerOnce
            >
              Our Domain
            </Fade>
            <div className="flex h-full w-full flex-col flex-wrap justify-around items-center gap-4  lg:flex-row">
              <Fade
                direction="right"
                className="md:w-[20rem] w-full h-[22rem]"
                duration={800}
                delay={800}
              >
                <MagicCard
                  className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl size-full "
                  gradientColor="#262626"
                >
                  Magic
                </MagicCard>
              </Fade>
              <Fade
                direction="right"
                className="md:w-[20rem] w-full h-[22rem]"
                duration={500}
                delay={500}
              >
                <MagicCard
                  className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl md:w-[20rem] w-full h-[22rem]"
                  gradientColor="#262626"
                >
                  Card
                </MagicCard>
              </Fade>
              <Fade
                direction="left"
                className="md:w-[20rem] w-full h-[22rem]"
                duration={500}
                delay={500}
              >
                <MagicCard
                  className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl md:w-[20rem] w-full h-[22rem]"
                  gradientColor="#262626"
                >
                  Card
                </MagicCard>
              </Fade>
              <Fade
                direction="left"
                className="md:w-[20rem] w-full h-[22rem]"
                duration={800}
                delay={800}
              >
                <MagicCard
                  className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl md:w-[20rem] w-full h-[22rem]"
                  gradientColor="#262626"
                >
                  Card
                </MagicCard>
              </Fade>
              <Fade
                direction="right"
                className="md:w-[20rem] w-full h-[22rem]"
                duration={800}
                delay={500}
              >
                <MagicCard
                  className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl md:w-[20rem] w-full h-[22rem]"
                  gradientColor="#262626"
                >
                  Card
                </MagicCard>
              </Fade>
              <Fade
                direction="left"
                className="md:w-[20rem] w-full h-[22rem]"
                duration={800}
                delay={800}
              >
                <MagicCard
                  className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl md:w-[20rem] w-full h-[22rem]"
                  gradientColor="#262626"
                >
                  Card
                </MagicCard>
              </Fade>
              <Fade
                direction="right"
                className="md:w-[20rem] w-full h-[22rem]"
                duration={800}
                delay={500}
              >
                <MagicCard
                  className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl md:w-[20rem] w-full h-[22rem]"
                  gradientColor="#262626"
                >
                  Card
                </MagicCard>
              </Fade>
            </div>
          </div>
        </div>
        <div className="PrizeArea h-fit py-24 w-full flex justify-around items-center flex-col relative z-[555]">
          <Fade
            className="w-full  h-auto md:text-[5rem] font-extrabold text-white flex justify-center items-center pb-6 text-5xl"
            direction="down"
            duration={1300}
          >
            Our Prizes
          </Fade>
          <div className="h-fit w-full flex justify-around items-center flex-wrap flex-row ">
            <Fade direction="right" duration={800} delay={500} triggerOnce>
              <AnimatedPinDemo
                className="w-[20rem] h-[25rem]"
                title="20000 Rs"
                position="second"
              />
            </Fade>
            <Fade direction="left" duration={800} delay={500} triggerOnce>
              <AnimatedPinDemo
                className="w-[20rem] h-[25rem]"
                title="30000 Rs"
                position="First"
              />
            </Fade>
            <Fade direction="right" duration={800} delay={500} triggerOnce>
              <AnimatedPinDemo
                className="w-[20rem] h-[25rem]"
                title="10000 Rs"
                position="Third"
              />
            </Fade>
          </div>
        </div>
        <div className="paartnearArea w-screen h-fit flex items-center justify-between flex-col relative z-[555]">
          <Fade direction="down">
            <div className="md:text-[5rem] text-[2.5rem] font-extrabold text-white italic h-auto w-full">
              Our Partners
            </div>
          </Fade>
          <div className="h-full  w-[90%] flex flex-col gap-8">
            <PartnerShip />
          </div>
        </div>
        <div className="relative z-[555] h-fit w-screen  flex flex-col justify-center items-center py-10 md:py-5 ">
          <h1 className="md:text-6xl  text-4xl py-6 font-bold text-white">
            Timeline
          </h1>
          <div className="md:h-[75%] h-full w-full box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;">
            <StickyScroll content={timelineData} />
          </div>
        </div>
        <TeamTabs/>
        <Rules/>
        <Faq/>
      </div>
      
    </div>
  );
}
