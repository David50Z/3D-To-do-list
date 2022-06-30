/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, {Suspense, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
//import Box from './components/Box';
import Cube from './components/Cube'
import {Ground} from './components/Ground'
import Player from './components/Player'

import {Canvas} from "@react-three/fiber"
import { OrbitControls, Stars, Sky, useGLTF } from '@react-three/drei';
import { Physics, Debug, usePlane, useBox, useSphere } from "@react-three/cannon";
import {TextureLoader, RepeatWrapping} from 'three';
import {useStore} from './hooks/useStore'
import {useInterval} from './hooks/useInterval'
import {nanoid} from 'nanoid'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import axios from 'axios';
import House from './components/House';

/*function House({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/house.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.ground_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_06_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_013_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_016_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_012_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_00_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_03_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_09_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_014_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_023_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_02_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_07_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_04_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_08_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_010_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_011_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_015_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_017_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_019_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_020_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_021_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_022_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_018_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_029_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_027_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_038_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_042_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_026_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_024_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_030_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_032_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_028_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_036_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_037_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_034_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_025_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_035_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_039_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_040_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_033_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_041_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_043_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_044_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_045_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_048_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_047_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_046_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_053_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_049_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_061_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_066_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_068_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_056_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_057_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_060_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_058_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_055_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_062_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_063_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_064_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_052_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_050_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_051_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_054_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_059_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_065_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_067_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_074_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_084_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_075_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_077_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_080_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_073_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_082_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_069_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_078_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_071_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_079_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_072_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_081_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_070_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_083_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_086_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_076_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_090_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0103_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_094_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_092_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_095_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_098_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_089_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_085_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_093_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_087_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_096_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_088_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_099_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0100_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0102_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0101_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_091_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0104_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0105_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0106_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0107_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0108_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0109_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0110_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0112_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0111_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0113_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0116_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0114_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0115_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0118_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0119_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0120_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0117_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.grass_0121_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.flower_00_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.flower_01_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.flower_02_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.flower_03_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.flower_04_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.flower_05_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.flower_06_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.flower_07_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.flower_08_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.flower_09_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.flower_10_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.crop_00_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.crop_01_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.crop_02_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.crop_03_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.dirt_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.chimney_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.house_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.support_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.fence_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.ball_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.rock_00_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.rock_01_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.rock_02_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.rock_03_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.rock_04_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.butterfly_00_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.butterfly_02_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.butterfly_03_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.butterfly_04_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.butterfly_05_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.butterfly_06_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.butterfly_07_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.butterfly_08_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.dragonfly_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.tree_00_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.tree_01_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.tree_02_main_mat_0.geometry} material={materials.main_mat} />
          <mesh geometry={nodes.tree_stump_main_mat_0.geometry} material={materials.main_mat} />
        </group>
      </group>
    </group>
  )
}*/

function post() {
  axios.post('https://reqres.in/invalid-url').then((res) => {
    console.log(res)
  })
}




function App() {

  const [cubes, saveWorld] = useStore((state) => [
    state.cubes, 
    state.saveWorld
  ])

  useInterval(() =>{
    saveWorld(cubes)
    console.log('saved')
  }, 10000)

  return (
    <div className="App">
      <Canvas>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.25} />
      <pointLight position={[100, 100, 100]} castShadow intensity={0.7} />

      <Suspense fallback={null}>
        
      </Suspense>

      <Physics gravity={[0, -30, 0]} >
      

      
        <Ground position={[0, 0.5, 0]} />
        <Player position={[0, 3, 10]} />
        <House onClick={post} position={[0,0.5, 0]}/>
        {cubes.map((cube) => (
          <Cube position={cube.pos} key={nanoid()} texture={cube.texture} />
          
        ))}

      </Physics>
      </Canvas>
    </div>
  );
}

export default App;

// <Cube position={[0, 0, 0]} type ="wood" />
















/*<Boxx mass={1} position={[0, 2, 0]} />
<Plane />*/



/*      <Canvas  className='canvas'>
<OrbitControls enableZoom={false} />
  <ambientLight intensity={0.5} />
  <directionalLight position={[-2, 5, 2]} intensity={1} />
  <Suspense fallback={null}>
    <Box />
  </Suspense>
  

<OrbitControls enableZoom={false} />
  <ambientLight intensity={0.5} />
  <directionalLight position={[-2, 5, 2]} intensity={1} />
 
    <Sphere />
  
</Canvas>*/

//"drei": "^2.2.21",

/*function Boxx(props) {
  const [ref, api] = useSphere(() => ({...props}))
  return (
    <mesh onClick={() => {
      api.velocity.set(0, 0, 0)
    }} ref={ref}>
      <sphereBufferGeometry attatch="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

function Plane(props) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI /2, 0, 0,]
  }))
  return (
    <mesh position={[0,-0,0]} rotation={[-Math.PI / 2, 0, 0]} >
      <planeBufferGeometry attatch="geometry" args={[100,100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  )
}*/