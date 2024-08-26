import React from "react";
import { Fade } from "react-awesome-reveal";

function ProfileImageSection() {
  return (
    <>
    
        <Fade className="w-full coverImage h-[65%] max-h-[50%] bg-blue-300 text-3xl rounded-2xl overflow-hidden shadow-2xl" duration={500} direction="down" triggerOnce>
          Cover image
        </Fade>

      <div className="profileArea z-50 relative lg:-top-[2rem] -top-[4rem] h-auto lg:h-[11rem] py-4 flex justify-around items-center lg:flex-row flex-col">
        <Fade className="profilePicture h-[11rem] w-[11rem] rounded-full" direction="left" duration={400} triggerOnce>
          <img
            className="h-full w-full rounded-full bg-transparent"
            src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
            alt="Avatar"
          />
        </Fade>
        <div className="h-full lg:w-[calc(100%-15rem)] w-full flex justify-between items-center px-9 flex-col lg:flex-row">
          <div className="h-full lg:w-fit w-full    flex lg:items-start items-center py-6 lg:py-0  justify-center  flex-col " >
            <Fade className="text-2xl lg:text-4xl text-white font-extrabold italic  " direction="left" duration={450}triggerOnce>
              Suman Mishra
            </Fade>
            <Fade className="text-xl lg:text-2xl text-white font-bold" direction="right" duration={500} triggerOnce>
              ABC team
            </Fade>
            <Fade className="w-full h-auto text-white" direction="down" duration={750} triggerOnce>
              
              Github,linkedIN,Facebook
            </Fade>
          </div>
          <Fade className="buttonGroup flex items-end justify-around gap-4 h-full animate-pulse delay-300" direction="up" duration={450} triggerOnce>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ">
              Follow
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Message
            </button>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default ProfileImageSection;
