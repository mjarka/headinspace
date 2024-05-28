/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Lines(props) {
  const { nodes, materials } = useGLTF("/lines.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        scale={[0.003, 0.003, 57.384]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[1.088, -0.989, 0]}
        scale={[0.003, 0.003, 57.384]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[0.802, -2.052, 0]}
        scale={[0.003, 0.003, 57.384]}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-0.97, -2.114, 0]}
        scale={[0.003, 0.003, 57.384]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[1.088, 0.361, 0]}
        scale={[0.003, 0.003, 57.384]}
      />
    </group>
  );
}

useGLTF.preload("./lines.glb");