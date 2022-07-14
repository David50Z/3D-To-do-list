import React, {useEffect, useRef} from 'react';
import { extend, useThree } from "@react-three/fiber"
import { PointerLockControls as PointerLockControlsImpl } from "three/examples/jsm/controls/PointerLockControls"

//This is a three function that allows the developer to effect the cursor,
//and get cursor data like its position on the screen
extend({PointerLockControlsImpl})

const FPVControls = (props) => {

    let clickEffect = props.clickEffect
    let setClickEffect = props.setClickEffect

    let shiftBool = props.shiftBool
    let setShiftBool = props.setShiftBool

    let toDoTruthy = props.toDoTruthy
    let chooseTruthy = props.chooseTruthy

    let helpTruthy = props.helpTruthy
    let setHelpTruthy = props.setHelpTruthy


    //react-three stuff
    const {camera, gl} = useThree()

    //So this is assigning the PointerLockControlsImpl to controls.
    //How? I don't know, still need to study useRef
    const controls = useRef()

    const lockScreen = () => {
        controls.current.lock()
        setClickEffect(true)
    }


    const setShiftTrue = () => {
        setShiftBool(true)
    }
    const setShiftFalse = () => {
        setShiftBool(true)
    } 

    const shiftHelp = () => {
        if(shiftBool === true) {

            setShiftTrue()
        } else {

            setShiftFalse()
        }
    }

    if(toDoTruthy === true) {
        controls.current.unlock()
    }

    if(chooseTruthy === true) {
        controls.current.unlock()
    }

    if(helpTruthy === true) {
        controls.current.unlock()
    }

useEffect(() => {
    function screenLock(key) {

        //When user hits ctrl, the user can turn the virtual camera
        if(key.keyCode === 17) {
            
            /*controls.current.lock()
            setClickEffect(true)*/
            lockScreen()       
        }
            
        if(key.keyCode == 16) {
            setShiftTrue()

        } else if(key.keyCode === 192) {
            setShiftBool(false)

        } else if(key.keyCode === 187) {
            setHelpTruthy(true)
        }
        
        
    }

    //Makes the event listener for any keys being pressed
    //canvas.addEventListener('click', screenLock, false);
    document.addEventListener("keydown", screenLock, false)

}, [])

    return (
        <pointerLockControlsImpl 
            ref={controls}
            args={[camera, gl.domElement]}
        />
    )
}

export default FPVControls