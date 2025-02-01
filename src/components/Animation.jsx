import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cyl from './Cyl'
import { Bloom } from '@react-three/postprocessing'
import { EffectComposer } from '@react-three/postprocessing'


const Animation = () => {

  
 
  return (
   <main className='w-full overflow-hidden'> 
    <div className='bg-black w-full h-screen flex  '>
      
      <Canvas flat camera={{fov: 35}}  >
      <OrbitControls enableZoom={false} />
      <ambientLight/>
      <Cyl/>

      <EffectComposer>
 
       <Bloom
      //copy from bloom react-postprocessing
    mipmapBlur
    intensity={15.0} // The bloom intensity.
    luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
    luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]     
  />
 
 </EffectComposer>

    
      </Canvas>
    </div>
     
    <div className='h-screen w-full flex items-center justify-center bg-black'>
       <img src="img.jpg" alt="" className='h-screen w-full blur-lg  inset-0 ' />
       <div className='bg-zinc-700 w-44 h-44 rounded-full   border-2 border-zinc-500 flex justify-center items-center opacity-80 select-none cursor-pointer animate-bounce absolute'>Ayaan Saifi</div>
       <p className='absolute mt-[180px] text-white'>Processing...</p>
       </div>
     
   </main>
  )
}

export default Animation


//FOR CYLINDER
//1. npm install three @types/three @react-three/fiber
//2. npm install @react-three/drei
//3. npm install  @react-three/postprocessing