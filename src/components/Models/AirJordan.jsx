import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function AirJordan(props) {
  const { main, secondary, tertiary, bottom } = props;
  const { nodes, materials } = useGLTF('/model/nike_air_jordan.glb');
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.452, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.001']}
          material-color={main}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['Material.001']}
        />
      </group>
      <group position={[0, -0.452, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials['Material.002']}
          material-color={bottom}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials['Material.009']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials['Material.003']}
        position={[0, -0.452, 0]}
        scale={1.031}
        material-color={secondary}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials['Material.007']}
        position={[0.725, -0.892, 0]}
        material-color={secondary}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials['Material.009']}
        position={[0, -0.452, 0]}
        scale={1.026}
        material-color={tertiary}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials['Material.003']}
        position={[0, -0.452, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['Material.003']}
        position={[0, -0.452, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials['Material.009']}
        position={[0, -0.452, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials['Material.001']}
        position={[0, -0.452, 0]}
        scale={1.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials['Material.001']}
        position={[0, -0.452, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials['Material.003']}
        position={[0.296, 0.318, 0]}
        rotation={[Math.PI / 2, -0.42, Math.PI / 2]}
        scale={[0.247, 0.162, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials['Material.003']}
        position={[0.296, 0.318, 0]}
        rotation={[1.84, -0.42, Math.PI / 2]}
        scale={[0.247, 0.162, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials['Material.003']}
        position={[-0.852, -0.69, 0]}
        rotation={[Math.PI / 2, -1.15, Math.PI / 2]}
        scale={[0.247, 0.162, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials['Material.003']}
        position={[-0.852, -0.69, 0]}
        rotation={[2.134, -1.099, 1.971]}
        scale={[0.247, 0.162, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials['Material.003']}
        position={[-0.647, -0.579, 0]}
        rotation={[Math.PI / 2, -1.15, Math.PI / 2]}
        scale={[0.247, 0.162, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials['Material.003']}
        position={[-0.647, -0.579, 0]}
        rotation={[2.134, -1.099, 1.971]}
        scale={[0.247, 0.162, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials['Material.003']}
        position={[-0.434, -0.467, 0]}
        rotation={[Math.PI / 2, -1.066, Math.PI / 2]}
        scale={[0.247, 0.162, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials['Material.003']}
        position={[-0.434, -0.467, 0]}
        rotation={[2.013, -0.968, 1.831]}
        scale={[0.247, 0.162, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials['Material.003']}
        position={[-0.23, -0.338, 0]}
        rotation={[Math.PI / 2, -0.931, Math.PI / 2]}
        scale={[0.247, 0.162, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials['Material.003']}
        position={[-0.23, -0.338, 0]}
        rotation={[1.945, -0.845, 1.744]}
        scale={[0.247, 0.162, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_46.geometry}
        material={materials['Material.003']}
        position={[-0.032, -0.177, 0]}
        rotation={[Math.PI / 2, -0.994, Math.PI / 2]}
        scale={[0.247, 0.162, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_48.geometry}
        material={materials['Material.003']}
        position={[-0.032, -0.187, 0]}
        rotation={[1.973, -0.903, 1.782]}
        scale={[0.247, 0.162, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_50.geometry}
        material={materials['Material.003']}
        position={[0.107, -0.019, 0]}
        rotation={[Math.PI / 2, -0.644, Math.PI / 2]}
        scale={[0.247, 0.162, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_52.geometry}
        material={materials['Material.003']}
        position={[0.107, -0.019, 0]}
        rotation={[1.864, -0.573, 1.621]}
        scale={[0.247, 0.162, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_59.geometry}
        material={materials['Material.003']}
        position={[0, -0.452, 0]}
      />
    </group>
  );
}

useGLTF.preload('/model/nike_air_jordan.glb');
