import React from "react";
import { Fade } from "react-awesome-reveal";

function TeamSection() {
  const teamData = [
    {
      name: "Suman mishra",
      role: "CEO",
      image: "/somthing.png",
      alt: "something",
    },
    {
      name: "Suman mishra",
      role: "CEO",
      image: "/somthing.png",
      alt: "something",
    },
    {
      name: "Suman mishra",
      role: "CEO",
      image: "/somthing.png",
      alt: "something",
    },
    {
      name: "Suman mishra",
      role: "CEO",
      image: "/somthing.png",
      alt: "something",
    },
  ];
  return (
    <div className="h-full md:w-[90%] w-full flex md:flex-row flex-col gap-4 items-center justify-between">
      <div className="md:w-[50%] w-full h-fit">
        <Fade direction="left" duration={800} triggerOnce>
          <h1 className="text-7xl font-extrabold text-white py-10 ">
            Our Family
          </h1>
        </Fade>
        <Fade direction="right" duration={1000} triggerOnce>
          <p className="text-xl text-justify font-medium text-white py-10">
            Our team is made up of a group of professionals who are passionate
            about their work. We are committed to providing the best service to
            our customers.
          </p>
        </Fade>
      </div>
      <div className="md:w-[40%] w-full flex flex-wrap h-fit gap-7">
        {teamData.map((team, index) => (
          <>
            <div key={index} className="group before:hover:scale-95  before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-[14rem] h-[18rem] relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
              <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
              <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
                <span className="text-2xl font-semibold">{team.name}</span>
                <p>{team.role}</p>
              </div>
              <a
                className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
                href="#"
              >
                Folow
              </a>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default TeamSection;
