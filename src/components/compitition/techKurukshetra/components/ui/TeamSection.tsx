import React from "react";

function TeamSection() {
  const teamData = [
    {
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
      name: "suman mishra",
      designation: "CEO",
      image: "/somthing.png",
      desc: "amazing peoples csisvivhdfvi dfahfsfdv nv vdhdon dkvxndidoh",
    },
    {
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
          {teamData.map((value, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700"
            >
              <div className="flex items-center gap-x-4">
                <img
                  className="rounded-full size-20"
                  src={value.image}
                  alt="Avatar"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800 dark:text-neutral-200">
                    {value.name}
                  </h3>
                  <p className="text-xs uppercase text-gray-500 dark:text-neutral-500">
                    {value.designation}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-gray-500 dark:text-neutral-500">
               {value.desc}
              </p>
            
            </div>
          ))}
        </div>
        {/* End Grid */}
      </div>
      )
    </div>
  );
}

export default TeamSection;
