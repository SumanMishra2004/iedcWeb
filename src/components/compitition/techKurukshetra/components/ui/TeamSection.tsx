import React from "react";

interface TeamMember {
  position: string;
  name: string;
  designation: string;
  image: string;
  desc: string;
}

interface TeamSectionProps {
  type?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ type }) => {
  const teamData: TeamMember[] = [
    {
      position: "core",
      name: "suman mishra",
      designation: "CEO",
      image: "https://firebasestorage.googleapis.com/v0/b/dozz-4fd2f.appspot.com/o/myimage.jpg?alt=media&token=d95d1a8a-bb3d-47f9-ac99-72bae555b803",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "core",
      name: "suman mishra",
      designation: "CEO",
      image: "https://res.cloudinary.com/dvky83edw/image/upload/v1724981039/myimage_cfrpdi.jpg",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "core",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "core",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "core",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "core",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "core",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "core",
      name: "suman mishra",
      designation: "CEO",
      image: "",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "mentor",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "mentor",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "mentor",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "mentor",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "management",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "management",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "management",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "management",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "volunteer",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "volunteer",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      position: "volunteer",
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
  ];

  return (
    <div className="h-full w-full">
      <div className="max-w-[85rem] w-fit h-fit px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-fit h-fit">
          {teamData
            .filter((member) => !type || member.position === type)
            .map((value, index) => (
              <div
                key={index}
                className="card w-48 h-64 bg-sky-300 transition-all duration-400 rounded-lg shadow-lg font-extrabold text-4xl flex flex-col"
              >
                <div className="first-content h-full w-full flex justify-center items-center opacity-100 rounded-lg transition-all duration-400">
                  <img src={value.image} alt="" className="h-full w-full"/>
                </div>
                <div className="second-content h-0 w-full opacity-0 flex justify-center items-center rounded-lg transition-all duration-400 text-xl transform rotate-90 scale-x-[-1] flex-col">
                  <span>{value.name}</span>
                  <span>{value.designation}</span>
                </div>
              </div>
            ))}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default TeamSection;
