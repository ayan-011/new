import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
 
import Navbar from './Navbar'

 

const Home = () => {
 
  const navigate = useNavigate();
  
  
  return ( 
    <>
    <div className="bg-black  min-h-screen flex flex-col ">
      
      <Navbar/>
     




      {/* -----------------------------------------------------------------------------MANAGER- */}
      <div className="manager flex flex-row flex-grow h-screen mx-auto ">
        <div className="hello flex     w-fit flex-col lg:m-[19vh]    sm:m-[9vh] sm:mt-24 m-[10vh] ml-4 text-white">
          <span className="font-medium ml-1">Hi, I'm Ayan,</span>
          <span id='text' className="font-product lg:text-[12vh] md:text-[12vh] sm:text-[9vh] text-[5vh] w-[10vh] lg:leading-[12vh] md:leading-[12vh] sm:leading-[9vh] leading-[35px]  font-bold   " >
            Website Developer
          </span>
          <span className=" ml-1 mt-5">based in India.</span>

           
         
           <div className="buttons flex flex-row lg:gap-x-10 md:gap-x-10 sm:gap-x-10 gap-x-1">

           <a href="/bc.jpg"> <button className="hover:bg-[#37e6f3] text-black rounded-md w-20 h-7 mt-6 ml-1 flex items-center justify-center  bg-[#4fb2b9]  ">
            Resume
          </button> </a> 
          <button  onClick={() => navigate("/skills")}
           className="hover:bg-[#37e6f3] text-black rounded-md w-24 h-7 mt-6 ml-1 flex items-center justify-center  bg-[#4fb2b9]  ">
            Animation
          </button>
           </div>
           
           
        </div>

        <div className="image flex w-fit  h-fit  lg:ml-[550px] lg:mt-[50px]  md:ml-[190px] md:mt-[50px]  
         sm:ml-[70px] sm:mt-[90px]  ml-[-59px] mt-[70px]  ">
          <img
            src="/ayan.jpg"
            alt="Ayan"
            className="flex     rounded-full lg:w-[67vh] lg:h-[67vh] md:h-[420px] md:w-[420px] sm:h-[250px] sm:w-[250px] w-40 h-40  hover:cursor-pointer  hover:drop-shadow-abc transition "
          />
        </div>
      </div>
      <div className="h-[1px] bg-gray-400 "></div>

      <div className="min-h-screen w-full bg-black  flex justify-center">
         <div className="boxes h-fit grid grid-cols-5 gap-5 mt-60 gap-y-24   ">
          <div className="box h-52 w-80 bg-zinc-800"></div>
          <div className="box h-52 w-80 bg-zinc-800"></div>
          <div className="box h-52 w-80 bg-zinc-800"></div>
          <div className="box h-52 w-80 bg-zinc-800"></div>
          <div className="box h-52 w-80 bg-zinc-800"></div>
          <div className="box h-52 w-80 bg-zinc-800"></div>
          <div className="box h-52 w-80 bg-zinc-800"></div>
          <div className="box h-52 w-80 bg-zinc-800"></div>
          <div className="box h-52 w-80 bg-zinc-800"></div>
          <div className="box h-52 w-80 bg-zinc-800"></div> 
          
         </div>
      </div>

    </div>
    </>
  );
};

export default Home;

