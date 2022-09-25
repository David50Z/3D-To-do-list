import React, {useEffect, useRef} from 'react'
import { useSphere, useBox } from '@react-three/cannon'
import { useThree, useFrame } from '@react-three/fiber'
import useKeyboardControls from '../hooks/useKeyboardControls';
import { Vector3 } from 'three';

import FPVcontrols from "./FPVControls"

const SPEED = 7


const Player = (props) => {

    let move = props.move
    let clickEffect = props.clickEffect
    let setClickEffect = props.setClickEffect

    let shiftBool = props.shiftBool
    let setShiftBool = props.setShiftBool

    let toDoTruthy = props.toDoTruthy
    let chooseTruthy = props.chooseTruthy

    let helpTruthy = props.helpTruthy
    let setHelpTruthy = props.setHelpTruthy

    let screenLock = props.screenLock
    let setScreenLock = props.setScreenLock


    //The camera that will be used to look at our virtual enviorment
    const { camera } = useThree();
    //Like I explained in the useKeyboardControlls hook, no idea!
    const { moveForward, moveBackward, moveLeft, moveRight, jump } =
      useKeyboardControls();

    //so long story short, this is our character, and what we will use to move around
    const [ref, api] = useSphere(() => ({
      mass: 1,
      type: 'Dynamic',
      position: [0, 3, 10],
      //...props,
    }));
  

    //characters speed
    const velocity = useRef([0, 0, 0]);


    useEffect(() => {
      //Gotta read up on subscribe
      api.velocity.subscribe((v) => (velocity.current = v));
    }, [api.velocity]);
  
    const pos = useRef([0, 0, 0]);
    useEffect(() => api.position.subscribe((v) => (pos.current = v)), [api.position]);

    useFrame(() => {
      if(move === true) {
        //basically makes the camera follow the sphere
      camera.position.copy(
        new Vector3(pos.current[0], pos.current[1], pos.current[2])
      );
      const direction = new Vector3();
  
      const frontVector = new Vector3(
        0,
        0,
        (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
      );
      const sideVector = new Vector3(
        (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
        0,
        0
      );
  
      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(SPEED)
        .applyEuler(camera.rotation);
  
      api.velocity.set(direction.x, velocity.current[1], direction.z);
  
      if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.01) {
        api.velocity.set(velocity.current[0], 15, velocity.current[2]);
      }
    }});
    //console.log(move)
    return (
      <>
      <FPVcontrols 
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
        <mesh ref={ref} />
      </>
    );
  };


  export default Player






  

  /*const Player = (props) => {
    
    const {
        moveForward,
        moveBackward,
        moveLeft,
        moveRight,
        jump
    } = useKeyboardControls()
    console.log("forward", moveForward)
    const {camera} = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        ...props,
    }))
    const velocity = useRef([0,0,0])
    useEffect(() => {
        api.velocity.subscribe((v) => (velocity.current = v))
    }, [api.velocity])





    useFrame(() => {
        //camera.position.copy(ref.current.position)
        const direction = new Vector3();
        const frontVector = new Vector3(
            0,
            0,
            (moveForward ? 1 : 0) - (moveBackward ? 1 : 0)
            )
        const sideVector = new Vector3((moveLeft ? 1 : 0) - (moveRight ? 1 : 0), 
            0, 
            0)

    
        direction.
        subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(SPEED)
        .applyEuler(camera.rotation)

        api.velocity.set(direction.x, velocity.current[1], direction.z)
    })

    return (
        <>
            <mesh {...ref} />
        </>
    )
}

export default Player*/