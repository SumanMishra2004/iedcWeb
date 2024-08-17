import React from 'react'

function ProfileImageSection() {
  return (
   <>
        <div className="w-full coverImage h-[65%] max-h-[50%] bg-blue-300 text-3xl">
          Cover image
        </div>
        <div className="profileArea z-50 relative lg:-top-[2rem] -top-[4rem] h-auto lg:h-[11rem] py-4 flex justify-around items-center lg:flex-row flex-col">
          <div className="profilePicture h-[11rem] w-[11rem] rounded-full">
            <img
              className="h-full w-full rounded-full bg-transparent"
              src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
              alt="Avatar"
            />
          </div>
          <div className="h-full lg:w-[calc(100%-15rem)] w-full flex justify-between items-center px-9 flex-col lg:flex-row">
          <div className="h-full lg:w-fit w-full    flex lg:items-start items-center py-6 lg:py-0  justify-center  flex-col">
            <h1 className="text-2xl lg:text-4xl text-white font-extrabold italic  ">Suman Mishra</h1>
            <h3 className="text-xl lg:text-2xl text-white font-bold">ABC team</h3>
            <span className="w-full h-auto text-white"> Github,linkedIN,Facebook</span>
          </div>
          <div className="buttonGroup flex items-end justify-around gap-4 h-full ">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ">Follow</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Message</button>
          </div>
          </div>
        </div>
      </>
  )
}

export default ProfileImageSection