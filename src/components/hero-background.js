import React, { useRef } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import * as THREE from "three"

import Theme from "../theme/theme"

const Planet = props => {
  const mesh = useRef()

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh {...props} ref={mesh} scale={[1, 1, 1]} castShadow>
      <icosahedronBufferGeometry attach="geometry" />
      <meshPhongMaterial attach="material" color="white" flatShading />
    </mesh>
  )
}

const Skeleton = props => {
  const mesh = useRef()

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y -= 0.01))

  return (
    <mesh {...props} ref={mesh} scale={[1.2, 1.2, 1.2]} castShadow>
      <icosahedronBufferGeometry attach="geometry" />
      <meshPhongMaterial
        attach="material"
        color={0xffffff}
        wireframe
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

const Star = props => {
  const mesh = useRef()

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y -= 0.03))

  return (
    <mesh {...props} ref={mesh} scale={[0.04, 0.04, 0.04]} castShadow>
      <tetrahedronBufferGeometry attach="geometry" args={[2, 0]} />
      <meshPhongMaterial
        attach="material"
        color={0xffffff}
        side={THREE.DoubleSide}
        flatShading
      />
    </mesh>
  )
}

const HeroBackground = () => {
  return (
    <Canvas gl={{ antialias: true, alpha: true }}>
      <ambientLight color={Theme.colors.darkGray} intensity={1.0} />
      <directionalLight color={0x999999} position={[1, 0, 0]} />
      <directionalLight color={Theme.colors.main} position={[0.75, 1, 0.5]} />
      <directionalLight
        color={Theme.colors.accent}
        position={[-0.75, -1, 0.5]}
      />
      <Planet position={[0, 0, 0, 0]} />
      <Skeleton position={[0, 0, 0, 0]} />
      <Star position={[1, 1, 1, 1]} />
      <Star position={[1, -1, 1, -1]} />
      <Star position={[-1, 1, 1, 1]} />
      <Star position={[-1, -1, 1, -1]} />
    </Canvas>
  )
}

export default HeroBackground
