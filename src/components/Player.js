import React, {useEffect, useRef} from 'react'
import { useSphere, useBox } from '@react-three/cannon'
import { useThree, useFrame } from '@react-three/fiber'
import useKeyboardControls from '../hooks/useKeyboardControls';
import { Vector3 } from 'three';

import FPVcontrols from "./FPVControls"

const SPEED = 7


const Player = (props) => {
    const { camera } = useThree();
    const { moveForward, moveBackward, moveLeft, moveRight, jump } =
      useKeyboardControls();
    const [ref, api] = useSphere(() => ({
      mass: 1,
      type: 'Dynamic',
      ...props,
    }));
  
    const velocity = useRef([0, 0, 0]);

    useEffect(() => {
      api.velocity.subscribe((v) => (velocity.current = v));
    }, [api.velocity]);
  
    const pos = useRef([0, 0, 0]);
    useEffect(() => api.position.subscribe((v) => (pos.current = v)), [api.position]);
    //Look up subscribe
  
    useFrame(() => {
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
    });
    return (
      <>
      <FPVcontrols />
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