import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
   
        <div className=" absolute  h-fit w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-hidden">

          <Navbar/>
        
            

            <div className="manager h-screen">

          
          <a href="/">
        <svg className='m-4   hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
          </a>

             

            <div className="about m-20 flex flex-col">
                <span className='text-yellow-500 text-[6vh] '>About us</span>
                <span className='text-white'>Discover the purpose and the people behind our work.</span>
                

            </div>
              
            

            <div className="parts flex flex-row  w-full ">

              
            <img src="/wheel.png" alt="" className=' w-[50vh] m-[27vh] lg:mt-11 autoRotate' />

       


              <div className="years mb-[12vh]">

              <div className=' w-[100vh]   mt-4 '>
              <li className=' text-white hover:text-blue-400 hover:cursor-pointer ' ><a >2020</a></li>
              <div className='text-gray-400 mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias, perferendis ipsum ut ipsam repellat itaque ipsa et in, eligendi eaque consequatur officiis sequi excepturi officia tempora sed, quo voluptate.</div>
              </div>
              <div className=' w-[100vh]  mt-4 '>
              <li className=' text-white hover:text-blue-400 hover:cursor-pointer ' ><a   >2021</a></li>
              <div className='text-gray-400 mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias, perferendis ipsum ut ipsam repellat itaque ipsa et in, eligendi eaque consequatur officiis sequi excepturi officia tempora sed, quo voluptate.</div>
              </div>
              <div className=' w-[100vh]  mt-4'>
              <li className=' text-white hover:text-blue-400 hover:cursor-pointer ' ><a >2022</a></li>
              <div className='text-gray-400 mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias, perferendis ipsum ut ipsam repellat itaque ipsa et in, eligendi eaque consequatur officiis sequi excepturi officia tempora sed, quo voluptate.</div>
              </div>
              <div className=' w-[100vh]  mt-4'>
              <li className=' text-white hover:text-blue-400 hover:cursor-pointer ' ><a >2023</a></li>
              <div className='text-gray-400 mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias, perferendis ipsum ut ipsam repellat itaque ipsa et in, eligendi eaque consequatur officiis sequi excepturi officia tempora sed, quo voluptate.</div>
              </div>
              <div className='autoShow  w-[100vh] mt-4'>
              <li className=' text-white hover:text-blue-400 hover:cursor-pointer ' ><a >2024</a></li>
              <div className='text-gray-400 mx-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias, perferendis ipsum ut ipsam repellat itaque ipsa et in, eligendi eaque consequatur officiis sequi excepturi officia tempora sed, quo voluptate.</div>
              </div>

               
              </div>
            </div>

            </div>
            <div className="h-[1px] bg-gray-400"></div>

              <div className="footer h-screen">
              </div>
          
              
              
        </div>

        
    

    
 
  )
}

export default About