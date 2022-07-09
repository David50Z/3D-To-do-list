/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Mantas Stankaitis (https://sketchfab.com/mansta9)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/cosy-hut-28d0ad2f6e8f44d2ba1b2c05280548c5
title: Cosy hut
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/hut/hut.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={44.09}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.ground_bot} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.ground_top} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.bucket_outside} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.bucket_inside} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials.bucket_handle} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials.snowman_hair} />
          <mesh geometry={nodes.defaultMaterial_6.geometry} material={materials.snowman_eyebrowR} />
          <mesh geometry={nodes.defaultMaterial_7.geometry} material={materials.snowman_eyebrowL} />
          <mesh geometry={nodes.defaultMaterial_8.geometry} material={materials.snowman_mouth} />
          <mesh geometry={nodes.defaultMaterial_9.geometry} material={materials.snowman_potatoEyeL} />
          <mesh geometry={nodes.defaultMaterial_10.geometry} material={materials.snowman_potatoEyeR} />
          <mesh geometry={nodes.defaultMaterial_11.geometry} material={materials.snowman_body03} />
          <mesh geometry={nodes.defaultMaterial_12.geometry} material={materials.carrot} />
          <mesh geometry={nodes.defaultMaterial_13.geometry} material={materials.wood01} />
          <mesh geometry={nodes.defaultMaterial_14.geometry} material={materials.wood02} />
          <mesh geometry={nodes.defaultMaterial_15.geometry} material={materials.wood04} />
          <mesh geometry={nodes.defaultMaterial_16.geometry} material={materials.wood03} />
          <mesh geometry={nodes.defaultMaterial_17.geometry} material={materials.snowman_potato01} />
          <mesh geometry={nodes.defaultMaterial_18.geometry} material={materials.snowman_potato02} />
          <mesh geometry={nodes.defaultMaterial_19.geometry} material={materials.snowman_potato03} />
          <mesh geometry={nodes.defaultMaterial_20.geometry} material={materials.snowman_body02} />
          <mesh geometry={nodes.defaultMaterial_21.geometry} material={materials.shovel_head} />
          <mesh geometry={nodes.defaultMaterial_22.geometry} material={materials.shovel_handle} />
          <mesh geometry={nodes.defaultMaterial_23.geometry} material={materials.snowman_body01} />
          <mesh geometry={nodes.defaultMaterial_24.geometry} material={materials.snow_lake} />
          <mesh geometry={nodes.defaultMaterial_25.geometry} material={materials.snow_top} />
          <mesh geometry={nodes.defaultMaterial_26.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_27.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_28.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_29.geometry} material={materials.bridge_planksTop} />
          <mesh geometry={nodes.defaultMaterial_30.geometry} material={materials.bridge_planks} />
          <mesh geometry={nodes.defaultMaterial_31.geometry} material={materials.bridgePole_top} />
          <mesh geometry={nodes.defaultMaterial_32.geometry} material={materials.bridgePole_side} />
          <mesh geometry={nodes.defaultMaterial_33.geometry} material={materials.bridge_underPlank1} />
          <mesh geometry={nodes.defaultMaterial_34.geometry} material={materials.bridge_underPlank2} />
          <mesh geometry={nodes.defaultMaterial_35.geometry} material={materials.hut_base} />
          <mesh geometry={nodes.defaultMaterial_36.geometry} material={materials.hut_wallSides} />
          <mesh geometry={nodes.defaultMaterial_37.geometry} material={materials.hut_walls} />
          <mesh geometry={nodes.defaultMaterial_38.geometry} material={materials.hut_doorFrame} />
          <mesh geometry={nodes.defaultMaterial_39.geometry} material={materials.hut_planksInside} />
          <mesh geometry={nodes.defaultMaterial_40.geometry} material={materials.hut_planksOutside} />
          <mesh geometry={nodes.defaultMaterial_41.geometry} material={materials.hut_roof} />
          <mesh geometry={nodes.defaultMaterial_42.geometry} material={materials.hut_windowsLight} />
          <mesh geometry={nodes.defaultMaterial_43.geometry} material={materials.hut_windows} />
          <mesh geometry={nodes.defaultMaterial_44.geometry} material={materials.hut_glass} />
          <mesh geometry={nodes.defaultMaterial_45.geometry} material={materials.hut_snow1} />
          <mesh geometry={nodes.defaultMaterial_46.geometry} material={materials.fence1_snow} />
          <mesh geometry={nodes.defaultMaterial_47.geometry} material={materials.fence1_plank} />
          <mesh geometry={nodes.defaultMaterial_48.geometry} material={materials.fence1_pole} />
          <mesh geometry={nodes.defaultMaterial_49.geometry} material={materials.fence2_snow} />
          <mesh geometry={nodes.defaultMaterial_50.geometry} material={materials.fence2_plank} />
          <mesh geometry={nodes.defaultMaterial_51.geometry} material={materials.fence2_pole} />
          <mesh geometry={nodes.defaultMaterial_52.geometry} material={materials.hut_snow2} />
          <mesh geometry={nodes.defaultMaterial_53.geometry} material={materials.moon} />
          <mesh geometry={nodes.defaultMaterial_54.geometry} material={materials.Stars} />
          <mesh geometry={nodes.defaultMaterial_55.geometry} material={materials.sledge_string} />
          <mesh geometry={nodes.defaultMaterial_56.geometry} material={materials.sledge_metal} />
          <mesh geometry={nodes.defaultMaterial_57.geometry} material={materials.sledge_wood} />
          <mesh geometry={nodes.defaultMaterial_58.geometry} material={materials.bridgePole_top} />
          <mesh geometry={nodes.defaultMaterial_59.geometry} material={materials.bridgePole_side} />
          <mesh geometry={nodes.defaultMaterial_60.geometry} material={materials.bridgePole_top} />
          <mesh geometry={nodes.defaultMaterial_61.geometry} material={materials.bridgePole_side} />
          <mesh geometry={nodes.defaultMaterial_62.geometry} material={materials.bridgePole_side} />
          <mesh geometry={nodes.defaultMaterial_63.geometry} material={materials.bridgePole_top} />
          <mesh geometry={nodes.defaultMaterial_64.geometry} material={materials.bridgePole_side} />
          <mesh geometry={nodes.defaultMaterial_65.geometry} material={materials.bridgePole_top} />
          <mesh geometry={nodes.defaultMaterial_66.geometry} material={materials.bridgePole_side} />
          <mesh geometry={nodes.defaultMaterial_67.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_68.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_69.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_70.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_71.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_72.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_73.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_74.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_75.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_76.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_77.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_78.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_79.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_80.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_81.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_82.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_83.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_84.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_85.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_86.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_87.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_88.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_89.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_90.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_91.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_92.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_93.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_94.geometry} material={materials.bridgePole_top} />
          <mesh geometry={nodes.defaultMaterial_95.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_96.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_97.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_98.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_99.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_100.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_101.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_102.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_103.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_104.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_105.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_106.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_107.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_108.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_109.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_110.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_111.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_112.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_113.geometry} material={materials.hut_insideLight} />
          <mesh geometry={nodes.defaultMaterial_114.geometry} material={materials.hut_insideWalls} />
          <mesh geometry={nodes.defaultMaterial_115.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_116.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_117.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_118.geometry} material={materials.hut_doorHolders} />
          <mesh geometry={nodes.defaultMaterial_119.geometry} material={materials.hut_doorBase} />
          <mesh geometry={nodes.defaultMaterial_120.geometry} material={materials.hut_doorPlanksVertical} />
          <mesh geometry={nodes.defaultMaterial_121.geometry} material={materials.hut_doorPlanksHorizontal} />
          <mesh geometry={nodes.defaultMaterial_122.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_123.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_124.geometry} material={materials.spurce_top} />
          <mesh geometry={nodes.defaultMaterial_125.geometry} material={materials.spruce_snow} />
          <mesh geometry={nodes.defaultMaterial_126.geometry} material={materials.spurce_branches} />
          <mesh geometry={nodes.defaultMaterial_127.geometry} material={materials.spurce_top} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/hut/hut.glb')