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
import './App.css';
//import Box from './components/Box';
import Cube from './components/Cube'
import {Ground} from './components/Ground'
import Player from './components/Player'

import {Canvas} from "@react-three/fiber"
import {Stars, Sky, useGLTF } from '@react-three/drei';
import { Physics} from "@react-three/cannon";
import {TextureLoader, RepeatWrapping} from 'three';
import {useStore} from './hooks/useStore'
import {useInterval} from './hooks/useInterval'
import {nanoid} from 'nanoid'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import axios from 'axios';

import ChooseModel from './components/ChooseModel';
import ToDoPage from './components/childComponents/ToDoPage';

import House from './components/models/House'; 
import Desk from './components/models/Desk'
import Hut from './components/models/Hut'
import Choose from './components/models/Choose'
import { click } from '@testing-library/user-event/dist/click';





function App() {


  //Ignore this
  const [cubes, saveWorld] = useStore((state) => [
    state.cubes, 
    state.saveWorld
  ])

  //Gets data from the property world, from local storage
  let savedModels =  JSON.parse(window.localStorage.getItem("world")) || [{list: [], index: 0}]
  console.log(window.localStorage.getItem("world"))


  //if toDoTruthy equals false, users to do list will not be visible
  //else, it will pop up on users screen
  const [toDoTruthy, setToDoTruthy] = useState(false)

  //Same thing as toDoTruthy, except for the choose model menu
  const [chooseTruthy, setChooseTruthy] = useState(false)

  //if move equals true, user can move. Else, user can't
  const [move, setMove] = useState(true)

  //the list of models with their own to do list
  const [models, setModels] = useState(savedModels)

  //Literally just a usestate that I use to rerender App.js
  const [number, setNumber] = useState(0)

  //Ignore this
  const [bool, setBool] = useState(false)

  //if clickEffect is false, user can't click on models. Else
  //users can
  const [clickEffect, setClickEffect] = useState(false)

  
  //The model the user wants to represent their to do list
  const [userChoice, setUserChoice] = useState(0)

  //The current to do list the user has chosen to look and, and update
  const [chosenList, setChosenList] = useState([{list: [], index: 0}])


  
  //const [toDos, setToDos] = useState(chosenList[0].list)

  //console.log(updatedList)
  //console.log(chosenList)
  //console.log(models.length)



    //const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))

 

    const setLocalStorage = (key, value) =>
    window.localStorage.setItem(key, JSON.stringify(value))


  useInterval(() =>{
    window.localStorage.setItem("world", JSON.stringify(models))
    //saveWorld(models)
    console.log('saved')
  }, 10000)




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

  function showChoosePageFunc() {
    setChooseTruthy(true)
    setMove(false)
  }

  function showToDoPageFunc() {
    setToDoTruthy(true)
    setMove(false)    
  }

  function showtoDoPage() {
    if(clickEffect === true) {
      showToDoPageFunc()
    }
  }

  function collapsetoDoPage() {
    let changedModel = models
    console.log(chosenList[0])
    console.log(changedModel)
    changedModel[chosenList[0].index].list = chosenList[0].list 
    setModels(changedModel)
    setToDoTruthy(false)
    setMove(true)
    setClickEffect(false)
  }

  function showChoosePage() { 
    if(clickEffect === true) {
      showChoosePageFunc()
    }
  }

  


  



  /*useEffect(() => {
    const timeout = setTimeout(() => {
       setToDoTruthy(num + 1);
     }, 2000);
   },[]);*/
  


  return (
    <div className="App">
    <ToDoPage 
    h1Style={h1Style} 
    divStyle={divStyle} 
    collapsetoDoPage={collapsetoDoPage} 
    number={number} 
    setNumber={setNumber} 
    chosenList={chosenList}
    setChosenList={setChosenList}
    models={models} 
    setModels={setModels}

    />
    <ChooseModel 
        chooseTruthy={chooseTruthy}
        setChooseTruthy={setChooseTruthy}

        userChoice={userChoice}
        setUserChoice={setUserChoice}

        move={move}
        setMove={setMove}

        clickEffect={clickEffect}
        setClickEffect={setClickEffect}
         />
      <Canvas className='Canvas1'>
      
      <ambientLight intensity={0.25} />
      <pointLight position={[100, 100, 100]} castShadow intensity={0.7} color={'blue'} />
      <Physics gravity={[0, -30, 0]} >
      
        <Ground position={[0, 0.5, 0] } models={models} setModels={setModels} userChoice={userChoice} setUserChoice={setUserChoice}
        />
        <Player position={[0, 3, 10]} move={move} clickEffect={clickEffect} setClickEffect={setClickEffect}  />
        {/*cubes.map((cube) => (
          <Cube position={cube.pos} key={nanoid()} texture={cube.texture} />
          
        ))*/}

        {models.map((item, index) => {
          if(item.model === 1) {
            return <House onClick={() => {

      
              showtoDoPage()
              setChosenList([item])
              //setToDos(item)
              
              }} scale={0.3} position={[item.x, item.y - 0.5, item.z]} />
          } else if(item.model === 2) {
            return <Desk onClick={() => {
              showtoDoPage()
              setChosenList([item])
            }} scale={0.025} position={[item.x, item.y - 0.5, item.z]} />
          }
        })}

        <Choose  position={[0, 2, 0]} scale={1} onClick={showChoosePage} />


        <Hut position={[0, 8.5, 0]} scale={0.7} />

        <Stars />

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