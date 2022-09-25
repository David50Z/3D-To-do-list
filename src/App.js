
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
import HelpPage from './components/HelpPage'

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
  //console.log(window.localStorage.getItem("world"))


  //if toDoTruthy equals false, users to do list will not be visible
  //else, it will pop up on users screen
  const [toDoTruthy, setToDoTruthy] = useState(false)

  //Same thing as toDoTruthy, except for the choose model menu
  const [chooseTruthy, setChooseTruthy] = useState(false)

  const [helpTruthy, setHelpTruthy] = useState(false)
  //if move equals true, user can move. Else, user can't
  const [move, setMove] = useState(true)

  //the list of models with their own to do list
  const [models, setModels] = useState(savedModels)

  //Literally just a usestate that I use to rerender App.js
  const [number, setNumber] = useState(false)

  //Ignore this
  const [bool, setBool] = useState(false)

  //if clickEffect is false, user can't click on models. Else
  //users can
  const [clickEffect, setClickEffect] = useState(false)
  const [shiftBool, setShiftBool] = useState(false)

  
  //The model the user wants to represent their to do list
  const [userChoice, setUserChoice] = useState(0)

  //The current to do list the user has chosen to look and, and update
  const [chosenList, setChosenList] = useState([{list: [], index: 0}])

  const [loading, setLoading] = useState(true)

  const [mousePosition, setMousePosition] = useState({X: 0, Y: 0})

  const [screenLock, setScreenLock] = useState({lock: false, UAWA: false})

  const [target, setTarget] = useState(false)

  const [clickMe, setClickMe] = useState(true)


  //Saves users to do lists and models every 10 seconds
  useInterval(() =>{
    window.localStorage.setItem("world", JSON.stringify(models))
    //saveWorld(models)
    //console.log('saved')
  }, 5000)

  async function getCity(country) {
  
    //let city
    
    const response = await fetch('https://jsonmock.hackerrank.com/api/countries?name=' + country)
    const city = await response.json()
    
    if(city.data.length === 0) {
      return - 1
    } else {
      return city
    }
  }
  
  //console.log(getCity("afghaniStan"))

  //HTML elements styling (Made like this because I don't know how to use return D:)
  let h1Style = {}

  let divStyle = {}

  //Sets the to do lists to not be displayed if toDoTruthy is false
  if(toDoTruthy === false) {
    h1Style = {display: 'none'}
    divStyle = {display: 'none'}
  }
  //Styling for to do list if toDoTruthy is true
  else {
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
    transform: 'translate(-50%, -50%)', 
    paddingLeft: '25%',
    paddingRight: '25%',
    paddingTop: '87vh',
    backgroundColor: 'white',
    opacity: 1
    
  }
}



  //Helper function that activates the choose model page, while allowing user to move
  function showChoosePageFunc(item) {
    setChooseTruthy(true)
    setMove(false)
    
  }
  //Helper function that activates the to do list page, while allowing user to move
  function showToDoPageFunc(item) {
    setToDoTruthy(true)
    setMove(false)    
    setChosenList([item])
  }

  //The checks if clickEffect is true before activating to do list page
  function showtoDoPage(item) {
    if(clickEffect === true) {
      showToDoPageFunc(item)
    }
  }
  //Updates the chosen models to do list in the models state array
  function collapsetoDoPage() {
    let changedModel = models
    console.log(chosenList[0])
    console.log(changedModel)
    changedModel[chosenList[0].index].list = chosenList[0].list 
    setModels(changedModel)
    setToDoTruthy(false)
    setMove(true)
    setClickEffect(false)
    setClickMe(true)
  }

  //The checks if clickEffect is true before activating the choose model page
  function showChoosePage() { 
    if(clickEffect === true) {
      showChoosePageFunc()
    }
  }

  const rotateItem = (item) => {
    item.rotation[1] = item.rotation[1] - 0.3
    setNumber(number + 1)
  }

  //console.log(loading)

  /*const setShifty = event => {
    if(event.keyCode === 16) {
      setShiftBool(!shiftBool)
      
    }
    console.log(shiftBool)
  }*/

  const controls = (key) => {


      
    if(key.keyCode === 16 && toDoTruthy === false ) {
        setShiftBool(!shiftBool)

    } else if(key.keyCode === 192) {
        setShiftBool(!shiftBool)

    } else if(key.keyCode === 72 && chooseTruthy === false && toDoTruthy === false) {
        console.log(chooseTruthy, toDoTruthy)
        setHelpTruthy(!helpTruthy)
    }
  }


  useEffect(() => {
    const timeout = setTimeout(() => {
       setLoading(false);
       setTarget(true)
     }, 2000);

     /*function setShifty(event) {
      if(event.keyCode === 16) {
        setShiftBool(!shiftBool)
        console.log(shiftBool)
      }
     }

     document.addEventListener("keydown", setShifty)*/
     
   }, []);




  return (
    <div className="App" tabIndex="0" onClick={(event) => {console.log(event)}} onKeyDown={(event) => {controls(event)}}>
    <h1 style={{
          zIndex: 90,
          position: 'absolute',
          color: 'white',
          marginLeft: '20px'
    }} >Press H button for help</h1>

    {clickMe && target &&
    <div
        style={{zIndex: 90,
        position: 'absolute',
        left: '40%',
        top: '42%',
        transform: 'translateX(-40%)',
        transform: 'translateY(-42%)',
        color: 'white',
        width: '400px'
        }}
    >
      <h1 style={{textAlign: 'center'}}>Click the green circle!</h1>
    </div>
    }

    {target && <div className='target' style={{
          zIndex: 90,
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translateX(-50%)',
          transform: 'translateY(-50%)',
          background: 'green',
          width: '50px',
          height: '50px',
          opacity: 0.4,
          borderRadius: "50%",
          
    }}

    onClick={() => {setClickMe(false)}}
    ></div>}

    {loading &&
      <h1 style={{
            zIndex: 90,
            position: 'absolute',
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            color: 'white',
      }}>Loading...</h1>
    }
    <ToDoPage 
    /*Passes the data to the ToDoPage component*/ 
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

        setClickMe={setClickMe}
         />

    <HelpPage 
      helpTruthy={helpTruthy}
      setHelpTruthy={setHelpTruthy}
      move={move}
      setMove={setMove}
      clickEffect={clickEffect}
      setClickEffect={setClickEffect}
      setClickMe={setClickMe}
    />

      <Canvas className='Canvas1'>
      
      <ambientLight /*Makes all objects in the vertual enviorment light up by the specified amount */ intensity={0.25} />
      <pointLight /*The Threejs equivelent to a light bulb, and its position */ position={[100, 100, 100]} castShadow intensity={0.7} color={'blue'} />
      <Physics gravity={[0, -30, 0]} /*Allows objects to fall */ >
      
        <Ground /*The ground the user is standing on */ position={[0, 0.5, 0] } models={models} setModels={setModels} userChoice={userChoice} setUserChoice={setUserChoice}
        />
        <Player /*This component manages the users ability to move, and look around */ 
        position={[0, 3, 10]} move={move} 
        clickEffect={clickEffect} 
        setClickEffect={setClickEffect}
        shiftBool={shiftBool}
        setShiftBool={setShiftBool}
        toDoTruthy={toDoTruthy}
        chooseTruthy={chooseTruthy}
        helpTruthy={helpTruthy}
        setHelpTruthy={setHelpTruthy}

        screenLock={screenLock}
        setScreenLock={setScreenLock}
        />

        
        {/**Ignore this */

          /*cubes.map((cube) => (
          <Cube position={cube.pos} key={nanoid()} texture={cube.texture} />
          
        ))*/}

        {/*Looping through the models array. Each object in the array will have a property called model.
        If models property === 1 A house model will appear in the spot the user next clicks, if the value
        is 2, a desk will appear */ 

        models.map((item, index) => {
          if(item.model === 1) {
            return <House onClick={() => {


              console.log(item.rotation[1])
              //To do list page will pop up on click
              if(shiftBool === false) {
              showtoDoPage(item)
              } else {
                //item.rotation[1] = item.rotation[1] - 0.3
                rotateItem(item)
              }

              
              //This individual models to do list will be selected 
              
              
              }} scale={0.3} /*Each model will have x,y,z properties to tell
              Threejs where you want this model to be placed */ 
              position={[item.x, item.y - 0.5, item.z]}  rotation={[0, item.rotation[1], 0]} />
          } else if(item.model === 2) {
            /*Same thing as expressed above, except for Desk models */
            return <Desk onClick={() => {
              /*showtoDoPage()
              setChosenList([item])*/
              console.log(item.rotation[1])
              //To do list page will pop up on click
              if(shiftBool === false) {
              showtoDoPage(item)
              } else {
                //item.rotation[1] = item.rotation[1] - 0.3
                rotateItem(item)
              }
            }} scale={0.025} position={[item.x, item.y - 0.5, item.z]} rotation={[0, item.rotation[1], 0]} />
          }
        })}

        <Choose /*The 3D model the user clicks on to choose a new model they want to make*/  
        position={[0, 2, 0]} scale={1} onClick={showChoosePage} />


        <Hut /*3D model for the virtual enviorment */ position={[0, 8.5, 0]} scale={0.7} />

        <Stars /**Stars! */ />

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