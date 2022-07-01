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

import React, {Suspense, useRef, useState, useEffect} from 'react';
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
import ToDoPage from './components/ToDoPage';




function App() {

  const [cubes, saveWorld] = useStore((state) => [
    state.cubes, 
    state.saveWorld
  ])

  const [toDoTruthy, setToDoTruthy] = useState(false)
  //const [timeoutTruthy, setTimeoutTruthy] = useState(false)
  const [headerStyle, setHeaderStyle] = useState({display: 'none'})
  const [boxStyle, setBoxStyle] = useState({display: 'none'})
  const [move, setMove] = useState(true)

  const [number, setNumber] = useState(0)


  let h1Style = {}

  let divStyle = {}

  if(toDoTruthy === false) {
    h1Style = {display: 'none'}
    divStyle = {display: 'none'}
  } else {
  h1Style = {
    color: 'black',
    zIndex: 90,
    position: 'relative',
    textAlign: 'center',
    opacity: 1,
  }

  divStyle = {

    zIndex: 90,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%', 
    paddingLeft: '25%',
    paddingRight: '25%',
    paddingTop: '87vh',
    backgroundColor: 'white',
    opacity: 1
    
  }
}



  function showtoDoPage() {
    setToDoTruthy(true)
    setMove(false)
  }

  function collapsetoDoPage() {
    setToDoTruthy(false)
    setMove(true)
  }


  
  /*useInterval(() =>{
    saveWorld(cubes)
    console.log('saved')
  }, 10000)*/


  /*useEffect(() => {
    const timeout = setTimeout(() => {
       setToDoTruthy(num + 1);
     }, 2000);
   },[]);*/
  

  return (
    <div className="App">
    <ToDoPage h1Style={h1Style} divStyle={divStyle} collapsetoDoPage={collapsetoDoPage} number={number} setNumber={setNumber} />
      <Canvas className='Canvas1'>
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={0.25} />
      <pointLight position={[100, 100, 100]} castShadow intensity={0.7} />

      <Suspense fallback={null}>
        
      </Suspense>

      <Physics gravity={[0, -30, 0]} >
      

      
        <Ground position={[0, 0.5, 0]} />
        <Player position={[0, 3, 10]} move={move} />
        <House  scale={0.3} position={[0,0.5, 0]} onClick={showtoDoPage} />
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