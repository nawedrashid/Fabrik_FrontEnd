import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Model = ( { modelPath, scale = 20, position = [0,0,0] }) => {
  const ref = useRef();
  const models = useLoader(GLTFLoader, modelPath );
  const [hovered, hover] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.y += 0.003));
  return (
    <>
    <primitive
      ref={ref}
      object={models.scene}
      position={position}
      scale={hovered ? scale * 1 : scale}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    />
  </>

  )
}

export default Model;