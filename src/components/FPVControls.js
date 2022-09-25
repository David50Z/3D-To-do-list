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

    let screenLockCondition = props.screenLock
    let setScreenLockCondition = props.setScreenLock


    //react-three stuff
    const {camera, gl} = useThree()

    //So this is assigning the PointerLockControlsImpl to controls.
    //How? I don't know, still need to study useRef
    const controls = useRef()


    if(toDoTruthy === true) {
        controls.current.unlock()
        

    }

    if(chooseTruthy === true) {
        controls.current.unlock()
        

    }

    if(helpTruthy === true) {
        controls.current.unlock()
    }




    //console.log(toDoTruthy)
    useEffect(() => {

    const lockScreen = (event) => {
        if(String(event.target.className) === 'target') {
            controls.current.lock()  
            setClickEffect(true)      
        }
    }

    
    function screenLock(key) {



        document.removeEventListener("keydown", screenLock, false)
        document.removeEventListener("keydown", screenLock, true)

        //When user hits ctrl, the user can turn the virtual camera
        if(key.keyCode === 17) {
            
            controls.current.lock()
            setClickEffect(true)
                 
        }
            
        /*if(key.keyCode === 16) {
            setShiftTrue()

        } else if(key.keyCode === 192) {
            setShiftBool(!shiftBool)

        } else if(key.keyCode === 72 && chooseTruthy === false && toDoTruthy === false) {
            console.log(chooseTruthy, toDoTruthy)
            setHelpTruthy(true)
        }*/
        
        
    }

    //Makes the event listener for any keys being pressed
    //canvas.addEventListener('click', screenLock, false);
    document.addEventListener("click", lockScreen, false)
    })



    return (
        <pointerLockControlsImpl 
            ref={controls}
            args={[camera, gl.domElement]}
        />
    )
}

export default FPVControls