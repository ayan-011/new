import React, {useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from "three"

const Cyl = () => {
    let tex = useTexture("./round2.png")
    let cyl = useRef(null);
    useFrame((state, delta)=>{
        cyl.current.rotation.y += delta;

    })
  return (
    <group rotation={[-0.2,1,0.4]}>
      <mesh ref={cyl} > 
            <cylinderGeometry args={[0.6, 0.6, 0.6, 90, 50, true]} />
              <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide}/>
           
          </mesh>
  </group>
  )
}

export default Cyl