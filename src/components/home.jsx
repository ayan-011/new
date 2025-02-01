import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black  w-full  flex flex-col  ">
      <Navbar />

      {/* Hero Section */}
      <div className="manager flex  flex-row flex-grow lg:h-screen  md:h-screen dm:h-screen sm:h-[500px] sm:mt-32 h-[300px]  justify-center lg:gap-x-44 md:gap-x-40 sm:gap-x-28  gap-x-32 mt-12   ">
        {/* Text Content */}
        <div className="hello flex flex-col lg:w-[520px] md:w-[420px] sm:w-[340px] w-[120px] h-[180px] m-2 ml-4 text-white   ">
          <span className="font-medium ml-1 text-[10px] lg:text-base md:text-base sm:text-base">Hi, I'm Ayan,</span>
          <span id='text' className="font-product lg:text-[12vh] md:text-[12vh] sm:text-[9vh] text-2xl lg:leading-[12vh] md:leading-[12vh] sm:leading-[9vh] leading-[25px] font-light select-none ">
            Website Developer
          </span>
            <span className="ml-1 lg:mt-5 md:mt-5 sm:mt-5  mt-2 select-none text-[10px] lg:text-base md:text-base sm:text-base">based in India.</span>

          {/* Buttons */} 
          <div className="buttons flex lg:flex-row   md:flex-row  sm:flex-row  lg:gap-x-10 md:gap-x-10 sm:gap-x-4   lg:mt-6  md:mt-6 sm:mt-6  mt-2 flex-col gap-y-2  " >
            <a href="/bc.jpg">
              <button className="hover:bg-[#37e6f3] text-black lg:rounded-md md:rounded-md sm:rounded-md  rounded-sm lg:w-20 lg:h-7 md:w-20 md:h-7 sm:w-16 sm:h-7 w-10 h-4 flex items-center justify-center bg-[#4fb2b9] lg:text-base md:text-base sm:text-sm text-[10px]">
                Resume
              </button>
            </a>
            <button
              onClick={() => navigate("/animation")}
              className="hover:bg-[#37e6f3] text-black   flex items-center justify-center bg-[#4fb2b9] lg:text-base md:text-base sm:text-base text-[10px] lg:w-24 lg:h-7 md:w-24 md:h-7 sm:w-28 sm:h-7 w-12 h-4 lg:rounded-md md:rounded-md sm:rounded-md  rounded-sm"
            >
              Animation
            </button>
            <button
              onClick={() => navigate("/skills")}
              className="hover:bg-[#37e6f3] text-black   flex items-center justify-center bg-[#4fb2b9] lg:text-base md:text-base sm:text-base text-[10px] lg:w-20 lg:h-7 md:w-24 md:h-7 sm:w-24 sm:h-7 w-12 h-4 lg:rounded-md md:rounded-md sm:rounded-md  rounded-sm"
            >
              Skills
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="image flex w-fit h-fit lg:ml-[10px]   lg:mt-[90px]   sm:mt-[60px] ml-[-59px] mt-[70px]">
          <img
            src="/ayan.jpg"
            alt="Ayan"
            className="rounded-full lg:w-[60vh] lg:h-[60vh] md:h-[350px] md:w-[350px] sm:h-[250px] sm:w-[250px] w-24 h-24 mt-[-40px] md:mt-[-80px] hover:cursor-pointer hover:drop-shadow-abc transition"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-gray-400"></div>

      {/* Grid Section */}
      <div className="min-h-[180vh] w-full bg-black  flex justify-center">
        <div className="boxes   grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-60 ">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="box h-52 w-80 bg-zinc-800"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;