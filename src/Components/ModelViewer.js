import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Model from './Model'
import { OrbitControls } from "@react-three/drei";

const ModelViewer = ({ modelPath, scale = 20, position = [0, 0, 0] }) => {
  return (
    <Canvas>
    <ambientLight intensity={1} />
    <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[20, 20, 20]} />
    <pointLight position={[-10, 10, 10]} />
    <Suspense fallback={null}>
      <Model modelPath={modelPath} scale={scale} position={position} />
      <OrbitControls />
    </Suspense>
  </Canvas>
  )
}

export default ModelViewer